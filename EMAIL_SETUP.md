# Email Configuration Setup for Order Notifications

This guide will help you set up email notifications for orders placed on your Rawas Organics website.

## Quick Setup with Web3Forms (Recommended - 5 minutes)

Web3Forms is completely free, requires no coding changes to templates, and is perfect for contact forms and order notifications.

### Steps:

1. **Get Your Access Key**
   - Go to [https://web3forms.com](https://web3forms.com)
   - Click "Create Access Key" (no signup required!)
   - Enter your email: `khandetushar2001@gmail.com`
   - Copy the Access Key you receive

2. **Update CartPage.jsx**
   - Open `src/pages/CartPage.jsx`
   - Find this line (around line 96):
     ```javascript
     access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
     ```
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key

3. **Test It!**
   - Run your app: `npm run dev`
   - Add items to cart
   - Go to cart and click "Proceed to Checkout"
   - Fill in the form and click "Place Order"
   - Check your email at khandetushar2001@gmail.com

That's it! You'll receive order notifications via email.

### Email Format

The email will include:
- Customer name, email, mobile, and address
- List of all ordered items with quantities and prices
- Total amount
- Order date and time
- Payment method (Cash on Delivery)

## Alternative: EmailJS (More Customizable)

If you want custom email templates with branding:

### Steps:

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (allows 200 emails/month)

2. **Set up Email Service**
   - Go to "Email Services" and click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the setup instructions
   - Note your **Service ID**

3. **Create Email Template**
   - Go to "Email Templates" and click "Create New Template"
   - Use this template:

   ```
   Subject: New Order from {{customer_name}}
   
   NEW ORDER RECEIVED!
   
   Customer Details:
   Name: {{customer_name}}
   Email: {{customer_email}}
   Mobile: {{customer_mobile}}
   Address: {{customer_address}}
   
   Order Details:
   {{order_items}}
   
   Total Amount: ₹{{total_amount}}
   Order Date: {{order_date}}
   
   Payment Method: Cash on Delivery
   ```

   - Note your **Template ID**

4. **Get Public Key**
   - Go to "Account" → "General"
   - Find your **Public Key**

5. **Update CartPage.jsx**
   - Open `src/pages/CartPage.jsx`
   - Find these lines (around line 95):
   ```javascript
   service_id: 'YOUR_SERVICE_ID',
   template_id: 'YOUR_TEMPLATE_ID',
   user_id: 'YOUR_PUBLIC_KEY',
   ```
   - Replace with your actual IDs

6. **Install EmailJS Package**
   ```bash
   npm install @emailjs/browser
   ```

7. **Update the import in CartPage.jsx**
   Add at the top:
   ```javascript
   import emailjs from '@emailjs/browser';
   ```

   Then update the email sending code to use EmailJS library instead of fetch.

## Option 2: Using a Backend Service (More Reliable)

For production, consider using a backend service:

### Using Netlify Functions (if deploying to Netlify):

1. Create `netlify/functions/send-order-email.js`:

```javascript
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const orderDetails = JSON.parse(event.body);

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'khandetushar2001@gmail.com',
    subject: `New Order from ${orderDetails.customerName}`,
    html: `
      <h2>New Order Received!</h2>
      <h3>Customer Details:</h3>
      <p><strong>Name:</strong> ${orderDetails.customerName}</p>
      <p><strong>Email:</strong> ${orderDetails.customerEmail}</p>
      <p><strong>Mobile:</strong> ${orderDetails.customerMobile}</p>
      <p><strong>Address:</strong> ${orderDetails.customerAddress}</p>
      
      <h3>Order Items:</h3>
      <ul>
        ${orderDetails.items.map(item => `
          <li>${item.name} (${item.size}) - Qty: ${item.quantity} - ₹${item.price} x ${item.quantity} = ₹${item.total}</li>
        `).join('')}
      </ul>
      
      <h3>Total Amount: ₹${orderDetails.totalAmount}</h3>
      <p><strong>Order Date:</strong> ${orderDetails.orderDate}</p>
      <p><strong>Payment Method:</strong> Cash on Delivery</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};
```

2. Add environment variables to Netlify:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASSWORD`: Your Gmail App Password (not regular password)

3. Update CartPage.jsx to call your Netlify function instead.

## Option 3: Simple Mailto Link (Temporary Solution)

For immediate testing without setup:

The current code already has a fallback that displays the order details in an alert and console. This works for testing but won't send actual emails.

To use mailto (opens user's email client):

```javascript
const mailtoLink = `mailto:khandetushar2001@gmail.com?subject=New Order from ${customerDetails.name}&body=${encodeURIComponent(emailBody)}`;
window.location.href = mailtoLink;
```

## Testing

1. Add items to cart
2. Go to cart page
3. Click "Proceed to Checkout"
4. Fill in the form with test data
5. Click "Place Order"
6. Check email at khandetushar2001@gmail.com

## Current Behavior

Currently, the app will:
- Validate the form fields
- Show order details in console.log
- Display an alert with order summary
- Clear the cart after order placement

This works for testing. Once you set up EmailJS or a backend service, actual emails will be sent.

## Recommended: Use EmailJS for Quick Setup

EmailJS is the easiest to set up and requires no backend. Perfect for this use case!
