const io = require("socket.io")();

io.on("connection", (socket) => {
    socket.on("sendGameplay", (teamInfos, stage, game) => {
        io.sockets.emit("receiveGameplay", teamInfos, stage, game);
    });

    socket.on("sendCommentator", (commentatorInfos) => {
        io.sockets.emit("receiveCommentator", commentatorInfos);
    });
});

const port = 8000;
io.listen(port);
console.log("listening on port ", port);
