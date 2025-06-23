const express = require('express');
const router = express.Router();
const auth = require('../middlewares/Auth');

// GET /admin (only for admins)
router.get('/admin', auth, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admins only' });
  }
  res.json({ message: `Welcome Admin: ${req.user.email}` });
});

// GET /user (for all authenticated users)
router.get('/user', auth, (req, res) => {
  res.json({ message: `Welcome User: ${req.user.email}` });
});

module.exports = router;
