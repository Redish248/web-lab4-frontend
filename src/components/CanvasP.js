export function drawCanvas(refs, r) {
    let canvas = refs.canvas;
    let ctx = canvas.getContext("2d");
    //очистка
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //треугольник
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(150, 85);
    ctx.lineTo(20,150);
    ctx.lineTo(150, 150);
    ctx.closePath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();

    //прямоугольник
    ctx.beginPath();
    ctx.rect(150, 150, 65, 130);
    ctx.closePath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();

    //сектор
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 130, Math.PI*3/2, 0, false);
    ctx.closePath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();

    //отрисовка осей
    ctx.beginPath();
    ctx.font = "12px Verdana";
    ctx.moveTo(150, 0); ctx.lineTo(150, 300);
    ctx.moveTo(150, 0); ctx.lineTo(145, 12);
    ctx.moveTo(150, 0); ctx.lineTo(155, 12);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.fillText("Y", 160, 10);
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    ctx.moveTo(300, 150);
    ctx.lineTo(288, 145);
    ctx.moveTo(300, 150);
    ctx.lineTo(288, 155);
    ctx.fillText("X", 290, 135);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.stroke();

    //деления X
    ctx.beginPath();
    ctx.moveTo(145, 20);
    ctx.lineTo(155, 20);
    ctx.moveTo(145, 85);
    ctx.lineTo(155, 85);
    ctx.moveTo(145, 215);
    ctx.lineTo(155, 215);
    ctx.moveTo(145, 280);
    ctx.lineTo(155, 280);
    if (r === 0){
        ctx.fillText("R", 160, 25);
        ctx.fillText("R/2", 160, 90);
        ctx.fillText("-R/2", 160, 220);
        ctx.fillText("-R", 160, 285);
    } else {
        ctx.fillText(r, 160, 25);
        ctx.fillText((r / 2), 160, 90);
        ctx.fillText(-(r / 2), 160, 220);
        ctx.fillText(-r, 160, 285);
    }

    //деления Y
    ctx.moveTo(20, 145);
    ctx.lineTo(20, 155);
    ctx.moveTo(85, 145);
    ctx.lineTo(85, 155);
    ctx.moveTo(215, 145);
    ctx.lineTo(215, 155);
    ctx.moveTo(280, 145);
    ctx.lineTo(280, 155);
    if (r===0){
        ctx.fillText("-R", 12, 140);
        ctx.fillText("-R/2", 70, 140);
        ctx.fillText("R/2", 205, 140);
        ctx.fillText("R", 275, 140);
    } else {
        ctx.fillText(-r, 12, 140);
        ctx.fillText(-(r / 2), 70, 140);
        ctx.fillText((r / 2), 205, 140);
        ctx.fillText(r, 275, 140);
    }

    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.stroke();
}

export function drawAllPoints(refs,points,r) {
    drawCanvas(refs,r);
    points.forEach(function(item) {
        if (item.r === r ) {
            drawPoint(refs, item.x, item.y, r);
        }
})
}



export function drawPoint(refs,x,y,r){
    let color;
    let canvas = refs.canvas;
    let ctx = canvas.getContext("2d");
    if (isArea(x,y,r)) {
        color = 'green';
    } else {
        color = 'red';
    }
    ctx.beginPath();
    ctx.arc(150+x*130/r,150-y*130/r,2,0,2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function isArea(x, y, r) {
    if (
        ((x <= 0) && (y >= 0) && (y <= (r+x)/2)) ||
        ((x >= 0) && (y >= 0) && ((x * x + y * y) <= (r * r ))) ||
        ((x >= 0) && (y <= 0) && (x <= r/2) && (y >= -r))
    ) {
        return true;
    }
    return false;

}


    export function clickCanvas(refs, r) {
        let canvas = refs.canvas;
        let br = canvas.getBoundingClientRect();
        let left = br.left;
        let top = br.top;
        let event = window.event;
        let x = event.clientX - left;
        let y = event.clientY - top;
        let size = canvas.height;
        if (r > 0) {
            x = Math.round((x - size / 2) * r * 10 / 2 / 65) / 10;
            y = Math.round((-y + size / 2) * r * 10 / 2 / 65) / 10;
            drawCanvas(refs,r);
            document.getElementById("X").value = x;
            document.getElementById("Y").value = y;
            drawPoint(refs,x, y, r);
            document.getElementById('pointButton').click();
        }
    }


