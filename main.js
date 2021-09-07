function preload() {
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 630, 480);
    tint(tint_color);
    fill(255, 0, 0);
     stroke(255, 0, 0); 
     circle(20, 20, 40);
     
     fill(0, 255, 0);
     stroke(0, 255, 0); 
     rect(35, 10, 550, 20);
     
     fill(255, 0, 0);
     stroke(255, 0, 0); 
     circle(600, 20, 40);

     fill(0, 255, 0);
     stroke(0, 255, 0); 
     rect(10, 40, 20, 450);

     fill(255, 0, 0);
     stroke(255, 0, 0); 
     circle(20, 460, 40);

     fill(0, 255, 0);
     stroke(0, 255, 0); 
     rect(35, 450, 550, 20);
     
     fill(255, 0, 0);
     stroke(255, 0, 0); 
     circle(600, 450, 40);

     fill(0, 255, 0);
     stroke(0, 255, 0); 
     rect(600, 40, 20, 450);

}

function take_snapshot(){
    save('tint_image.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}