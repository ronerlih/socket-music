

module.exports = function (io) {

	io.on("connection", (socket) => {
        console.log("New client connected: ", socket.client.id);
        console.log(Object.keys(socket.nsp.connected))
		socket.on("canvas", (data, fn) => {
            console.log()
            const colorHash = stringToColor(socket.client.id)
            socket.broadcast.emit('canvas', {position: data, color: colorHash})
			fn({position: data, color: colorHash});
		});
		socket.on("disconnect", () => {
			console.log(Object.keys(socket.nsp.connected));

			console.log("Client disconnected");
		});
	});
};
// util func, client string to color
function stringToColor(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var Color = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      Color += ('00' + value.toString(16)).substr(-2);
    }
    return Color;
  }