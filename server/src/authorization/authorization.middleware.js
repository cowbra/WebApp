const router = require("express").Router();

const cors = require("cors");

// Utilisez le middleware "cors" pour ajouter les en-têtes CORS
router.use(cors());
const canAccess =
  (allowedRoles = []) =>
  (req, res, next) => {
    if (!allowedRoles || allowedRoles.length === 0) {
      return next();
    }
    if (!req.user) {
      return res.status(401).json({ message: "Authentication required." });
    }
    if (!req.user?.role || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Insufficient permission." });
    }
    return next();
  };

module.exports = { canAccess };
