# Email Configuration Setup for Order Notifications

This guide will help you set up email notifications for orders placed on your Rawas Organics website.

## ✅ Recommended: EmailJS (Free - 200 emails/month)

EmailJS allows you to send emails to **both you and the customer** with custom templates. It's completely free for up to 200 emails per month.

### Why EmailJS?
- ✅ Send to multiple recipients (you + customer)
- ✅ Custom branded email templates
- ✅ 200 free emails/month (plenty for a small business)
- ✅ No backend required
- ✅ HTML email support

### Complete Setup (10 minutes)

#### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

#### Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Click **"Connect Account"** and sign in with your Gmail account
5. Note down your **Service ID** (e.g., `service_abc123`)

#### Step 3: Create Admin Notification Template

This email will be sent to **you** (khandetushar2001@gmail.com) when someone places an order.

1. Go to **Email Templates** in the dashboard
2. Click **"Create New Template"**
3. Name it: **"Admin Order Notification"**
4. Set **Subject**: `New Order from {{customer_name}} - Rawas Organics`
5. Set **Content**:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #8a5542; color: white; padding: 20px; text-align: center; }
        .content { background: #f8f6f4; padding: 20px; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #8a5542; border-bottom: 2px solid #8a5542; padding-bottom: 5px; }
        table { width: 100%; border-collapse: collapse; margin: 10px 0; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #8a5542; color: white; }
        .total { font-size: 20px; font-weight: bold; color: #8a5542; }
        .footer { background: #4d2f25; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🍫 New Order Received!</h1>
        </div>
        
        <div class="content">
            <div class="section">
                <h3>📋 Customer Details</h3>
                <p><strong>Name:</strong> {{customer_name}}</p>
                <p><strong>Email:</strong> {{customer_email}}</p>
                <p><strong>Mobile:</strong> {{customer_mobile}}</p>
                <p><strong>Address:</strong> {{customer_address}}</p>
            </div>
            
            <div class="section">
                <h3>🛍️ Order Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {{{order_items_html}}}
                    </tbody>
                </table>
            </div>
            
            <div class="section">
                <p class="total">Total Amount: ₹{{total_amount}}</p>
                <p><strong>Order Date:</strong> {{order_date}}</p>
                <p><strong>Payment Method:</strong> 💰 Cash on Delivery</p>
            </div>
        </div>
        
        <div class="footer">
            <p>Rawas Organics - Sweetness Reimagined with Jaggery</p>
            <p>This is an automated notification from your website</p>
        </div>
    </div>
</body>
</html>
```

6. **Important**: Set "To email" field to `{{to_email}}`
7. Click **"Save"** and note down the **Template ID** (e.g., `template_xyz789`)

#### Step 4: Create Customer Confirmation Template

This email will be sent to the **customer** who placed the order.

1. Click **"Create New Template"** again
2. Name it: **"Customer Order Confirmation"**
3. Set **Subject**: `Order Confirmation - Rawas Organics`
4. Set **Content**:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #8a5542; color: white; padding: 20px; text-align: center; }
        .content { background: #f8f6f4; padding: 20px; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #8a5542; border-bottom: 2px solid #8a5542; padding-bottom: 5px; }
        table { width: 100%; border-collapse: collapse; margin: 10px 0; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #8a5542; color: white; }
        .total { font-size: 20px; font-weight: bold; color: #8a5542; }
        .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #8a5542; margin: 15px 0; }
        .footer { background: #4d2f25; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🍫 Thank You for Your Order!</h1>
        </div>
        
        <div class="content">
            <p>Dear {{customer_name}},</p>
            <p>Thank you for choosing Rawas Organics! Your order has been received and will be processed shortly.</p>
            
            <div class="highlight">
                <p><strong>💰 Payment Method:</strong> Cash on Delivery</p>
                <p>You will pay when your order arrives at your doorstep. Our team will contact you shortly to confirm your order.</p>
            </div>
            
            <div class="section">
                <h3>📦 Your Order Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {{{order_items_html}}}
                    </tbody>
                </table>
                <p class="total">Total Amount: ₹{{total_amount}}</p>
            </div>
            
            <div class="section">
                <h3>📍 Delivery Address</h3>
                <p>{{customer_address}}</p>
                <p><strong>Contact:</strong> {{customer_mobile}}</p>
            </div>
            
            <div class="section">
                <p><strong>Order Date:</strong> {{order_date}}</p>
            </div>
            
            <p>If you have any questions, feel free to reply to this email or contact us at:</p>
            <p>📧 info@rawasorganics.com<br>
               📞 +91 98765 43210</p>
        </div>
        
        <div class="footer">
            <p>Rawas Organics - Sweetness Reimagined with Jaggery</p>
            <p>100% Natural | Handcrafted | Sustainable</p>
        </div>
    </div>
</body>
</html>
```

5. **Important**: Set "To email" field to `{{to_email}}`
6. Click **"Save"** and note down the **Template ID** (e.g., `template_abc456`)

#### Step 5: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `your_public_key_here`)
3. Copy it

#### Step 6: Update Your Code

Open `src/pages/CartPage.jsx` and find these lines (around line 85):

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const adminTemplateId = 'YOUR_ADMIN_TEMPLATE_ID'; // Template for admin notification
const customerTemplateId = 'YOUR_CUSTOMER_TEMPLATE_ID'; // Template for customer confirmation
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
```

Replace with your actual values:

```javascript
const serviceId = 'service_abc123'; // Your Service ID
const adminTemplateId = 'template_xyz789'; // Admin template ID
const customerTemplateId = 'template_abc456'; // Customer template ID
const publicKey = 'your_public_key_here'; // Your Public Key
```

#### Step 7: Test It!

1. Run your app: `npm run dev`
2. Add items to cart
3. Go to cart and click "Proceed to Checkout"
4. Fill in the form with a real email address
5. Click "Place Order"
6. Check both inboxes:
   - Your email: khandetushar2001@gmail.com (admin notification)
   - Customer email: the email you entered (order confirmation)

### Troubleshooting

**Emails not sending?**
- Check browser console for errors
- Verify all IDs are correct in CartPage.jsx
- Make sure your EmailJS service is connected
- Check EmailJS dashboard for error logs
- Verify `{{to_email}}` is set in both templates

**Template variables not showing?**
- Use triple braces `{{{order_items_html}}}` for HTML content
- Use double braces `{{customer_name}}` for text content
- Make sure variable names match exactly

### Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ 2 email services
- ✅ 2 email templates (you need both)
- ✅ All features included

For a small business, 200 emails/month = ~100 orders/month (2 emails per order), which should be plenty to start!

### Alternative Free Options

If you need more emails:

#### 1. **Formspree** (Free: 50 submissions/month)
- Simple API for forms
- Sends to any email
- Upgrade available for more submissions

#### 2. **SendGrid** (Free: 100 emails/day = 3,000/month)
- More complex setup requires backend
- Very reliable
- Good for scaling

#### 3. **Resend** (Free: 3,000 emails/month)
- Modern email API
- Great deliverability
- Need simple backend/serverless function

#### 4. **Brevo (formerly Sendinblue)** (Free: 300 emails/day = 9,000/month)
- Very generous free tier
- Marketing features included
- Slightly more complex setup

## Summary

**For Your Use Case (Small chocolate business):**

✅ **Best Choice: EmailJS**
- Sends to both you and customer
- Custom branded templates
- 200 emails/month = ~100 orders (perfect for starting out)
- No backend needed
- Takes 10 minutes to setup

**When to Upgrade:**
- If you get more than 100 orders/month, consider upgrading EmailJS ($7/month for 1,000 emails)
- Or migrate to SendGrid/Brevo for higher free tiers

## Current Implementation

Your app is now configured to:
1. ✅ Send order notification to you (khandetushar2001@gmail.com)
2. ✅ Send order confirmation to customer
3. ✅ Include all order details in both emails
4. ✅ Use beautiful HTML templates
5. ✅ Handle errors gracefully with fallback

Just add your EmailJS credentials and you're ready to go! 🚀
