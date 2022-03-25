const { User } = require("../models");

module.exports = {
    fetchUserData: async (req, res) => {
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
    
    submitUser: async (req, res) => {
        const body = req.body
        try {
            const data = await User.create({
                name: body.name,
                dateOfBirth: body.dateOfBirth
            })
          res.status(200).json({
            status: "Success",
            message: "User Submited",
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