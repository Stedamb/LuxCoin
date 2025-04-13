import { useEffect } from 'react';

export default function MobileMenu() {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    
    // Function to open the menu
    const openMenu = () => {
      if (!mobileMenu) return;
      
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex', 'menu-open');
      document.body.style.overflow = 'hidden';
      mobileMenu.style.animation = 'fadeIn 0.3s ease-in-out';
    };
    
    // Function to close the menu with animation
    const closeMenu = () => {
      if (!mobileMenu) return;
      
      // Start the fade-out animation
      mobileMenu.style.animation = 'fadeOut 0.3s ease-in-out forwards';
      
      // Remove classes after animation completes
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex', 'menu-open');
        document.body.style.overflow = 'unset';
      }, 300); // Match this to your animation duration
    };
    
    if (mobileMenuButton && mobileMenu) {
      // Open menu when clicking the menu button
      mobileMenuButton.addEventListener('click', openMenu);
      
      // Close menu when clicking the close button
      if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMenu);
      }
      
      // Close menu when clicking on links
      const menuLinks = mobileMenu.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });
      
      // Close menu when pressing Escape key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('flex')) {
          closeMenu();
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      
      // Clean up event listeners when component unmounts
      return () => {
        mobileMenuButton.removeEventListener('click', openMenu);
        if (closeMenuButton) {
          closeMenuButton.removeEventListener('click', closeMenu);
        }
        menuLinks.forEach(link => {
          link.removeEventListener('click', closeMenu);
        });
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  // This component doesn't render anything visible
  return null;
}
