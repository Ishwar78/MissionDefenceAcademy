import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Simple in-memory admin credentials (in production, this would be in a database)
const ADMIN_CREDENTIALS = {
  email: "admin@missiondefenceacademy.com",
  password: "$2a$10$K8yJzRqNXjXJxGxzGxGxGuR6YxOxvr6yXxYxKqNqXjXJxGxzGxGxG" // Password: "admin123"
};

const JWT_SECRET = process.env.JWT_SECRET || "mission_defence_academy_secret_key_2024";

interface LoginRequest {
  email: string;
  password: string;
}

// Admin login handler
export const handleAdminLogin: RequestHandler = async (req, res) => {
  try {
    const { email, password }: LoginRequest = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "Email and password are required" 
      });
    }

    // Check email
    if (email !== ADMIN_CREDENTIALS.email) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials" 
      });
    }

    // Check password (for demo purposes, we'll create the hash)
    const isPasswordValid = password === "admin123"; // Simplified for demo
    
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials" 
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        email: ADMIN_CREDENTIALS.email,
        role: 'admin',
        iat: Date.now()
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ 
      success: true, 
      message: "Login successful",
      token: token,
      admin: {
        email: ADMIN_CREDENTIALS.email,
        role: 'admin'
      }
    });

  } catch (error: any) {
    console.error('Admin login error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
};

// Verify admin token middleware
export const verifyAdminToken: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: "Access token required" 
      });
    }

    jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        return res.status(403).json({ 
          success: false, 
          message: "Invalid or expired token" 
        });
      }

      // Add admin info to request
      (req as any).admin = decoded;
      next();
    });

  } catch (error) {
    console.error('Token verification error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Token verification failed" 
    });
  }
};

// Get admin profile
export const getAdminProfile: RequestHandler = (req, res) => {
  const admin = (req as any).admin;
  res.json({
    success: true,
    admin: {
      email: admin.email,
      role: admin.role
    }
  });
};

// Admin logout (client-side token removal)
export const handleAdminLogout: RequestHandler = (req, res) => {
  res.json({ 
    success: true, 
    message: "Logged out successfully" 
  });
};
