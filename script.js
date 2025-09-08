// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarEffects();
    initActiveNavLinks();
});

// Mobile Navigation Toggle
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    const homeButtons = document.querySelectorAll('.btn[href^="#"]');
    
    // Combine both node lists
    const allLinks = [...navLinks, ...homeButtons];
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal link
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Navbar Effects on Scroll
function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll (optional)
        // Uncomment the following lines if you want the navbar to hide on scroll down
        /*
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        */
        
        lastScrollTop = scrollTop;
    });
}

// Active Navigation Links
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current nav link
                const activeNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeNavLink) {
                    activeNavLink.classList.add('active');
                }
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'active');
                
                // Add staggered animation for skill cards and project cards
                if (entry.target.classList.contains('skills-grid') || 
                    entry.target.classList.contains('projects-grid')) {
                    animateCards(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(`
        .home-content,
        .about-text,
        .skills-grid,
        .projects-grid,
        .education-card,
        .contact-content,
        .section-title
    `);
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Animate Cards with Stagger Effect
function animateCards(container) {
    const cards = container.children;
    
    Array.from(cards).forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            
            // Trigger animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
}

// Typing Effect for Home Title (Optional Enhancement)
function initTypingEffect() {
    const titleElement = document.querySelector('.home-title');
    const text = titleElement.textContent;
    const highlightText = titleElement.querySelector('.highlight').textContent;
    
    titleElement.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            if (text.substring(i).startsWith(highlightText)) {
                titleElement.innerHTML += `<span class="highlight">${highlightText}</span>`;
                i += highlightText.length;
            } else {
                titleElement.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(typeWriter, 100);
        }
    };
    
    // Uncomment the next line if you want the typing effect
    // typeWriter();
}

// Form Validation (if you add a contact form later)
function validateContactForm(formData) {
    const errors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (Sri Lankan format)
    const phoneRegex = /^(\+94|0)[0-9]{9}$/;
    if (!phoneRegex.test(formData.phone)) {
        errors.phone = 'Please enter a valid Sri Lankan phone number';
    }
    
    return errors;
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Performance Optimization
const debouncedScroll = debounce(() => {
    initActiveNavLinks();
}, 10);

const throttledScroll = throttle(() => {
    initNavbarEffects();
}, 10);

// Replace default scroll listeners with optimized versions
window.addEventListener('scroll', debouncedScroll);
window.addEventListener('scroll', throttledScroll);

// Preload Images (if you add actual images later)
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Add smooth reveal animation for elements
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Initialize reveal on scroll with throttling
window.addEventListener('scroll', throttle(revealOnScroll, 25));

// Add CSS custom properties for dynamic theming
function initThemeSystem() {
    const root = document.documentElement;
    
    // You can add theme switching functionality here
    const themes = {
        light: {
            '--primary-color': '#3498db',
            '--secondary-color': '#2c3e50',
            '--background-color': '#ffffff',
            '--text-color': '#333333'
        },
        dark: {
            '--primary-color': '#3498db',
            '--secondary-color': '#ecf0f1',
            '--background-color': '#2c3e50',
            '--text-color': '#ecf0f1'
        }
    };
    
    // Function to apply theme
    function applyTheme(themeName) {
        const theme = themes[themeName];
        if (theme) {
            Object.keys(theme).forEach(property => {
                root.style.setProperty(property, theme[property]);
            });
        }
    }
    
    // You can call applyTheme('dark') to switch to dark theme
}

// Initialize theme system
initThemeSystem();

// Add loading animation
function initLoadingAnimation() {
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            const homeContent = document.querySelector('.home-content');
            if (homeContent) {
                homeContent.classList.add('active');
            }
        }, 300);
    });
}

// Initialize loading animation
initLoadingAnimation();

// Add keyboard navigation support
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Initialize keyboard navigation
initKeyboardNavigation();