const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("DB Connect Successful")).catch((error) => {
        console.log("DB Connnect Failed");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;