const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().
    then(() => {
        console.log("connection successfull");
    }).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allchats =
    [
        {
            from: "ludhiana",
            to: "bihar",
            msg: "i am comming bihar",
            created_at: new Date()
        },
        {
            from: "punjab",
            to: "delhi",
            msg: "i am comming delhi",
            created_at: new Date()
        },
        {
            from: "mumbai",
            to: "up",
            msg: "i am comming up",
            created_at: new Date()
        },
        {
            from: "jammu",
            to: "bihar",
            msg: "i am comming bihar",
            created_at: new Date()
        },
        {
            from: "kanada",
            to: "punjab",
            msg: "i am comming punjab",
            created_at: new Date()
        },
        {
            from: "jharkhand",
            to: "ambala",
            msg: "i am comming ambala",
            created_at: new Date()
        },

    ]
Chat.insertMany(allchats);
