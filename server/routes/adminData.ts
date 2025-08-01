import { RequestHandler } from "express";
import { ContactData, BatchData } from "../database";

// Contact Data Routes
export const getContactData: RequestHandler = async (req, res) => {
  try {
    let contactData = await ContactData.findOne().sort({ createdAt: -1 });
    
    if (!contactData) {
      // Create default contact data if none exists
      contactData = await ContactData.create({
        phone: '+91 7700008052',
        email: 'Missiondefenceacademy22@gmail.com',
        address: 'Tiranga Building, near Rajiv Gandhi Sports Stadium\nRohtak Haryana, pin 124001',
        mapEmbed: ''
      });
    }

    res.json({
      success: true,
      data: {
        phone: contactData.phone,
        email: contactData.email,
        address: contactData.address,
        mapEmbed: contactData.mapEmbed,
        lastUpdated: contactData.lastUpdated || contactData.updatedAt
      }
    });
  } catch (error) {
    console.error('Error fetching contact data:', error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve contact data"
    });
  }
};

export const updateContactData: RequestHandler = async (req, res) => {
  try {
    const { phone, email, address, mapEmbed } = req.body;

    if (!phone || !email || !address) {
      return res.status(400).json({
        success: false,
        message: "Phone, email, and address are required"
      });
    }

    // Find and update the latest contact data, or create new if none exists
    let contactData = await ContactData.findOne().sort({ createdAt: -1 });
    
    if (contactData) {
      contactData.phone = phone;
      contactData.email = email;
      contactData.address = address;
      contactData.mapEmbed = mapEmbed || "";
      contactData.lastUpdated = new Date();
      await contactData.save();
    } else {
      contactData = await ContactData.create({
        phone,
        email,
        address,
        mapEmbed: mapEmbed || "",
        lastUpdated: new Date()
      });
    }

    res.json({
      success: true,
      message: "Contact data updated successfully",
      data: {
        phone: contactData.phone,
        email: contactData.email,
        address: contactData.address,
        mapEmbed: contactData.mapEmbed,
        lastUpdated: contactData.lastUpdated
      }
    });
  } catch (error) {
    console.error('Error updating contact data:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Batches Data Routes
export const getBatchesData: RequestHandler = async (req, res) => {
  try {
    const batchesData = await BatchData.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: batchesData.map(batch => ({
        id: batch.id,
        title: batch.title,
        description: batch.description,
        videoLink: batch.videoLink,
        schedule: batch.schedule,
        successRate: batch.successRate,
        batchSize: batch.batchSize,
        published: batch.published,
        createdAt: batch.createdAt
      }))
    });
  } catch (error) {
    console.error('Error fetching batches data:', error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve batches data"
    });
  }
};

export const createBatch: RequestHandler = async (req, res) => {
  try {
    const { title, description, videoLink, schedule, successRate, batchSize, published } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required"
      });
    }

    // Generate ID from title
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    // Check if batch with this ID already exists
    const existingBatch = await BatchData.findOne({ id });
    if (existingBatch) {
      return res.status(400).json({
        success: false,
        message: "A batch with this title already exists"
      });
    }

    const newBatch = await BatchData.create({
      id,
      title,
      description,
      videoLink: videoLink || "",
      schedule: schedule || "",
      successRate: successRate || "",
      batchSize: batchSize || "",
      published: published || false
    });

    res.json({
      success: true,
      message: "Batch created successfully",
      data: {
        id: newBatch.id,
        title: newBatch.title,
        description: newBatch.description,
        videoLink: newBatch.videoLink,
        schedule: newBatch.schedule,
        successRate: newBatch.successRate,
        batchSize: newBatch.batchSize,
        published: newBatch.published,
        createdAt: newBatch.createdAt
      }
    });
  } catch (error) {
    console.error('Error creating batch:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

export const updateBatch: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, videoLink, schedule, successRate, batchSize, published } = req.body;

    const batch = await BatchData.findOne({ id });
    
    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    // Update batch fields
    if (title) batch.title = title;
    if (description) batch.description = description;
    if (videoLink !== undefined) batch.videoLink = videoLink;
    if (schedule !== undefined) batch.schedule = schedule;
    if (successRate !== undefined) batch.successRate = successRate;
    if (batchSize !== undefined) batch.batchSize = batchSize;
    if (published !== undefined) batch.published = published;

    await batch.save();

    res.json({
      success: true,
      message: "Batch updated successfully",
      data: {
        id: batch.id,
        title: batch.title,
        description: batch.description,
        videoLink: batch.videoLink,
        schedule: batch.schedule,
        successRate: batch.successRate,
        batchSize: batch.batchSize,
        published: batch.published,
        createdAt: batch.createdAt,
        updatedAt: batch.updatedAt
      }
    });
  } catch (error) {
    console.error('Error updating batch:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

export const deleteBatch: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    const batch = await BatchData.findOne({ id });
    
    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    await BatchData.deleteOne({ id });

    res.json({
      success: true,
      message: "Batch deleted successfully",
      data: {
        id: batch.id,
        title: batch.title
      }
    });
  } catch (error) {
    console.error('Error deleting batch:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
