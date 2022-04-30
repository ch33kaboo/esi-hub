const { default: mongoose } = require("mongoose")

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.db_connect)
        console.log('DB connected');

    } catch (error) {
        console.log('could not connect to DB');
    }
}

module.exports = connectDB