import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  console.log("✅ Incoming Cookies:", req.cookies);  // <--- ADD THIS

  const token = req.cookies?.token;

  if (!token) {
    console.log("❌ No token received");
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    console.log("🔍 Verifying token with SECRET:", process.env.JWT_SECRET); // <--- ADD THIS
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("✅ Token decoded:", decoded); // <--- ADD THIS

    if (!decoded.id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.log("❌ JWT ERROR:", error.message);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

export default authUser;
