# GSAP Navigation Menu - Customization Guide

## Quick Customization Reference

### 1. Change Menu Items

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
// Lines 15-46
const navigationItems = [
  {
    title: "YOUR TITLE",           // Display text
    href: "/your-route",            // Route path
    bgImage: "/images/your-bg.jpg", // Background image
    dataBgFor: "your-id"            // Unique identifier
  },
  // Add more items...
];
```

### 2. Change Logo

**File:** `/src/components/GSAPNavigationMenu.tsx`

```tsx
// Line 344
<img
  src="/images/your-logo.png"  // Change this path
  alt="Your Company Name"
  className="h-10 w-auto"       // Adjust height if needed
/>
```

### 3. Change Colors

**File:** `/src/app/globals.css` (Lines 1731+)

```css
/* Primary Colors */
.gsap-menu-overlay__bg-container {
  background-color: #FFDCAC;  /* Change base overlay color */
}

.gsap-menu-overlay__links {
  background: rgba(29, 20, 4, 0.21);  /* Change glass tint */
  backdrop-filter: blur(67px);         /* Adjust blur amount */
}

/* Text Colors */
.gsap-menu-overlay__main {
  color: #FFF7E8;  /* Change menu text color */
}

/* Button Colors */
.navbar__btn {
  background: #FFF0DC;  /* Button background */
  color: #2F2411;       /* Button text */
}

.navbar__btn:hover {
  background: #FFAD3B;  /* Hover background */
  color: #FFF7E8;       /* Hover text */
}

#gsap-menu-toggle {
  background: #FFF0DC;  /* Toggle button background */
}

#gsap-menu-toggle span {
  background: #2F2411;  /* Toggle lines color */
}
```

### 4. Change Animation Timings

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
// Opening Animation (Lines 118-130)
.to(
  menuOverlay,
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 100%)",
    duration: 0.8,  // ← Change menu open speed (seconds)
    ease: "power3.inOut",  // ← Change easing function
  },
  0
)

// Page Transform (Lines 132-142)
.to(
  pageContentRef.current,
  {
    yPercent: 20,        // ← Vertical movement
    rotation: 18,        // ← Rotation angle (degrees)
    scale: 1.3,          // ← Scale factor
    duration: 0.8,       // ← Animation duration
    ease: "power3.inOut",
  },
  0
)

// Background Zoom (Lines 144-152)
.to(
  ".gsap-menu-overlay__bg-img img",
  {
    scale: 1.1,      // ← Background scale on open
    duration: 1,     // ← Zoom duration
    ease: "power3.inOut",
  },
  0
)

// Text Animation (Lines 154-176)
.fromTo(
  split.chars,
  { yPercent: -200 },
  { 
    yPercent: 0, 
    duration: 0.5,    // ← Character reveal speed
    stagger: 0.01     // ← Delay between characters
  },
  0.2  // ← When to start (offset)
)

// Toggle Button (Lines 178-200)
.to(
  ".gsap-toggle-line-top",
  {
    y: 4,              // ← Vertical movement
    scaleX: 0.8,       // ← Width scale
    rotation: 45,      // ← Rotation angle
    duration: 0.4,     // ← Animation speed
    ease: "back.out(1.5)",  // ← Easing with overshoot
  },
  0.2
)
```

### 5. Change Background Hover Effects

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
// Mouse Enter (Lines 82-94)
const handleMouseEnter = () => {
  gsap.to(bgImgs, {
    opacity: 0,
    duration: 0.5,      // ← Fade out speed
    ease: "power2.inOut"
  });

  gsap.to(bgImgs[index + 1], {
    opacity: 1,
    scale: 1.18,        // ← Hover zoom scale
    duration: 0.5,      // ← Zoom speed
    ease: "power3.inOut"
  });
};

// Mouse Leave (Lines 96-110)
const handleMouseLeave = () => {
  gsap.to(bgImgs, {
    opacity: 0,
    duration: 0.5,      // ← Fade speed
    ease: "power2.inOut",
    scale: 1            // ← Reset scale
  });
};
```

### 6. Change Typography

**File:** `/src/app/globals.css`

```css
/* Menu Items Typography (Lines 1796-1802) */
.gsap-menu-overlay__main {
  color: #FFF7E8;
  font-family: "Anton", sans-serif;  /* Change font family */
  font-size: clamp(2rem, 4.862vw + 0.936rem, 5.313rem);  /* Adjust size */
  line-height: 90%;      /* Adjust line spacing */
  letter-spacing: -1.2px;  /* Adjust character spacing */
}

