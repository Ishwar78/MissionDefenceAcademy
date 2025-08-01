import mongoose from 'mongoose';

// Database connection
export const connectDatabase = async () => {
  try {
    const connectionString = 'mongodb+srv://project:project123@cluster0.2xoqj5k.mongodb.net/missiondefenceacademy';

    console.log('��� Connecting to MongoDB...');
    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log('✅ Connected to MongoDB successfully');

    // Test the connection
    await mongoose.connection.db.admin().ping();
    console.log('✅ MongoDB ping successful');

  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    console.log('⚠️  Continuing without MongoDB - using fallback mode');
    // Don't exit the process, just log the error
  }
};

// Contact Data Schema
const contactSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    default: '+91 7700008052'
  },
  email: {
    type: String,
    required: true,
    default: 'Missiondefenceacademy22@gmail.com'
  },
  address: {
    type: String,
    required: true,
    default: 'Tiranga Building, near Rajiv Gandhi Sports Stadium\nRohtak Haryana, pin 124001'
  },
  mapEmbed: {
    type: String,
    default: ''
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Batch Data Schema
const batchSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  videoLink: {
    type: String,
    default: ''
  },
  schedule: {
    type: String,
    default: ''
  },
  successRate: {
    type: String,
    default: ''
  },
  batchSize: {
    type: String,
    default: ''
  },
  published: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Create models
export const ContactData = mongoose.model('ContactData', contactSchema);
export const BatchData = mongoose.model('BatchData', batchSchema);

// Initialize default data
export const initializeDefaultData = async () => {
  try {
    // Check if contact data exists, if not create default
    const contactCount = await ContactData.countDocuments();
    if (contactCount === 0) {
      await ContactData.create({
        phone: '+91 7700008052',
        email: 'Missiondefenceacademy22@gmail.com',
        address: 'Tiranga Building, near Rajiv Gandhi Sports Stadium\nRohtak Haryana, pin 124001',
        mapEmbed: ''
      });
      console.log('✅ Default contact data created');
    }

    // Check if batch data exists, if not create defaults
    const batchCount = await BatchData.countDocuments();
    if (batchCount === 0) {
      const defaultBatches = [
        {
          id: "army-special-batch",
          title: "Army Special Batch",
          description: "Specialized coaching for Indian Army recruitment with intensive training programs",
          videoLink: "https://www.youtube.com/embed/bm9ohYLJG-I",
          schedule: "6 Months Intensive Training",
          successRate: "95% Selection Rate",
          batchSize: "Maximum 30 Students",
          published: true
        },
        {
          id: "navy-special-batch",
          title: "Navy Special Batch",
          description: "Specialized coaching for Indian Navy AA/SSR recruitment with technical and swimming training",
          videoLink: "https://www.youtube.com/embed/MbxhRScv0P4",
          schedule: "6 Months Intensive Training",
          successRate: "95% Selection Rate",
          batchSize: "Maximum 25 Students",
          published: true
        },
        {
          id: "air-force-special-batch",
          title: "Air Force Special Batch",
          description: "Specialized coaching for Indian Air Force X & Y Group recruitment with technical training",
          videoLink: "https://www.youtube.com/embed/sample-airforce",
          schedule: "6 Months Intensive Training",
          successRate: "95% Selection Rate",
          batchSize: "Maximum 30 Students",
          published: true
        },
        {
          id: "nda-special-batch",
          title: "NDA Special Batch",
          description: "Comprehensive coaching for National Defence Academy written exam and SSB preparation",
          videoLink: "https://www.youtube.com/embed/sample-nda",
          schedule: "12 Months Comprehensive Training",
          successRate: "95% Selection Rate",
          batchSize: "Maximum 25 Students",
          published: true
        }
      ];

      await BatchData.insertMany(defaultBatches);
      console.log('✅ Default batch data created');
    }
  } catch (error) {
    console.error('❌ Error initializing default data:', error);
  }
};
