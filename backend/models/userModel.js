const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    pic: {
      type: String,
      default:
        "https://res.cloudinary.com/ltnkiet/image/upload/v1687274490/anonymous-avatar_ustbtg.png",
    },
  },
    { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


const User = mongoose.model("User", userSchema);

module.exports = User;
