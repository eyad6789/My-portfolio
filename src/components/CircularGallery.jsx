import React, { useEffect, useRef, useState } from 'react';

// Simplified OGL-like classes for the gallery
class SimpleRenderer {
  constructor(options = {}) {
    this.canvas = document.createElement('canvas');
    this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
    this.width = 0;
    this.height = 0;
    
    if (!this.gl) {
      console.error('WebGL not supported');
      return;
    }
    
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.gl.clearColor(0, 0, 0, 0);
  }
  
  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.width = width + 'px';
    // this.canvas.style.height = height + 'px';
    this.gl.viewport(0, 0, width, height);
  }
  
  clear() {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }
}

class CircularGalleryItem {
  constructor(options) {
    this.element = document.createElement('div');
    this.element.className = 'gallery-item';
    this.element.style.cssText = `
      position: absolute;
      width: 200px;
      height: 250px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
      cursor: pointer;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      transform-style: preserve-3d;
    `;
    
    this.index = options.index;
    this.totalItems = options.totalItems;
    this.radius = options.radius || 300;
    this.angle = 0;
    this.targetAngle = 0;
    this.rotationSpeed = 0.02;
    this.data = options.data;
    
    // Set content
    if (this.data.image) {
      const img = document.createElement('img');
      img.src = this.data.image;
      img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
      this.element.appendChild(img);
    } else {
      this.element.innerHTML = this.data.text || `Item ${this.index + 1}`;
      this.element.style.background = this.data.gradient || `linear-gradient(135deg, hsl(${this.index * 360 / this.totalItems}, 70%, 60%) 0%, hsl(${(this.index * 360 / this.totalItems) + 30}, 70%, 40%) 100%)`;
    }
    
    // Add hover effects
    this.element.addEventListener('mouseenter', () => {
      this.element.style.transform = this.element.style.transform.replace(/scale\([^)]*\)/, '') + ' scale(1.1)';
      this.element.style.boxShadow = '0 12px 35px rgba(0,0,0,0.4)';
    });
    
    this.element.addEventListener('mouseleave', () => {
      this.element.style.transform = this.element.style.transform.replace(/scale\([^)]*\)/, '') + ' scale(1)';
      this.element.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
    });
  }
  
  update(globalRotation, time) {
    // Calculate position in full circle starting from bottom (button position)
    const itemAngle = (this.index / this.totalItems) * Math.PI * 2 + globalRotation;
    
    // Start from bottom center (button position) and go in full circle
    const x = Math.cos(itemAngle - Math.PI/2) * this.radius;
    const y = Math.sin(itemAngle - Math.PI/2) * this.radius;
    const z = Math.sin(itemAngle) * 30; // Add depth
    
    // Add floating animation
    const floatY = Math.sin(time * 0.003 + this.index * 0.5) * 8;
    
    // Calculate opacity based on vertical position - fade out as items go down
    const normalizedY = (y + this.radius) / (this.radius * 2); // 0 to 1
    let opacity = 1;
    
    // Fade out when going down (bottom half of circle)
    if (y > 0) {
      opacity = Math.max(0, 1 - (y / this.radius) * 2);
    }
    
    // Fade in when coming up from bottom
    if (y < -this.radius * 0.7) {
      opacity = Math.max(0, 1 + (y + this.radius) / (this.radius * 0.3));
    }
    
    // Scale based on position - smaller when far from center
    const distanceFromCenter = Math.abs(x) / this.radius;
    const scale = 0.6 + (1 - distanceFromCenter) * 0.4;
    
    // Apply transform
    this.element.style.transform = `
      translate3d(${x}px, ${y + floatY}px, ${z}px) 
      rotateY(${itemAngle}rad)
      scale(${scale})
    `;
    
    // Apply opacity and visibility
    this.element.style.opacity = opacity;
    this.element.style.visibility = opacity < 0.05 ? 'hidden' : 'visible';
    
    // Z-index based on depth
    this.element.style.zIndex = Math.round(50 + z);
  }
}

class CircularGalleryApp {
  constructor(container, options = {}) {
    this.container = container;
    this.items = options.items || [];
    this.radius = options.radius || 250;
    this.rotationSpeed = options.rotationSpeed || 0.008;
    this.autoRotate = options.autoRotate !== false;
    
    this.rotation = 0;
    this.targetRotation = 0;
    this.isInteracting = false;
    this.lastMouseX = 0;
    this.velocity = 0;
    this.damping = 0.92;
    
    this.galleryItems = [];
    this.animationId = null;
    this.startTime = Date.now();
    
    this.init();
  }
  
