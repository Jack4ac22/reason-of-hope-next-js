import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide an owner"],
    },
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    type: {
      type: String,
      required: [true, "Please provide a type"],
    },
    description: {
      type: String,
    },
    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: String,
      },
    },
    beds: {
      type: Number,
      required: [true, "Please provide the number of beds"],
    },
    baths: {
      type: Number,
      required: [true, "Please provide the number of baths"],
    },
    square_feet: {
      type: Number,
      required: [true, "Please provide the square footage"],
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },
    seller_info: {
      name: {
        type: String,
        required: [true, "Please provide a name"],
      },
      email: {
        type: String,
        required: [true, "Please provide an email"],
      },
      phone: {
        type: String,
        required: [true, "Please provide a phone number"],
      },
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Property = models.Property || model("Property", PropertySchema);
export default Property;
