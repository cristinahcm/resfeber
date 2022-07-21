const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    dates: {
      type: Date,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    type: {
      enum: ["Eco, Family, Friends, Only Women"],
      required: true,
    },
    origin: {
      type: GeolocationCoordinates,
      required: true,
    },
    destination: {
      type: GeolocationCoordinates,
      required: true,
    },
    route: {
      type: String,
    },
    images: {
      type: Image,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
