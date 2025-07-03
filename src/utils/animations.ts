
// Animation utility functions for smooth transitions and effects
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// CSS Animation Classes
export const animationClasses = {
  fadeIn: "animate-[fade-in_0.6s_ease-out]",
  fadeInUp: "animate-[fade-in-up_0.6s_ease-out]",
  fadeInScale: "animate-[fade-in-scale_0.5s_ease-out]",
  slideInLeft: "animate-[slide-in-left_0.7s_ease-out]",
  slideInRight: "animate-[slide-in-right_0.7s_ease-out]",
  bounceIn: "animate-[bounce-in_0.8s_ease-out]",
  pulseGlow: "animate-[pulse-glow_2s_ease-in-out_infinite]",
  rotateIn: "animate-[rotate-in_0.8s_ease-out]",
  scaleOnHover: "transition-transform duration-300 hover:scale-105",
  glowOnHover: "transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25",
  floatAnimation: "animate-[float_3s_ease-in-out_infinite]"
};

// Intersection Observer for scroll animations
export const useScrollAnimation = () => {
  const observeElement = (element: HTMLElement, animationClass: string) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    
    observer.observe(element);
    return observer;
  };

  return { observeElement };
};

// Typing animation effect
export const typewriterEffect = (text: string, speed: number = 50) => {
  return new Promise<void>((resolve) => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        i++;
      } else {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
};

// Particle animation utilities
export const createParticle = (x: number, y: number) => {
  return {
    x,
    y,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    life: 1,
    decay: Math.random() * 0.02 + 0.01,
    size: Math.random() * 3 + 1,
    color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`
  };
};

// Smooth scroll utilities
export const smoothScrollTo = (targetId: string, offset: number = 0) => {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Animation timing functions
export const easingFunctions = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
};
