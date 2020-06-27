
const router = require("express").Router();

// router.route('/api')
//     .get((req,res) => res.json({key: "value"}))

// router.route('/')
//     .get((req,res) => res.send("hi!"))

module.exports = function (io) {
    // console.log("io called")
    // //Socket.IO
    // io.on('connection', function (socket) {
    //     console.log('User has connected to Index');
    //     //ON Events
    //     socket.on('admin', function () {
    //         console.log('Successful Socket Test');
    //     });

    //     //End ON Events
    // });
    return router;
};