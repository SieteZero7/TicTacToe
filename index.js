const express=require("express")
const app=express()

const path=require("path")
const http=require("http")
const {Server}=require("socket.io")


const server=http.createServer(app)

const io=new Server(server)
app.use(express.static(path.resolve("")))

let arr=[]
let playingArray=[]
let rooms = {}


io.on("connection",(socket)=>{

    socket.on("createRoom", (roomName) => {
        if (!rooms[roomName]) {
            rooms[roomName] = { players: [], occupied: false }; // Crear nueva sala
            socket.join(roomName); // Unir al socket a la sala
            rooms[roomName].players.push(socket.id); // Agregar el jugador a la sala
            io.emit("roomsList", Object.keys(rooms)); // Emitir lista de salas
            socket.emit("joinedRoom", roomName); // Notificación de unión exitosa
            socket.emit("waiting", roomName); // Notificación de espera
        }
    });

   

    // Evento para unirse a una sala
    socket.on("joinRoom", (roomName, playerName) => {
        if (rooms[roomName] && rooms[roomName].players.length < 2) {
            rooms[roomName].players.push(socket.id); // Agregar jugador a la sala
            socket.join(roomName); // Unir al socket a la sala
            
            // Emitir lista de salas actualizada
            io.emit("roomsList", Object.keys(rooms)); 
            socket.emit("joinedRoom", roomName); // Notificación de unión exitosa
    
            // Si la sala tiene dos jugadores, iniciar el juego
            if (rooms[roomName].players.length === 2) {
                io.to(roomName).emit("startGame", roomName); // Notificar a los jugadores que el juego comienza
            }
        } else {
            socket.emit("error", "Sala no existe o está ocupada"); // Manejo de error
        }
    });
    // Evento para salir de la sala
    socket.on("leaveRoom", (roomName) => {
        if (rooms[roomName]) {
            rooms[roomName].players = rooms[roomName].players.filter(player => player !== socket.id);
            socket.leave(roomName); // Dejar la sala
            if (rooms[roomName].players.length === 0) {
                delete rooms[roomName]; // Eliminar la sala si no hay jugadores
            }
            io.emit("roomsList", Object.keys(rooms)); // Emitir lista de salas actualizada
        }
    });

    // Manejo de desconexión
    socket.on("disconnect", () => {
        for (const roomName in rooms) {
            rooms[roomName].players = rooms[roomName].players.filter(player => player !== socket.id);
            if (rooms[roomName].players.length === 0) {
                delete rooms[roomName]; // Eliminar la sala si no hay jugadores
            }
        }
        io.emit("roomsList", Object.keys(rooms)); // Emitir lista de salas actualizada
    });

    //Evento para busqueda de partida
    socket.on("find",(e)=>{

        if(e.name!=null){

            arr.push(e.name)

            if(arr.length>=2){
                let p1obj={
                    p1name:arr[0],
                    p1value:"X",
                    p1move:""
                }
                let p2obj={
                    p2name:arr[1],
                    p2value:"O",
                    p2move:""
                }

                let obj={
                    p1:p1obj,
                    p2:p2obj,
                    sum:1
                }
                playingArray.push(obj)

                arr.splice(0,2)

                io.emit("find",{allPlayers:playingArray})

            }

        }

    })

    //Evento de inicio de juego
    socket.on("playing",(e)=>{
        if(e.value=="X"){
            let objToChange=playingArray.find(obj=>obj.p1.p1name===e.name)

            objToChange.p1.p1move=e.id
            objToChange.sum++
        }
        else if(e.value=="O"){
            let objToChange=playingArray.find(obj=>obj.p2.p2name===e.name)

            objToChange.p2.p2move=e.id
            objToChange.sum++
        }

        io.emit("playing",{allPlayers:playingArray})

    })

    socket.on("gameOver",(e)=>{
        playingArray=playingArray.filter(obj=>obj.p1.p1name!==e.name)
        console.log(playingArray)
        console.log("lol")
    })

    //Evento para el chat
    socket.on('chatMessage', (data) => {
        // Broadcast the message to all clients
        io.emit('chatMessage', data);
    });

})


app.get("/",(req,res)=>{
    return res.sendFile("index.html")
})

server.listen(3000,()=>{
    console.log("port connected to 3000")
})