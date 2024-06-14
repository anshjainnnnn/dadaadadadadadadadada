const authService = require("../Servies/login");

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password);
        res.status(200).json({ token });
    } catch (error) {
        console.error("Error in login:", error.message);
        res.status(401).json({ message: "Invalid credentials" });
    }
}

async function refreshToken(req, res) {
    try {
        const { oldToken } = req.body;
        const newToken = await authService.refreshToken(oldToken);
        res.status(200).json({ token: newToken });
    } catch (error) {
        console.error("Error in refreshToken:", error.message);
        res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = { login, refreshToken };
