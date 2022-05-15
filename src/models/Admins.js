import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    adminStatus: {
      type: Boolean,
      required: true,
    },
    projects: [
      {
        projectId: {
          type: Number,
        },
        projectName: {
          type: String,
        },
        projectStatus: {
          type: Boolean,
        },
      },
    ],
  },
);

export default mongoose.model('Admin', adminSchema);
