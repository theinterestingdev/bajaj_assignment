const { handleBfhl } = require('./controllers/bfhlController.js');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    return handleBfhl(req, res);
  }
  return res.status(404).json({ error: 'Not found' });
};