const service = require('../Services/user.services');

const adminController = {
  async create(req, res) {
    const storedUser = await service.create(req.body);
    return res.status(201).json(storedUser);
  },
  async getAll(_req, res) {
    const users = await service.getAll();
    res.status(200).json(users);
  },
};

module.exports = adminController;
