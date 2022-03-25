const { User, Zodiac } = require("../models");

module.exports = {
    getZodiac: async (req, res) => {
        try {
            const data = await User.findAll({})
            res.status(200).json({
                status: "Success",
                message: "User Data Fetched",
                result: data,
            });
        } catch (error) {
            res.status(500).json({
                status: "Failed",
                message: "Internal Server Error"
            });
        }
    },
}