import mongoose, { models, Schema } from 'mongoose';

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 1,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 1,
    },
    email: {
      type: String,
      required: true,
      minLength: 1,
    },
    phoneNumber: String,
    address: String,
    postalCode: Number,
    date: Date,
    products: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Customer = models.Customer || mongoose.model('Customer', customerSchema);

export default Customer;
