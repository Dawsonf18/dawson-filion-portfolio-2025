import { useEffect, useRef } from 'react';
import './GalaxyBackground.css';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    class Star {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.twinkleSpeed = 0.001 + Math.random() * 0.003;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.baseOpacity = 0.3 + Math.random() * 0.7;
        this.speed = 0.05 + Math.random() * 0.15;
      }

      update() {
        // Slow downward drift
        this.y += this.speed;

        // Reset if off screen
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }

        // Update twinkle
        this.twinklePhase += this.twinkleSpeed;
      }

      draw() {
        // Twinkling effect
        const twinkle = Math.sin(this.twinklePhase) * 0.3 + 0.7;
        const opacity = this.baseOpacity * twinkle;

        // Draw glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        gradient.addColorStop(0.3, `rgba(200, 220, 255, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create shooting stars
    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height / 2;
        this.length = 80 + Math.random() * 100;
        this.speed = 5 + Math.random() * 10;
        this.opacity = 0.8 + Math.random() * 0.2;
        this.angle = Math.PI / 4; // 45 degrees
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= 0.01;

        if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        ctx.stroke();
      }
    }

    // Initialize stars
    const numStars = Math.min(300, Math.floor((canvas.width * canvas.height) / 5000));
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    // Add some shooting stars
    const shootingStars = [];
    for (let i = 0; i < 3; i++) {
      shootingStars.push(new ShootingStar());
    }

    // Animation loop
    const animate = () => {
      // Create space gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#0a0e27');
      bgGradient.addColorStop(0.5, '#0d1226');
      bgGradient.addColorStop(1, '#111632');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add nebula effect
      const nebula = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.3, 0,
        canvas.width * 0.3, canvas.height * 0.3, canvas.width * 0.5
      );
      nebula.addColorStop(0, 'rgba(123, 44, 191, 0.05)');
      nebula.addColorStop(0.5, 'rgba(0, 212, 255, 0.03)');
      nebula.addColorStop(1, 'rgba(0, 212, 255, 0)');
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // Occasionally add shooting stars
      if (Math.random() < 0.001) {
        const randomStar = shootingStars[Math.floor(Math.random() * shootingStars.length)];
        if (randomStar.opacity <= 0) {
          randomStar.reset();
        }
      }

      // Update and draw shooting stars
      shootingStars.forEach(star => {
        if (star.opacity > 0) {
          star.update();
          star.draw();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="galaxy-background" />;
};

export default GalaxyBackground;