  init() {
    this.container.style.cssText = `
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      perspective: 1000px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    this.createGalleryItems();
    this.addEventListeners();
    this.animate();
  }
  
  createGalleryItems() {
    this.items.forEach((item, index) => {
      const galleryItem = new CircularGalleryItem({
        index,
        totalItems: this.items.length,
        radius: this.radius,
        data: item
      });
      
      this.galleryItems.push(galleryItem);
      this.container.appendChild(galleryItem.element);
    });
  }
  
  addEventListeners() {
    this.container.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.container.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.container.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.container.addEventListener('mouseleave', this.onMouseUp.bind(this));
    this.container.addEventListener('wheel', this.onWheel.bind(this));
    
    // Touch events
    this.container.addEventListener('touchstart', this.onTouchStart.bind(this));
    this.container.addEventListener('touchmove', this.onTouchMove.bind(this));
    this.container.addEventListener('touchend', this.onTouchEnd.bind(this));
  }
  
  onMouseDown(e) {
    this.isInteracting = true;
    this.lastMouseX = e.clientX;
    this.velocity = 0;
    this.container.style.cursor = 'grabbing';
  }
  
  onMouseMove(e) {
    if (!this.isInteracting) return;
    
    const deltaX = e.clientX - this.lastMouseX;
    this.velocity = deltaX * 0.01;
    this.targetRotation += this.velocity;
    this.lastMouseX = e.clientX;
  }
  
  onMouseUp() {
    this.isInteracting = false;
    this.container.style.cursor = 'grab';
  }
  
  onTouchStart(e) {
    this.isInteracting = true;
    this.lastMouseX = e.touches[0].clientX;
    this.velocity = 0;
  }
  
  onTouchMove(e) {
    if (!this.isInteracting) return;
    
    const deltaX = e.touches[0].clientX - this.lastMouseX;
    this.velocity = deltaX * 0.01;
    this.targetRotation += this.velocity;
    this.lastMouseX = e.touches[0].clientX;
  }
  
  onTouchEnd() {
    this.isInteracting = false;
  }
  
  onWheel(e) {
    e.preventDefault();
    this.targetRotation += e.deltaY * 0.001;
  }
  
  animate() {
    const time = Date.now();
    
    // Auto-rotate when not interacting
    if (!this.isInteracting && this.autoRotate) {
      this.targetRotation += this.rotationSpeed;
    }
    
    // Apply momentum when not interacting
    if (!this.isInteracting) {
      this.velocity *= this.damping;
      this.targetRotation += this.velocity;
    }
    
    // Smooth rotation interpolation
    this.rotation += (this.targetRotation - this.rotation) * 0.1;
    
    // Update gallery items
    this.galleryItems.forEach(item => {
      item.update(this.rotation, time);
    });
    
    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }
  
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.galleryItems.forEach(item => {
      if (item.element.parentNode) {
        item.element.parentNode.removeChild(item.element);
      }
    });
  }
}

export default function CircularGallery({ 
  items = [],
  radius = 280,
  rotationSpeed = 0.01,
  autoRotate = true
}) {
  const containerRef = useRef(null);
  const appRef = useRef(null);
  
  // Default items if none provided
  const defaultItems = [
    { text: "Design", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { text: "Development", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { text: "Strategy", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { text: "Innovation", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    { text: "Brand", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { text: "Digital", gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
    { text: "Creative", gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
    { text: "Experience", gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
  ];
  
  const galleryItems = items.length > 0 ? items : defaultItems;
  
  useEffect(() => {
    if (containerRef.current) {
      appRef.current = new CircularGalleryApp(containerRef.current, {
        items: galleryItems,
        radius,
        rotationSpeed,
        autoRotate
      });
    }
    
    return () => {
      if (appRef.current) {
        appRef.current.destroy();
      }
    };
  }, [items, radius, rotationSpeed, autoRotate]);
  
  return (
    <div className="w-full h-screen bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-950 overflow-hidden relative">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_50%)]"></div>
       */}
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center max-w-2xl px-6">
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Let's Create Something
            <br />
            Exceptional
          </h1>
          <p className="text-lg md:text-l text-gray-300 mb-8 leading-relaxed">
            Let's collaborate to create a bold brand or seamless digital experience. 
            Get in touch!
          </p>
          <button className="pointer-events-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Contact Me 
            </span>
            {/* Pulsing effect to show cards emanating from button */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-50 animate-pulse"></div>
            <div className="absolute inset-0 bg-white opacity-20 animate-ping"></div>
          </button>
        </div>
      </div>
      
      {/* Gallery Container */}
      <div 
        ref={containerRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ cursor: 'grab' }}
      />
    </div>
  );
}