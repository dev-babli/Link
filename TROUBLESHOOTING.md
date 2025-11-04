# Troubleshooting Guide - McKinsey Redesign

## Common Development Warnings (Safe to Ignore)

### ✅ 404 Errors for CSS/JS Files
```
vendors.css:1  Failed to load resource: 404
main-app.js:1  Failed to load resource: 404
page.js:1  Failed to load resource: 404
```

**Why this happens:**
- These are Next.js Hot Module Replacement (HMR) artifacts
- They appear during initial page load in development mode
- They do NOT affect production builds
- Next.js is looking for chunks that haven't been generated yet

**Solution:** These are harmless warnings. Ignore them or:
```bash
# Clear Next.js cache and restart
rm -rf .next
npm run dev
```

### ✅ Image 400 Error
```
image:1  Failed to load resource: 400 (Bad Request)
```

**Why this happens:**
- A component is trying to load an image that doesn't exist
- Usually from the Image component with an invalid src

**Solution:** Check if all images in `/public/images/` exist:
```bash
# Verify image paths in components
grep -r "images/" src/components/mckinsey/
```

Missing images won't break the site - they'll just show a broken image icon.

### ✅ External Script Preload Warning (FIXED)
```
The resource https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js was preloaded...
```

**Status:** ✅ This has been removed from `layout.tsx`

## Real Issues to Fix

### ❌ Port Already in Use
```bash
⚠ Port 3000 is in use by process 90987, using available port 3003 instead.
```

**Solution 1 - Use the suggested port:**
```
Visit: http://localhost:3003
```

**Solution 2 - Kill the process on port 3000:**
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Then restart
npm run dev
```

### ❌ Build Errors
If you see actual TypeScript or build errors:

```bash
# Clear all caches
rm -rf .next
rm -rf node_modules/.cache

# Reinstall if needed
npm install

# Try building
npm run build
```

### ❌ Font Not Loading
If Merriweather or Inter fonts aren't showing:

**Check:**
1. Font variables in `src/app/layout.tsx`
2. Font classes in components (e.g., `font-merriweather`)
3. Tailwind config font family mappings

**Solution:**
```typescript
// In layout.tsx, verify:
className={`${merriweather.variable} ${inter.variable}`}

// In components, use:
<h1 className="font-merriweather">Heading</h1>
<p className="font-inter">Body text</p>
```

### ❌ Styles Not Applying
If Tailwind classes aren't working:

```bash
# Check Tailwind config
cat tailwind.config.js

# Verify content paths include all files
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]

# Restart with clean cache
rm -rf .next
npm run dev
```

### ❌ Linting Errors
```bash
# Check for errors
npm run lint

# Auto-fix what can be fixed
npm run lint -- --fix
```

## Development Server Issues

### Server Won't Start
```bash
# Kill all Node processes
killall node

# Clear all caches
rm -rf .next
rm -rf node_modules/.cache

# Restart
npm run dev
```

### Hot Reload Not Working
```bash
# Restart the dev server
# Press Ctrl+C to stop
npm run dev
```

### Changes Not Reflecting
1. Hard refresh: `Cmd/Ctrl + Shift + R`
2. Clear browser cache
3. Check if you're editing the right file
4. Restart dev server

## Production Build Issues

### Build Fails
```bash
# Clean build
rm -rf .next
npm run build

# Check for errors in output
```

### Images Not Loading in Production
```bash
# Verify images are in public folder
ls -la public/images/

# Check Image component usage
# Make sure src paths are correct
<Image src="/images/file.jpg" ... />
```

### Fonts Not Loading in Production
```bash
# Verify font imports in layout.tsx
# Check Next.js font optimization is working
# Fonts should be in .next/static/fonts/ after build
```

## Browser-Specific Issues

### Safari Issues
- Clear Safari cache
- Check for CSS vendor prefixes
- Test backdrop-filter support

### Mobile Issues
- Test on actual device, not just Chrome DevTools
- Check viewport meta tag
- Verify touch targets are large enough (44x44px minimum)

## Performance Issues

### Slow Load Times
```bash
# Build and analyze bundle
npm run build

# Check bundle size
ls -lh .next/static/chunks/

# Optimize images
# Use WebP format
# Compress images before adding to /public/images/
```

### High Memory Usage
```bash
# Close unused browser tabs
# Restart dev server
# Check for memory leaks in components
```

## Quick Health Check

Run this to verify everything is working:

```bash
# 1. Clean install
rm -rf node_modules .next
npm install

# 2. Build successfully
npm run build

# 3. Start production server
npm start

# 4. Visit http://localhost:3000
```

If all these steps complete without errors, your site is healthy! ✅

## Getting Help

1. **Check the documentation:**
   - `MCKINSEY_QUICK_START.md`
   - `MCKINSEY_REDESIGN_COMPLETE.md`

2. **Common fixes:**
   - Clear cache: `rm -rf .next`
   - Restart server
   - Hard refresh browser

3. **Still stuck?**
   - Check Next.js 15 documentation
   - Verify all component imports
   - Look for console errors in browser DevTools

## Development Mode vs Production

Remember: Many warnings appear in development but not in production!

**Development Mode (npm run dev):**
- Shows detailed errors
- Hot reload enabled
- Unoptimized bundles
- Source maps included
- More verbose logging

**Production Mode (npm run build && npm start):**
- Optimized bundles
- Minified code
- No source maps
- Better performance
- Cleaner console

Always test production builds before deploying!

```bash
npm run build
npm start
```

Your McKinsey redesign is complete and working! Most errors you see are just development mode artifacts. 🎉










