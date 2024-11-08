# TicTacToe

Tic Tac Toe, también conocido como "Tres en Línea", es un juego de mesa simple y popular que se juega entre dos jugadores. El objetivo del juego es ser el primero en alinear tres de sus símbolos en una fila, ya sea horizontal, vertical o diagonalmente. Aquí están los aspectos clave del juego:

**Tablero:** El juego se juega en una cuadrícula de 3x3, que consta de 9 celdas.

**Símbolos:** Un jugador utiliza el símbolo "X" y el otro utiliza "O". Los jugadores alternan turnos para colocar su símbolo en una celda vacía del tablero.

**Ganador:** El primer jugador que logra alinear tres de sus símbolos en línea (horizontal, vertical o diagonal) gana la partida.

**Empate:** Si todas las celdas del tablero están llenas y ningún jugador ha alineado tres símbolos, el juego termina en empate.

## INDEX.JS

Este código es una aplicación de servidor web construida con **Node.js** y **Express**, que utiliza **Socket.IO** para habilitar la comunicación en tiempo real entre los clientes y el servidor.

**Configuración del Servidor:** Se establece un servidor HTTP utilizando Express y se configura Socket.IO para manejar conexiones en tiempo real.

**Manejo de Salas de Juego:**

Permite a los jugadores crear y unirse a salas de juego.
Cada sala puede tener hasta dos jugadores.
Cuando una sala se llena, se emite un evento para iniciar el juego.

**Gestión de Jugadores:**

Los jugadores pueden unirse a una sala, salir de ella, o ser desconectados.
Si una sala queda vacía, se elimina automáticamente.

**Juego y Movimiento:**

Se implementa la lógica para gestionar el estado del juego, incluyendo el movimiento de los jugadores y el seguimiento de sus acciones.
Se mantiene un registro de los jugadores en una partida activa.

**Chat en Tiempo Real:**

Incluye un sistema de chat donde los jugadores pueden enviar mensajes que son transmitidos a todos los clientes conectados.

**Interacción con el Cliente:**

El servidor emite eventos para actualizar a los clientes sobre el estado de las salas, el inicio del juego y los movimientos de los jugadores.

## INDEX.HTML

**Estructura HTML:** El código HTML define la estructura de la interfaz del juego, que incluye un menú, un área para mostrar las reglas del juego, un área para ingresar el nombre del jugador, botones para crear o unirse a salas, y la cuadrícula del juego.

**Reglas del Juego:** Se presentan las reglas básicas del juego en un formato claro y accesible para los jugadores.

**Interacción del Jugador:** Los jugadores pueden introducir su nombre, buscar un oponente, crear o unirse a salas de juego, y enviar mensajes a través de un chat.

**Conexión en Tiempo Real:** Utiliza Socket.IO para permitir la comunicación en tiempo real entre los jugadores. Esto incluye la búsqueda de oponentes, la gestión de salas, y la sincronización de movimientos en el juego.

**Lógica del Juego:** El código incluye la lógica para manejar los movimientos de los jugadores, verificar si hay un ganador o un empate, y actualizar la interfaz en consecuencia.

**Actualización de la Interfaz:** La interfaz se actualiza dinámicamente en función de las acciones de los jugadores, mostrando quién es el oponente, quién tiene el turno, y los movimientos realizados en la cuadrícula.

## INTERFAZ
![image](https://github.com/user-attachments/assets/9b62d677-789d-4a54-a5fe-783b1b1225bc)

**Función "Buscar Partida"**
![image](https://github.com/user-attachments/assets/275c049c-2ec7-4a34-ab6c-3e7be96d67f7)

**Función "Salas"**
![image](https://github.com/user-attachments/assets/a0937c76-0b21-48c2-8a9b-3383689a7a8d)

**Función "Reglas del juego"**
![image](https://github.com/user-attachments/assets/f4be363f-d25c-4743-bbb8-d952a4c77275)

**Juego Iniciado**
![image](https://github.com/user-attachments/assets/2ab22e83-d700-4d9c-90d4-3279c9fe2d79)

**Chat**

![image](https://github.com/user-attachments/assets/c49c1b80-9cbf-4f1a-a7f7-c6a7c73691c9)

## INSTALACIÓN Y EJECUCIÓN
```bash
nodemon index
```





