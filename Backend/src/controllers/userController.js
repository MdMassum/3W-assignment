const User = require("../models/User");

// Submit user data and images
const submitUser = async (req, res) => {

  try {
    const { name, socialMediaHandle } = req.body;
    const images = req.files ? req.files.map((file) => file.path) : [];

    if(!name || !socialMediaHandle){
      res.status(400).json({
        success:false,
        message:"Fields cannot be empty !"
      })
    }

    const user = await User.create({ name, socialMediaHandle, images });
    res.status(201).json({
       success: true,
       data: user
    });

  } catch (error) {
    res.status(500).json({
      success: false, 
      message: "Server error", error 
    });
  }
};

// Get all user submissions
const getAllUsers = async (req, res) => {

  try {
    const users = await User.find();
    res.status(200).json({ 
      success: true, 
      data: users 
    });

  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Server error",
      error 
    });
  }
};

module.exports = { submitUser, getAllUsers };
