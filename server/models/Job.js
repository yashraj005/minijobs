import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  amount: Number,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 14400, // 4 hours in seconds
  },
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
