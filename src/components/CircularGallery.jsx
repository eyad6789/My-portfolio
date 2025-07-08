import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// You'll need to import your images here
import robot from '../assets/circularGallery/robot-circular.jpeg';
import data from '../assets/circularGallery/data-circular.jpeg';
import brain from '../assets/circularGallery/brain-circular.jpeg';
import AITools from '../assets/circularGallery/AI-tools.jpeg';
import allFuture from '../assets/circularGallery/all-future-tools.jpeg';
import coding from '../assets/circularGallery/coding-circular.jpeg';
import smartCity from '../assets/circularGallery/smart-city-circular.jpeg';
import visulazing from '../assets/circularGallery/visulazing-circular.jpeg';
import webFrame from '../assets/circularGallery/webFrame-circular.jpeg';

// For demo purposes, using placeholder images
const sampleImages = [
  robot,
  data,
  brain,
  allFuture,
  coding,
  AITools,
  smartCity,
  visulazing,
  webFrame,
];

// Simplified OGL-like classes for the gallery
class SimpleRenderer {
  constructor() {
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
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      transform-style: preserve-3d;
      border: 2px solid rgba(255,255,255,0.1);
    `;
    
    this.index = options.index;
    this.totalItems = options.totalItems;
    this.radius = options.radius || 300;
    this.angle = 0;
    this.targetAngle = 0;
    this.rotationSpeed = 0.02;
    this.data = options.data;
    
    // Set content - prioritize image over text
    if (this.data.image) {
      const img = document.createElement('img');
      img.src = this.data.image;
      img.style.cssText = `
        width: 100%; 
        height: 100%; 
        object-fit: cover;
        transition: transform 0.3s ease;
      `;
      img.alt = this.data.alt || `Gallery item ${this.index + 1}`;
      
      // Add image loading error handling
      img.onerror = () => {
        console.warn(`Failed to load image: ${this.data.image}`);
        this.element.style.background = this.data.gradient || `linear-gradient(135deg, hsl(${this.index * 360 / this.totalItems}, 70%, 60%) 0%, hsl(${(this.index * 360 / this.totalItems) + 30}, 70%, 40%) 100%)`;
        this.element.innerHTML = this.data.text || `Item ${this.index + 1}`;
      };
      
      this.element.appendChild(img);
    } else {
      // Fallback to text/gradient
      this.element.innerHTML = this.data.text || `Item ${this.index + 1}`;
      this.element.style.background = this.data.gradient || `linear-gradient(135deg, hsl(${this.index * 360 / this.totalItems}, 70%, 60%) 0%, hsl(${(this.index * 360 / this.totalItems) + 30}, 70%, 40%) 100%)`;
    }
    
    // Add hover effects
    this.element.addEventListener('mouseenter', () => {
      this.element.style.transform = this.element.style.transform.replace(/scale\([^)]*\)/, '') + ' scale(1.1)';
      this.element.style.boxShadow = '0 12px 35px rgba(0,0,0,0.4)';
      
      // Scale image on hover if it exists
      const img = this.element.querySelector('img');
      if (img) {
        img.style.transform = 'scale(1.05)';
      }
    });
    
    this.element.addEventListener('mouseleave', () => {
      this.element.style.transform = this.element.style.transform.replace(/scale\([^)]*\)/, '') + ' scale(1)';
      this.element.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
      
      // Reset image scale
      const img = this.element.querySelector('img');
      if (img) {
        img.style.transform = 'scale(1)';
      }
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
  
  // Items with images - replace with your actual image imports
  const defaultItems = [
    { 
      image: sampleImages[0], 
      alt: "Portrait 1",
      text: "Development" // fallback text if image fails
    },
    { 
      image: sampleImages[1], 
      alt: "Portrait 2",
      text: "Strategy" 
    },
    { 
      image: sampleImages[2], 
      alt: "Portrait 3",
      text: "Innovation" 
    },
    { 
      image: sampleImages[3], 
      alt: "Portrait 4",
      text: "Brand" 
    },
    { 
      image: sampleImages[4], 
      alt: "Portrait 5",
      text: "Digital" 
    },
    { 
      image: sampleImages[5], 
      alt: "Portrait 6",
      text: "Creative" 
    },
    { 
      image: sampleImages[6], 
      alt: "Portrait 7",
      text: "Experience" 
    },
    { 
      image: sampleImages[7], 
      alt: "Portrait 8",
      text: "Design" 
    },
    { 
      image: sampleImages[8], 
      alt: "Portrait 9",
      text: "Marketing" 
    },
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
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
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
            Let’s Build Smarter Solutions 
            <br />
            Together
          </h1>
          <p className="text-lg md:text-l text-gray-300 mb-8 leading-relaxed">
            Whether you're looking to transform data into insights or craft intelligent digital experiences with AI, I’m here to help.
            Ready to innovate?
            Let’s connect.
          </p>
          <Link to="/contact">
            <button className="pointer-events-auto bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Contact Me 
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-50 animate-pulse"></div>
              <div className="absolute inset-0 bg-white opacity-20 animate-ping"></div>
            </button>
          </Link>
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