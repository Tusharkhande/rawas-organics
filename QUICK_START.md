# Quick Start Guide - Rawas Organics

## Development

Start the development server:
```bash
npm run dev
```

Visit: http://localhost:5173

## Enable Email Notifications

1. Go to https://web3forms.com
2. Enter email: `khandetushar2001@gmail.com`
3. Copy the access key
4. Open `src/pages/CartPage.jsx`
5. Find line ~96: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
6. Replace with your key: `access_key: 'your-actual-key-here'`
7. Save and test!

## Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## Deploy

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Vercel
1. Push code to GitHub
2. Import repository to Vercel
3. Deploy automatically!

### GitHub Pages
```bash
npm run build
# Then follow GitHub Pages deployment steps
```

## Color Palette Reference

### Rusty (Main Browns)
- 50: #f8f6f4 (lightest)
- 500: #9d6b4f (medium)
- 900: #4d2f25 (darkest)

### Copper (Accent)
- 500: #9a5541 (buttons, stars)
- 600: #834335 (hover states)

### Earth (Secondary Browns)
- 500: #8f5c3c
- 600: #7a4930

## Key Features

✅ Responsive design (mobile, tablet, desktop)
✅ Shopping cart with quantity management
✅ Product filtering and search
✅ Customer reviews section
✅ Checkout form with validation
✅ Email notifications for orders
✅ Cash on Delivery payment
✅ Brownish/rusty aesthetic
✅ No yellowish hues

## Support

For questions or issues, check:
- `EMAIL_SETUP.md` - Email configuration
- `CHANGES_SUMMARY.md` - All changes made
- Console logs for debugging

Happy coding! 🍫
