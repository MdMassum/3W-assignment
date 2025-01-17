const jwt = require("jsonwebtoken");

const sendToken = (admin, statusCode, res) => {

    const token = jwt.sign({ id: admin._id, username:admin.username}, process.env.JWT_SECRET, {
        expiresIn: '60m',
    });
    // console.log(token)

    // const options = {
    //     expires: new Date(
    //         Date.now() + parseInt(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
    //     ),
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === "production",
    //     sameSite: process.env.NODE_ENV === "production" ? 'None' : 'Lax'
    // };

    res.status(statusCode).cookie("access_token", token).json({
        success: true,
        access_token : token,
        admin
    });
};

module.exports = sendToken