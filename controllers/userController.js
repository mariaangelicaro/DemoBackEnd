const userService = require('../services/userService');


const userController = {

    async register(req, res) {
        try {
            const user = await userService.register(req.body);
            res.status(201).json({ message: 'User created successfully', user });
        } catch (err) {
            res.status(400).json({ message: 'Error registering user', error: err.message });
        }
    },


    async login(req, res) {
        try {
            const token = await userService.login(req.body);
            res.status(200).json({ message: 'Login successful', token });
        } catch (err) {
            res.status(400).json({ message: 'Invalid credentials', error: err.message });
        }
    },
};

module.exports = userController;