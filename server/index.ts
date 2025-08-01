import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDatabase, initializeDefaultData } from "./database";
import { handleDemo } from "./routes/demo";
import { handleContactEmail } from "./routes/email";
import { handleAdminLogin, verifyAdminToken, getAdminProfile, handleAdminLogout } from "./routes/admin";
import { getContactData, updateContactData, getBatchesData, createBatch, updateBatch, deleteBatch } from "./routes/adminDataHybrid";

export function createServer() {
  const app = express();

  // Initialize database connection
  connectDatabase().then(() => {
    initializeDefaultData();
  });

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContactEmail);

  // Public API endpoints for frontend data
  app.get("/api/contact-info", getContactData);
  app.get("/api/batches", getBatchesData);

  // Admin Authentication Routes
  app.post("/api/admin/login", handleAdminLogin);
  app.post("/api/admin/logout", handleAdminLogout);
  app.get("/api/admin/profile", verifyAdminToken, getAdminProfile);

  // Admin Data Management Routes (Protected)
  app.get("/api/admin/contact", verifyAdminToken, getContactData);
  app.put("/api/admin/contact", verifyAdminToken, updateContactData);

  app.get("/api/admin/batches", verifyAdminToken, getBatchesData);
  app.post("/api/admin/batches", verifyAdminToken, createBatch);
  app.put("/api/admin/batches/:id", verifyAdminToken, updateBatch);
  app.delete("/api/admin/batches/:id", verifyAdminToken, deleteBatch);

  return app;
}
