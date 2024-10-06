import jwt from "jsonwebtoken";

// Admin auth middleware
const adminAuth = async (req, res, next) => {
    try {
        // Extract token from Authorization header
        const token = req.headers.token; // we did .token as well just to get the string
        // if we cant do it will give the object
        if (!token) {
            return res.json({ success: false, message: "Unauthorized (No token provided)" });
        }
        console.log("Token provided successfully");
        console.log(token);

        // Verify the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY);  
        // it will give the combination of email and password which we get from token(client)     
        
        // Check if the decoded token contains the expected admin email
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Unauthorized (Token does not match)" });
        }
        next();
    } catch (error) {
        return res.json({ success: false, message: "Internal server error (Error inside try block of adminAuth)" });
    }
}

export default adminAuth;
