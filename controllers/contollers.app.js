
exports.getAppHealth = async (req, res) => {
    res.status(200).json({ message: 'Server is healthy.' });
};
