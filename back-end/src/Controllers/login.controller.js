const loginServices = require('../Services/login.services');

const loginController = {
  async login(req, res) {
    const body = loginServices.validateBody(req.body);
    const tokenAndUser = await loginServices.login(body);

    return res.status(200).json(tokenAndUser);
  },
};

module.exports = loginController;
