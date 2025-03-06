const StoreOwner = require('../models/StoreOwner');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { username, password, storeName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const owner = new StoreOwner({ username, password: hashedPassword, storeName });
  await owner.save();
  res.json({ message: 'Registered successfully' });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const owner = await StoreOwner.findOne({ username });

  if (owner && (await bcrypt.compare(password, owner.password))) {
    const token = jwt.sign({ _id: owner._id }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
