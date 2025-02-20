const userService = require('../services/userService');


export default {
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


    async recoverPassword(req, res) {
        try {
            await userService.recoverPassword(req.body.email);
            res.status(200).json({ message: 'Password recovery email sent' });
        } catch (err) {
            res.status(400).json({ message: 'Error sending recovery email', error: err.message });
        }
    }
};
