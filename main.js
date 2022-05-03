function setup() {
    canvas = createCanvas(900, 600);
}

x = 0;
y = 0;
draw_circle = "";
draw_square = "";
draw_rectangle = "";
square_size = Math.floor(Math.random() * 150)
rectangle_width = Math.floor(Math.random() * 350);
rectangle_height = Math.floor(Math.random() * 200);

var SpeechRecognition = window.webkitSpeechRecognition;
var recogniton = new SpeechRecognition;

function start() {
    
    square_size = Math.floor(Math.random() * 150)
    rectangle_width = Math.floor(Math.random() * 300);
    rectangle_height = Math.floor(Math.random() * 150);

    document.getElementById("status").innerHTML = "Syestem is lisenting you can speak";
    recogniton.start();
}

recogniton.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("status").innerHTML = "Speech has been recognized as " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started Drawing Circle";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started Drawing Rectangle";
        draw_rectangle = "set";
    }
    if (content == "square") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started Drawing Square";
        draw_square = "set";
    }
;}

function draw() {
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "CIRCLE IS DRAWN!!!";
        draw_circle = "";
    }

    if (draw_rectangle == "set") {
        rect(x, y, rectangle_width, rectangle_height);
        document.getElementById("status").innerHTML = "RECTANGLE IS DRAWN!!!";
        draw_rectangle = "";
    }

    
    if (draw_square == "set") {
        rect(x, y, square_size, square_size);
        document.getElementById("status").innerHTML = "SQUARE IS DRAWN!!!";
        draw_square = "";
    }
}