# Portfolio Animations Guide

## Available Animations

Your portfolio now includes comprehensive fade-in and slide animations applied throughout. Here's what's been added:

### Keyframe Animations

**Fade Animations:**
- `fadeIn` - Fade in with slight upward movement (original)
- `fadeInDown` - Fade in from top
- `fadeInUp` - Fade in from bottom
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `fade` - Simple fade only

**Slide Animations:**
- `slideInUp` - Slide up with fade
- `slideInDown` - Slide down with fade
- `slideInLeft` - Slide from left with fade
- `slideInRight` - Slide from right with fade

### Elements with Animations Applied

1. **Navigation** - Smooth scroll effects
2. **Hero Section** 
   - Title: `fadeIn` (0.3s delay)
   - Main heading: `fadeIn` (0.5s delay)
   - Subtitle: `fadeIn` (0.7s delay)
   - Image: `fadeIn` (0.9s delay)

3. **About Section**
   - Section heading: `fadeInUp`
   - About text: `fadeInUp` (0.2s delay)
   - Skill cards: `fadeInUp` (staggered: 0.1s, 0.2s, 0.3s)

4. **Resume Section**
   - Section title: `fadeInDown`
   - Service cards: `fadeInUp` (staggered: 0.15s, 0.3s, 0.45s)

5. **Education Section**
   - Education cards: `fadeInUp` (1s duration)

6. **Contact Section**
   - Contact info box: `fadeInLeft` (0.8s)
   - Contact form: `fadeInRight` (0.8s)

### CSS Utility Classes

You can apply these classes to any HTML element for quick animations:

```css
.animate-fade         /* Simple fade */
.animate-fade-up      /* Fade from bottom */
.animate-fade-down    /* Fade from top */
.animate-fade-left    /* Fade from left */
.animate-fade-right   /* Fade from right */
.animate-slide-up     /* Slide up */
.animate-slide-down   /* Slide down */
.animate-slide-left   /* Slide from left */
.animate-slide-right  /* Slide from right */
```

### Example Usage in HTML

```html
<!-- Using utility classes -->
<div class="animate-fade-up">Content fades in from bottom</div>
<div class="animate-slide-right">Content slides in from right</div>

<!-- Staggered animations on multiple elements -->
<div class="skill-card">First card</div>  <!-- 0.1s delay -->
<div class="skill-card">Second card</div> <!-- 0.2s delay -->
<div class="skill-card">Third card</div>  <!-- 0.3s delay -->
```

### Customization

To modify animation timing, edit these values in `style.css`:
- Default duration: `0.8s`
- Default easing: `ease`
- Staggered delays: Adjust nth-child delays as needed

All animations run smoothly on scroll, creating a dynamic and engaging user experience!
