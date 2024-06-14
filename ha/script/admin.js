const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createAdminAccount() {
    try {
        const existingAdmin = await User.findOne({ email: "admin@test.com" });

        if (!existingAdmin) {
            const newAdmin = new User({
              email: "anshjain454@gmail.com",
              name: "Ansh Jain",
              password: await bcrypt.hash("admin", 10),
              role: "admin"
            });
            await newAdmin.save();
            console.log("Admin account created successfully");
        } else {
            console.log("Admin account already exists");
        }
    } catch (error) {
        console.error("Error creating admin account:", error.message);
    }
}

module.exports = createAdminAccount;
