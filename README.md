# TicTacToe

##index.js
Este código es una aplicación de servidor web construida con Node.js y Express, que utiliza Socket.IO para habilitar la comunicación en tiempo real entre los clientes y el servidor. Aquí hay un resumen de sus principales características:

Configuración del Servidor: Se establece un servidor HTTP utilizando Express y se configura Socket.IO para manejar conexiones en tiempo real.

Manejo de Salas de Juego:

Permite a los jugadores crear y unirse a salas de juego.
Cada sala puede tener hasta dos jugadores.
Cuando una sala se llena, se emite un evento para iniciar el juego.
Gestión de Jugadores:

Los jugadores pueden unirse a una sala, salir de ella, o ser desconectados.
Si una sala queda vacía, se elimina automáticamente.
Juego y Movimiento:

Se implementa la lógica para gestionar el estado del juego, incluyendo el movimiento de los jugadores y el seguimiento de sus acciones.
Se mantiene un registro de los jugadores en una partida activa.
Chat en Tiempo Real:

Incluye un sistema de chat donde los jugadores pueden enviar mensajes que son transmitidos a todos los clientes conectados.
Interacción con el Cliente:

El servidor emite eventos para actualizar a los clientes sobre el estado de las salas, el inicio del juego y los movimientos de los jugadores.