/* Social Links Typography (Lines 1819-1827) */
.gsap-menu-overlay__socials ul {
  font-size: clamp(1rem, 0.55vw + 0.88rem, 1.375rem);
  font-weight: 600;  /* Adjust weight */
  letter-spacing: -0.44px;
}

/* Button Typography (Lines 1868-1881) */
.navbar__btn {
  font-family: "Anton", sans-serif;  /* Change font */
  font-size: 18px;  /* Adjust size */
}
```

### 7. Change Social Links

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
// Lines 49-53
const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com/company/your-company" },
  { title: "Twitter", href: "https://twitter.com/yourhandle" },
  { title: "Facebook", href: "https://facebook.com/yourpage" },
  // Add more social links:
  { title: "Instagram", href: "https://instagram.com/yourhandle" },
  { title: "YouTube", href: "https://youtube.com/@yourchannel" },
];
```

### 8. Change CTA Button

**File:** `/src/components/GSAPNavigationMenu.tsx`

```tsx
// Lines 357-365
<Link
  href="/your-cta-route"  // ← Change destination
  className="navbar__btn flex gap-2.5 px-3.5 py-3.5 rounded-[10px]..."
>
  <span className="btn-txt">YOUR CTA TEXT</span>  // ← Change text
  <ArrowRight className="w-[18px] h-[14px]" />
</Link>
```

### 9. Adjust Menu Panel Width

**File:** `/src/app/globals.css`

```css
/* Desktop Width (Line 1778-1790) */
.gsap-menu-overlay__links {
  width: 50%;  /* Change from 50% to your desired width */
  /* Options: 40%, 60%, 500px, etc. */
}

/* Mobile Width (Lines 1895-1903) */
@media screen and (max-width: 768px) {
  .gsap-menu-overlay__links {
    width: 100%;  /* Typically keep at 100% for mobile */
  }
}
```

### 10. Change Menu Position

**File:** `/src/app/globals.css`

```css
/* Glass Panel Position (Lines 1778+) */
.gsap-menu-overlay__links {
  /* Current: Left side */
  /* For Right side, add: */
  margin-left: auto;
  
  /* For Center: */
  margin: 0 auto;
}
```

### 11. Disable Page Transform Effect

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
// Lines 132-142 - Comment out or remove:
// .to(
//   pageContentRef.current,
//   {
//     yPercent: 20,
//     rotation: 18,
//     scale: 1.3,
//     transformOrigin: "left top",
//     duration: 0.8,
//     ease: "power3.inOut"
//   },
//   0
// )
```

### 12. Change Navbar Position

**File:** `/src/app/globals.css`

```css
/* Navigation Bar (Lines 1829-1835) */
.navbar {
  position: fixed;
  top: 18px;  /* Adjust top spacing */
  /* Or set to 0 for flush with top */
  width: 100%;
  z-index: 9998;
}
```

### 13. Add Keyboard Shortcuts

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
// Add to useEffect:
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMenuOpen) {
      toggleMenu();
    }
    if (e.key === 'm' && e.metaKey) {  // Cmd/Ctrl + M
      toggleMenu();
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [isMenuOpen]);
```

### 14. Add Menu Item Icons

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
import { Home, Info, Briefcase, Building2, Mail } from "lucide-react";

const navigationItems = [
  {
    title: "HOME",
    href: "/",
    icon: Home,  // Add icon
    bgImage: "/images/ai-brain-hero.jpg",
    dataBgFor: "home"
  },
  // ... more items
];

// In JSX (Line 284):
<Link href={item.href}>
  {item.icon && <item.icon className="w-6 h-6 inline mr-2" />}
  {item.title}
