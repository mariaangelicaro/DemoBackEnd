const userService = require('../services/userService');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mockingoose = require('mockingoose');

jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('UserService', () => {
    describe('User Register', () => {
        test('it should register a user with hashed password', async () => {
            //Arrange
            const plainPassword = 'password';
            const hashedPassword = 'hashed_password';
            const expectedResult = new User({
                username: 'mariarodri',
                email: 'maria@rodriguez.com',
                password: hashedPassword,
            });
    
            bcrypt.hash.mockResolvedValue(hashedPassword);
            mockingoose(User).toReturn(expectedResult, 'save');
    
            //Act
            const result = await userService.register({
                username: 'mariarodri',
                email: 'maria@rodriguez.com',
                password: plainPassword,
            });
    
            //Assert
            expect(result.username).toBe(expectedResult.username);
            expect(result.email).toBe(expectedResult.email);
            expect(result.password).toBe(expectedResult.password);
            expect(result.save).toHaveBeenCalled();
            expect(result.save).toHaveBeenCalledTimes(1);
        });

        test('it should handle errors', async () => {
            const plainPassword = 'password';
            mockingoose(User).toReturn(new Error(), 'save');
            let result;
            try {
                await userService.register({
                    username: 'mariarodri',
                    email: 'maria@rodriguez.com',
                    password: plainPassword,
                });
    
            } catch (error) {
                result = error.message;
            }

            expect(result).toBe("Error registering user: ");
        });
    });

    describe('User Login', () => {

    });
});
