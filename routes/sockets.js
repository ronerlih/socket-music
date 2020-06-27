module.exports = function (io) {
	io.on("connection", (socket) => {
		console.log("New client connected");
        console.log(Object.keys(socket.nsp.connected));
        // initial "calibration msg"
		socket.emit("canvas", { x: 200, y: 200 });
		socket.on("canvas", (data, fn) => {
			console.log(data);
			socket.emit("canvas", data);
			fn(data);
		});
		socket.on("disconnect", () => {
			console.log(Object.keys(socket.nsp.connected));

			console.log("Client disconnected");
		});
	});
};