</Link>
```

### 15. Custom Easing Functions

**File:** `/src/components/GSAPNavigationMenu.tsx`

Available GSAP easing options:
```typescript
ease: "none"           // No easing
ease: "power1.inOut"   // Gentle
ease: "power2.inOut"   // Moderate
ease: "power3.inOut"   // Strong
ease: "power4.inOut"   // Very strong
ease: "back.out(1.5)"  // Overshoot effect
ease: "elastic.out"    // Bounce effect
ease: "bounce.out"     // Bounce at end
ease: "circ.inOut"     // Circular
ease: "expo.inOut"     // Exponential
ease: "sine.inOut"     // Sinusoidal
```

### 16. Add Loading State

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  // Preload images
  const imagePromises = navigationItems.map(item => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = item.bgImage;
    });
  });

  Promise.all(imagePromises)
    .then(() => setIsLoading(false))
    .catch(() => setIsLoading(false));
}, []);

// In JSX:
{isLoading && <div className="loading-spinner">Loading...</div>}
```

### 17. Add Active Link State

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
import { usePathname } from 'next/navigation';

export function GSAPNavigationMenu() {
  const pathname = usePathname();
  
  // In JSX:
  <Link
    href={item.href}
    className={`... ${pathname === item.href ? 'text-accent' : ''}`}
  >
    {item.title}
  </Link>
}
```

### 18. Change Blur Effect

**File:** `/src/app/globals.css`

```css
/* Glass Panel (Line 1779) */
.gsap-menu-overlay__links {
  backdrop-filter: blur(67px);  /* Adjust blur: 20px - 100px */
  /* More blur = less see-through */
  /* Less blur = more see-through */
}
```

### 19. Add Sound Effects

**File:** `/src/components/GSAPNavigationMenu.tsx`

```typescript
const playSound = (soundFile: string) => {
  const audio = new Audio(`/sounds/${soundFile}`);
  audio.play();
};

const toggleMenu = () => {
  playSound('menu-open.mp3');  // Add sound file
  // ... rest of toggle logic
};
```

### 20. Responsive Breakpoint

**File:** `/src/app/globals.css`

```css
/* Change mobile breakpoint (currently 768px) */
@media screen and (max-width: 768px) {  /* Change to 1024px, 640px, etc. */
  .gsap-menu-overlay__links {
    width: 100%;
    padding: 2rem 1rem;
  }
}
```

## Common Customization Patterns

### Pattern 1: Full-Width Menu
```css
.gsap-menu-overlay__links {
  width: 100%;  /* Full width */
  padding: 44px 10%;  /* Center content */
}
```

### Pattern 2: Right-Side Menu
```css
.gsap-menu-overlay__links {
  width: 50%;
  margin-left: auto;  /* Push to right */
}
```

### Pattern 3: Centered Menu
```css
.gsap-menu-overlay__links {
  width: 60%;
  margin: 0 auto;  /* Center */
}
```

### Pattern 4: No Background Change
```typescript
// Comment out hover handlers in useEffect:
// items.forEach((item, index) => {
//   item.addEventListener("mouseenter", handleMouseEnter);
//   item.addEventListener("mouseleave", handleMouseLeave);
// });
```

### Pattern 5: Faster Animation
```typescript
// Reduce all durations by 50%:
duration: 0.4  // instead of 0.8
duration: 0.5  // instead of 1.0
duration: 0.25 // instead of 0.5
```

## Testing Your Changes

After making changes:

1. **Save files**
2. **Check browser console** for errors
3. **Test menu open/close**
4. **Test hover effects**
5. **Test on mobile** (responsive design)
6. **Test navigation** (links work)
7. **Check performance** (smooth 60fps)

## Troubleshooting

### Menu doesn't open
- Check GSAP is loaded
- Check SplitText plugin is registered
- Verify ref assignments

### Animation is choppy
- Reduce `will-change` properties
- Lower blur amount
- Simplify transforms

### Images don't load
- Verify image paths
- Check public folder structure
- Preload images

### Mobile layout broken
- Check responsive CSS
- Test at different breakpoints
- Adjust width percentages

## Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Lazy Load**: Load menu images after page load
3. **Reduce Blur**: Lower backdrop-filter blur amount
4. **Simplify Transforms**: Remove unnecessary animations
5. **Hardware Acceleration**: Use `transform: translateZ(0)`

## Accessibility Tips

1. **Add ARIA labels**: `aria-label="Navigation menu"`
2. **Keyboard support**: Add keyboard event handlers
3. **Focus management**: Trap focus in open menu
4. **Screen readers**: Add descriptive text
5. **Color contrast**: Ensure text is readable

This guide covers the most common customization scenarios. For advanced modifications, refer to the GSAP documentation at https://greensock.com/docs/










