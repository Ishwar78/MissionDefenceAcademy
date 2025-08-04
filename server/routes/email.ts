import { RequestHandler } from "express";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const handleContactEmail: RequestHandler = async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    const { name, email, subject, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Validation failed - missing fields');
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    console.log('Creating email transporter...');

    // Create transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'Mdaclasses22@gmail.com',
        pass: 'pley mtlw ddhw xfxe'
      }
    });

    // Verify transporter configuration
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('Transporter verified successfully');

    // Email content
    const mailOptions = {
      from: 'Mdaclasses22@gmail.com',
      to: 'Mdaclasses22@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Contact Form Submission - Mission Defence Academy
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #374151;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef2f2; border-left: 4px solid #dc2626;">
            <p style="margin: 0; color: #991b1b; font-size: 14px;">
              <strong>Reply to:</strong> ${email}<br>
              <strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      `
    };

    // Send email
    console.log('Sending email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    res.json({
      success: true,
      message: "Email sent successfully!"
    });

  } catch (error: any) {
    console.error('Email error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      stack: error.stack
    });

    // Provide more specific error messages
    let errorMessage = "Failed to send email. Please try again.";

    if (error.code === 'EAUTH') {
      errorMessage = "Email authentication failed. Please check email credentials.";
    } else if (error.code === 'ECONNECTION') {
      errorMessage = "Could not connect to email server. Please check internet connection.";
    } else if (error.code === 'EMESSAGE') {
      errorMessage = "Invalid email format. Please check your message.";
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
