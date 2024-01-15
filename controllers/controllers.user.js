const User = require("../models/models.user")

exports.createUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;

    try {
        const newUser = await User.create({ firstName, lastName, email });
        res.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(400).json({ errorMessage: 'Failed to create user', error: error.message });
    }
};


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        console.error('Error fetching all users:', error.message);
        res.status(500).json({ errorMessage: 'Failed to fetch users', error: error.message });
    }
};


exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ errorMessage: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user by ID:', error.message);
        res.status(500).json({ errorMessage: 'Failed to fetch user', error: error.message });
    }
};


exports.updateUserById = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, email }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ errorMessage: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        console.error('Error updating user by ID:', error.message);
        res.status(400).json({ errorMessage: 'Failed to update user', error: error.message });
    }
};


exports.deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ errorMessage: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        console.error('Error deleting user by ID:', error.message);
        res.status(500).json({ errorMessage: 'Failed to delete user', error: error.message });
    }
};
