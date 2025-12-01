# EmailJS Setup Instructions

The contact form is configured to use EmailJS to send emails directly to your inbox (`dawsonfilion21@gmail.com`).

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (`dawsonfilion21@gmail.com`)
5. Note the **Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Subject**: New Portfolio Contact from {{from_name}}

**Content**:
```
You have a new message from your portfolio:

From: {{from_name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

4. Note the **Template ID** (e.g., `template_abc456`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123xyz`)

### 5. Update Contact Form
Open `src/pages/Contact.jsx` and replace the placeholders (lines 35-37):

```javascript
const serviceID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### 6. Test the Form
1. Run `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email inbox for the message

## Form Fields
The form collects:
- **name**: Sender's name
- **email**: Sender's email address
- **subject**: Message subject
- **message**: Message content

These field names must match the template variables in EmailJS.

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

Perfect for a personal portfolio!

## Troubleshooting

**Emails not sending?**
- Check browser console for errors
- Verify Service ID, Template ID, and Public Key are correct
- Make sure you've verified your email in EmailJS
- Check EmailJS dashboard for failed requests

**Wrong email address?**
- The emails will come TO: dawsonfilion21@gmail.com
- The FROM email will be the service email you connected
- The form submission data will be in the email content
