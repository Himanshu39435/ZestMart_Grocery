import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const token = req.cookies?.token;  // ✅ safe access

  if (!token) {
    return res.json({ success: false, message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.id) {
      return res.json({ success: false, message: "Unauthorized" });
    }

    req.user = { id: decoded.id };
    next();
  } catch (error) {
    return res.json({ success: false, message: "Unauthorized" });
  }
};

export default authUser;
