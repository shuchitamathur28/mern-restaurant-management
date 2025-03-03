const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  const parsed_token = JSON.parse(token);
  try {
    const decoded = jwt.verify(parsed_token.token, process.env.JWT_SECRET);
    // console.log("JWT USER", decoded);
    req.user = decoded.userId;
    next();
  } catch (err) {
    // console.log('err', err);
    res.status(401).json({ msg: 'Invalid token' });
  }
};
