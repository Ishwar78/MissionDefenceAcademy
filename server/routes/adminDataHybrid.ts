import { RequestHandler } from "express";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { ContactData, BatchData } from "../database";

// Data storage paths for fallback
const DATA_DIR = path.join(process.cwd(), 'data');
const CONTACT_DATA_FILE = path.join(DATA_DIR, 'contact.json');
const BATCHES_DATA_FILE = path.join(DATA_DIR, 'batches.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Check if MongoDB is connected
const isMongoConnected = () => {
  return mongoose.connection.readyState === 1;
};

// Fallback JSON functions
const readContactDataFromFile = () => {
  try {
    if (fs.existsSync(CONTACT_DATA_FILE)) {
      const data = fs.readFileSync(CONTACT_DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
    return {
      phone: '+91 7700008052',
      email: 'Missiondefenceacademy22@gmail.com',
      address: 'Tiranga Building, near Rajiv Gandhi Sports Stadium\nRohtak Haryana, pin 124001',
      mapEmbed: '',
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error reading contact data from file:', error);
    return null;
  }
};

const writeContactDataToFile = (data: any) => {
  try {
    fs.writeFileSync(CONTACT_DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing contact data to file:', error);
    return false;
  }
};

const readBatchesDataFromFile = () => {
  try {
    if (fs.existsSync(BATCHES_DATA_FILE)) {
      const data = fs.readFileSync(BATCHES_DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
    return [
      {
        id: "army-special-batch",
        title: "Army Special Batch",
        description: "Specialized coaching for Indian Army recruitment with intensive training programs",
        videoLink: "https://www.youtube.com/embed/bm9ohYLJG-I",
        schedule: "6 Months Intensive Training",
        successRate: "95% Selection Rate",
        batchSize: "Maximum 30 Students",
        published: true,
        createdAt: new Date().toISOString()
      },
      {
        id: "navy-special-batch",
        title: "Navy Special Batch",
        description: "Specialized coaching for Indian Navy AA/SSR recruitment with technical and swimming training",
        videoLink: "https://www.youtube.com/embed/MbxhRScv0P4",
        schedule: "6 Months Intensive Training",
        successRate: "95% Selection Rate",
        batchSize: "Maximum 25 Students",
        published: true,
        createdAt: new Date().toISOString()
      }
    ];
  } catch (error) {
    console.error('Error reading batches data from file:', error);
    return [];
  }
};

const writeBatchesDataToFile = (data: any) => {
  try {
    fs.writeFileSync(BATCHES_DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing batches data to file:', error);
    return false;
  }
};

// Contact Data Routes
export const getContactData: RequestHandler = async (req, res) => {
  try {
    let contactData;
    
    if (isMongoConnected()) {
      // Use MongoDB
      contactData = await ContactData.findOne().sort({ createdAt: -1 });
      
      if (!contactData) {
        contactData = await ContactData.create({
          phone: '+91 7700008052',
          email: 'Missiondefenceacademy22@gmail.com',
          address: 'Tiranga Building, near Rajiv Gandhi Sports Stadium\nRohtak Haryana, pin 124001',
          mapEmbed: ''
        });
      }
    } else {
      // Use JSON file fallback
      contactData = readContactDataFromFile();
    }

    if (!contactData) {
      throw new Error('Failed to retrieve contact data');
    }

    res.json({
      success: true,
      data: {
        phone: contactData.phone,
        email: contactData.email,
        address: contactData.address,
        mapEmbed: contactData.mapEmbed,
        lastUpdated: contactData.lastUpdated || contactData.updatedAt || new Date().toISOString()
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

    const updateData = {
      phone,
      email,
      address,
      mapEmbed: mapEmbed || "",
      lastUpdated: new Date().toISOString()
    };

    let contactData;

    if (isMongoConnected()) {
      // Use MongoDB
      contactData = await ContactData.findOne().sort({ createdAt: -1 });
      
      if (contactData) {
        Object.assign(contactData, updateData);
        await contactData.save();
      } else {
        contactData = await ContactData.create(updateData);
      }
    } else {
      // Use JSON file fallback
      const success = writeContactDataToFile(updateData);
      if (!success) {
        throw new Error('Failed to update contact data');
      }
      contactData = updateData;
    }

    res.json({
      success: true,
      message: "Contact data updated successfully",
      data: {
        phone: contactData.phone,
        email: contactData.email,
        address: contactData.address,
        mapEmbed: contactData.mapEmbed,
        lastUpdated: contactData.lastUpdated || contactData.updatedAt
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
    let batchesData;
    
    if (isMongoConnected()) {
      // Use MongoDB
      batchesData = await BatchData.find().sort({ createdAt: -1 });
    } else {
      // Use JSON file fallback
      batchesData = readBatchesDataFromFile();
    }
    
    res.json({
      success: true,
      data: batchesData.map((batch: any) => ({
        id: batch.id,
        title: batch.title,
        description: batch.description,
        videoLink: batch.videoLink,
        schedule: batch.schedule,
        successRate: batch.successRate,
        batchSize: batch.batchSize,
        published: batch.published,
        createdAt: batch.createdAt || new Date().toISOString()
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
    
    const newBatchData = {
      id,
      title,
      description,
      videoLink: videoLink || "",
      schedule: schedule || "",
      successRate: successRate || "",
      batchSize: batchSize || "",
      published: published || false,
      createdAt: new Date().toISOString()
    };

    let newBatch;

    if (isMongoConnected()) {
      // Use MongoDB
      const existingBatch = await BatchData.findOne({ id });
      if (existingBatch) {
        return res.status(400).json({
          success: false,
          message: "A batch with this title already exists"
        });
      }

      newBatch = await BatchData.create(newBatchData);
    } else {
      // Use JSON file fallback
      const batchesData = readBatchesDataFromFile();
      
      // Check if batch with this ID already exists
      const existingBatch = batchesData.find((batch: any) => batch.id === id);
      if (existingBatch) {
        return res.status(400).json({
          success: false,
          message: "A batch with this title already exists"
        });
      }

      batchesData.push(newBatchData);
      const success = writeBatchesDataToFile(batchesData);
      
      if (!success) {
        throw new Error('Failed to create batch');
      }
      
      newBatch = newBatchData;
    }

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

    let batch;

    if (isMongoConnected()) {
      // Use MongoDB
      batch = await BatchData.findOne({ id });
      
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
    } else {
      // Use JSON file fallback
      const batchesData = readBatchesDataFromFile();
      const batchIndex = batchesData.findIndex((b: any) => b.id === id);
      
      if (batchIndex === -1) {
        return res.status(404).json({
          success: false,
          message: "Batch not found"
        });
      }

      // Update batch fields
      const existingBatch = batchesData[batchIndex];
      batchesData[batchIndex] = {
        ...existingBatch,
        title: title || existingBatch.title,
        description: description || existingBatch.description,
        videoLink: videoLink !== undefined ? videoLink : existingBatch.videoLink,
        schedule: schedule !== undefined ? schedule : existingBatch.schedule,
        successRate: successRate !== undefined ? successRate : existingBatch.successRate,
        batchSize: batchSize !== undefined ? batchSize : existingBatch.batchSize,
        published: published !== undefined ? published : existingBatch.published,
        updatedAt: new Date().toISOString()
      };

      const success = writeBatchesDataToFile(batchesData);
      if (!success) {
        throw new Error('Failed to update batch');
      }
      
      batch = batchesData[batchIndex];
    }

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
    
    let batch;

    if (isMongoConnected()) {
      // Use MongoDB
      batch = await BatchData.findOne({ id });
      
      if (!batch) {
        return res.status(404).json({
          success: false,
          message: "Batch not found"
        });
      }

      await BatchData.deleteOne({ id });
    } else {
      // Use JSON file fallback
      const batchesData = readBatchesDataFromFile();
      const batchIndex = batchesData.findIndex((b: any) => b.id === id);
      
      if (batchIndex === -1) {
        return res.status(404).json({
          success: false,
          message: "Batch not found"
        });
      }

      batch = batchesData[batchIndex];
      batchesData.splice(batchIndex, 1);
      
      const success = writeBatchesDataToFile(batchesData);
      if (!success) {
        throw new Error('Failed to delete batch');
      }
    }

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
