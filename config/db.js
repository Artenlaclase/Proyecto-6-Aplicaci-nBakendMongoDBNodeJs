const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to the database")
    } catch (error) {
        console.log(error)
        process.exit(1) // detiene la app por completo
    }
}

module.exports = connectDB