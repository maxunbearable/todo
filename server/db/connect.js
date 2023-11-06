// external modules import
const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("Connected to MongoDB database successfully.");
            })
            .catch((error) => {
                console.log("Error connecting to MongoDB: ", error.message);
            });
    } catch (error) {
        console.log("Database connection error: ", error.message);
    }
};

module.exports = connectDatabase;