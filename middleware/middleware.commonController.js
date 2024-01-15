const logRequest = (req, res, next) => {
    const timestamp = new Date().toLocaleString();
    const endpoint = req.url;

    console.log(`[${timestamp}] Requested endpoint: ${endpoint}`);

    next();
};

module.exports = { logRequest };

