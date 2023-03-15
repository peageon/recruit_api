const mongoose = require('mongoose');

const connect = async () => {
    try {
        const connected = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            'MongoDB Connected',
            connected.connection.host,
            connected.connection.name,
        );
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connect;