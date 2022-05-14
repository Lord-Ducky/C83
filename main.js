
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;
    var newWidth = screen.width - 70;

    var height = screen.height;
    var newHeight = screen.height - 300;

    if(width < 992){
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").height = newHeight;

        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchStart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        console.log("my_touchstart");
        last_position_of_x = e.touches[0].clientX - canvasoffsetLeft;
        last_position_of_y = e.touches[0].clientY - canvasoffsetTop;
    }
    
    canvas.addEventListener("touchMove", my_touchMove);
    function my_touchMove(e)
    {
        console.log("my_touchMove");
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

