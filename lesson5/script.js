function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var dell = document.getElementById('dell');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    function jnjelSms(j) {
        socket.emit("uzumem jnjem");
    }
       socket.on("jnjeq dzer tegery", function () {
       
       
    })
    dell.onclick = jnjelSms;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;