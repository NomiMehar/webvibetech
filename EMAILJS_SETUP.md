# EmailJS Setup Instructions

To make your contact form work, you need to set up EmailJS (it's free for up to 200 emails per month).

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. Set your "To Email" to: `info@webvibetech.com` (or your preferred email)
5. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key**

## Step 5: Update the Code
Open `index.html` and find the contact form handler script (near the bottom of the file).

Replace these three placeholders:
- `YOUR_PUBLIC_KEY` - Replace with your EmailJS Public Key
- `YOUR_SERVICE_ID` - Replace with your EmailJS Service ID
- `YOUR_TEMPLATE_ID` - Replace with your EmailJS Template ID

## Example:
```javascript
emailjs.init("abc123xyz"); // Your Public Key
emailjs.send('service_abc123', 'template_xyz789', formData) // Your Service ID and Template ID
```

## Testing
1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox for the message
4. Check the browser console (F12) if there are any errors

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

