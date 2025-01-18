const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const sendToken = require("../utils/jwtToken");

// Admin Login
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  if(!username || !password){
    res.status(400).json({
      success:false,
      message:"Input Fields cannot be empty !"
    })
  }

  try {

    const admin = await Admin.findOne({ username }).select("+password");
    // console.log(admin)
    if (!admin) {
      return res.status(404).json({ 
        success: false, 
        message: "Admin not found" 
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid credentials" 
      });
    }

    sendToken(admin,200,res);

  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// Create Admin (one-time)
const createAdmin = async (req, res) => {
  const { username, password } = req.body;

  if(!username || !password){
    res.status(400).json({
      success:false,
      message:"Input Fields cannot be empty !"
    })
  }

  try {

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ 
      username, 
      password: hashedPassword 
    });

    res.status(201).json({ success: true, data: admin });

  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Server error", 
      error 
    });
  }
};

const logoutAdmin = async(req, res)=>{

  try {
    res.clearCookie('access_token');

    res.status(200).json({
        success:true,
        message:"Logged Out Successfully"
    })
  } catch (error) {
      res.status(500).json({ 
        success: false,
        message: "Server error", 
        error 
      });
  }
}

module.exports = { loginAdmin, createAdmin, logoutAdmin };
