const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userService = {
    async register(userData) {
        try {
            userData.password = await bcrypt.hash(userData.password, 10);
            const newUser = new User(userData);
            await newUser.save();
            return newUser;
        } catch (error) {
            throw new Error('Error registering user: ' + error.message);
        }
    },

    async login({ email, password }) {
        try {
            const user = await User.findOne({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                throw new Error('Invalid credentials');
            }
            const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { token, user };
        } catch (error) {
            throw new Error('Error logging in: ' + error.message);
        }
    },
};

module.exports = userService;