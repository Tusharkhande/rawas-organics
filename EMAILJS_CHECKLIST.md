# EmailJS Setup Checklist ✅

Follow this checklist to set up email notifications for your Rawas Organics store.

## Setup Steps

### 1. Create EmailJS Account
- [ ] Go to https://www.emailjs.com
- [ ] Sign up for free account
- [ ] Verify email address

### 2. Connect Email Service
- [ ] Go to "Email Services"
- [ ] Click "Add New Service"
- [ ] Choose Gmail
- [ ] Connect your account
- [ ] Copy Service ID: `___________________`

### 3. Create Admin Template
- [ ] Go to "Email Templates"
- [ ] Click "Create New Template"
- [ ] Name: "Admin Order Notification"
- [ ] Paste admin template from EMAIL_SETUP.md
- [ ] Set "To email" to `{{to_email}}`
- [ ] Save and copy Template ID: `___________________`

### 4. Create Customer Template
- [ ] Click "Create New Template" again
- [ ] Name: "Customer Order Confirmation"
- [ ] Paste customer template from EMAIL_SETUP.md
- [ ] Set "To email" to `{{to_email}}`
- [ ] Save and copy Template ID: `___________________`

### 5. Get Public Key
- [ ] Go to Account → General
- [ ] Copy Public Key: `___________________`

### 6. Update Code
- [ ] Open `src/pages/CartPage.jsx`
- [ ] Find line ~85 (email configuration)
- [ ] Replace `YOUR_SERVICE_ID` with: `___________________`
- [ ] Replace `YOUR_ADMIN_TEMPLATE_ID` with: `___________________`
- [ ] Replace `YOUR_CUSTOMER_TEMPLATE_ID` with: `___________________`
- [ ] Replace `YOUR_PUBLIC_KEY` with: `___________________`
- [ ] Save file

### 7. Test
- [ ] Run `npm run dev`
- [ ] Add products to cart
- [ ] Go to cart page
- [ ] Click "Proceed to Checkout"
- [ ] Fill form with real email
- [ ] Click "Place Order"
- [ ] Check your email (khandetushar2001@gmail.com)
- [ ] Check customer email (the one you entered)

## Troubleshooting

### Emails not sending?
1. Check browser console for errors
2. Verify all IDs in CartPage.jsx are correct
3. Check EmailJS dashboard for error logs
4. Make sure `{{to_email}}` is in both templates

### Template not showing data?
1. Use `{{{order_items_html}}}` (3 braces) for HTML
2. Use `{{customer_name}}` (2 braces) for text
3. Check variable names match exactly

## Quick Reference

**Files Modified:**
- `src/pages/CartPage.jsx` - Email sending logic
- `package.json` - Added @emailjs/browser

**EmailJS Free Tier:**
- 200 emails/month
- = ~100 orders per month
- Perfect for starting out!

**Need More?**
Upgrade to paid plan or see alternatives in EMAIL_SETUP.md

---

Once complete, you'll have:
✅ Order notifications to your email
✅ Confirmation emails to customers
✅ Beautiful HTML email templates
✅ Professional order management

Happy selling! 🍫
