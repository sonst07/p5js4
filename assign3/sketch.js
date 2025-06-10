var moveHairX = 110;
var moveHairY = -50;

var noseSize = 1.5;
var noseX = -5;
var noseY = 20;

var leftEyeMove = -105;

var randomColor;

var random_r;
var random_g;
var random_b;

var eyeCircleX = 0;
var eyeCircleY = 0;
var eyeCircleMove = 2;

var bodyOffset = 0;
var bodyDirection = 1;

var animateBody = false;
var headSwayEnabled = false;
var tongActive = false;

var tongLength = 0; 
var tongueDir = 1;       

function setup() {
  createCanvas(500, 600, WEBGL);
  // background('#658db8');
  randomColor = '#102143';
  // randomColor = color(random_r, random_g, random_b);
  
}

function draw() {

  background('#a2cfec');

  if (animateBody) {
    bodyOffset += bodyDirection * 0.5;
    if (bodyOffset > 10 || bodyOffset < -10) {
      bodyDirection *= -1;
    }
  }

  if (keyIsPressed) {
    // 방향키 움직임 처리
    if (keyCode === LEFT_ARROW) {
      eyeCircleX -= eyeCircleMove;
    } else if (keyCode === RIGHT_ARROW) {
      eyeCircleX += eyeCircleMove;
    } else if (keyCode === UP_ARROW) {
      eyeCircleY -= eyeCircleMove;
    } else if (keyCode === DOWN_ARROW) {
      eyeCircleY += eyeCircleMove;
    }

    if (key === 'e') {
      eyeCircleX = map(mouseX, 0, width, -10, 10);
      eyeCircleY = map(mouseY, 0, height, -5, 5);
    }

    // 'r' 키가 눌렸을 때 색상 변경
    // if (key === 'r') {
    //   random_r = random(0, 255);
    //   random_g = random(0, 255);
    //   random_b = random(0, 255);
    //   randomColor = color(random_r, random_g, random_b);
    // }

  }

  
  // 몸통
  fill('#262b34');
  noStroke();
  quad(-70, 100 - bodyOffset*0.3, 70, 100- bodyOffset*0.3, 250, 180 + bodyOffset*1.2, -250, 180 + bodyOffset*1.2);
  rect(-250, 180 + bodyOffset*1.2, 500, 200 + bodyOffset*1.2);
  fill('#FFFFFF');
  rect(-70, 100 + bodyOffset, 140, 250);
  fill('#f2d8c4');
  rect(-70, 60+bodyOffset, 140, 40);
  triangle(-70, 100 + bodyOffset, 70, 100 + bodyOffset, 0, 180 + bodyOffset);
  
  // 넥타이
  fill('#344774');
  quad(0, 180+bodyOffset, 24, 200+bodyOffset, 0, 240+bodyOffset, -24, 200+bodyOffset);
  quad(-3, 200, 3, 200, 20, 300, -20, 300);
  
  // 카라
  // fill('#181613');
  fill(randomColor);
  triangle(-70, 100, -110, 140, -40, 300);
  quad(-70, 140, -140, 180, -95, 300, -40, 300);
  triangle(70, 100, 110, 140, 70, 300);
  quad(70, 140, 130, 180, 95, 300, 40, 300);
  
  // 얼굴
  fill('#f8e4d0');
  rect(-110, -120, 220, 240, 20, 20, 200, 200);
  arc(0, 0, 170, 270, radians(70), radians(110));
  arc(0, 0, 200, 270, radians(100), radians(120));
  arc(0, 0, 200, 270, radians(60), radians(80));
  

  // 동글동글 눈동자
  noStroke();
  fill('#ffffff')
  ellipse(55, -6 , 45, 12);
  ellipse(55, -10 , 45, 30);
  ellipse(-55, -6 , 45, 12);
  ellipse(-55, -10 , 45, 30);


  // 눈
  noStroke();
  fill(randomColor);
  rect(42 + eyeCircleX, -21 + eyeCircleY, 19, 23, 30, 30, 200, 200);
  
  stroke('#000000');
  strokeWeight(7);
  line(75, -16, 83, -11);
  strokeWeight(3);
  line(77, -3, 83, -11);
  strokeWeight(4);
  line(77, -3, 80, -13);
  strokeWeight(2);
  line(83, -11, 87, -10);
  
  strokeWeight(1);
  // line(30, -12, 33, -6);
  line(34, -12, 33, -6);
  line(33, -12, 33, -6);
  line(32, -12, 33, -6);
  line(31, -12, 33, -6);
  
  noStroke();
  fill(randomColor);
  rect(-64 + eyeCircleX, -21 + eyeCircleY, 19, 23, 30, 30, 200, 200);
  
  stroke('#000000');
  strokeWeight(7);
  line(-75, -16, -83, -11);
  strokeWeight(3);
  line(-77, -3, -83, -11);
  strokeWeight(4);
  line(-77, -3, -80, -13);
  strokeWeight(2);
  line(-83, -11, -87, -10);
  
  strokeWeight(1);
  // line(30, -12, 33, -6);
  line(-34, -12, -33, -6);
  line(-33, -12, -33, -6);
  line(-32, -12, -33, -6);
  line(-31, -12, -33, -6);

  
    
  // 머리
  var headSway = 0;
  if (headSwayEnabled) {
    headSway = sin(frameCount * 0.07) * 2;  // 머리가 살랑거리는 각도 (3도 범위)
  }
  rotate(radians(headSway));  // 머리 전체에 sway 효과 적용
  noStroke();
  fill(randomColor);
  rotate(radians(-30));
  rect(-60, -190, 190, 60, 300);
  rect(-80, -150, 180, 60, 300, 20, 5, 5);
  rotate(radians(90));
  rect(-160, -170, 180, 80, 300, 50, 5, 5);
  rotate(radians(-60));
  stroke(randomColor);
  strokeWeight(30);
  line(30, -110, -50, -65);
  line(70, -100, 10, -70);
  noStroke();
  rotate(radians(-20));
  arc(10, -170, 140, 100, 0, 2*PI);
  rotate(radians(40));
  arc(30, -150, 130, 120, 0, 2*PI);
  rotate(radians(-20));
  rotate(radians(-headSway));  // 머리 회전 효과 복원
  

  // 귀
  fill('#f8e4d0');
  rotate(radians(-15));
  ellipse(-110, -40, 50, 80);
  rotate(radians(30));
  ellipse(110, -40, 50, 80);
  rotate(radians(-15));
  
  
  // 구렛나루
  fill(randomColor);
  triangle(-2+moveHairX, -10+moveHairY, 15+moveHairX, -10+moveHairY, 0+moveHairX, 70+moveHairY);
  triangle(+2-moveHairX, -10+moveHairY, -15-moveHairX, -10+moveHairY, 0-moveHairX, 70+moveHairY);

  
  // 눈썹
  noFill();
  rotate(radians(-10));
  stroke(randomColor);
  strokeWeight(12);
  arc(40, 0, 160, 80, PI + HALF_PI, PI + HALF_PI + radians(60));
  rotate(radians(20));
  arc(-40, 0, 160, 80, PI + HALF_PI - radians(60), PI + HALF_PI);
  rotate(radians(-10));
  
  
  // 코
  fill('#444444');
  strokeWeight(1);
  rotate(radians(55));
  arc(0+noseY+13, 0+noseY-12, 40, 10, radians(90), radians(270));
  rotate(radians(-55));
  
  

  
  
  if(tongActive) {
    tongLength += tongueDir * 0.3; 
    if (tongLength >= 10) {
      tongueDir = -1;
    } else if (tongLength <= -3) {
      tongueDir = 1; 
    }
  }


  // 혀
  noStroke();
  fill('#ffc0cb');       
  rect(-20, 77, 20, tongLength); 
  arc(-10, 77 + tongLength, 20, 20, 0, PI);

  // 혀 가운데
  stroke('#d68d84');
  strokeWeight(3);
  line(-9, 77, -10, 77 + tongLength + 1);  
    

  // 입
  noFill();
  stroke('#e28981');  
  strokeWeight(6);
  arc(0, 27, 120, 100, radians(70), radians(90+45));



  // 콧대 만들기
  noStroke();
  fill('#f8e4d0');
  translate(11, 20);
  rotate(radians(-40));
  ellipse(0, -1, 10, 26);
  rotate(radians(40));
  translate(-11, -20);
  
  stroke('#f8e4d0');
  strokeWeight(2);
  line(15, 20, 15, 40);

  
  // 눈 아이라인
  noFill();
  stroke('black');
  strokeWeight(5);
  arc(55, 10, 66, 66, radians(180+45), radians(270-20));
  arc(55, 10, 66, 67, radians(180+45), radians(270-20));
  strokeWeight(6);
  arc(55, 10, 66, 66, radians(270-20), radians(270+20));
  arc(55, 10, 66, 67, radians(270-20), radians(270+20));
  strokeWeight(7);
  arc(55, 10, 66, 66, radians(270+20), radians(270+45));

  strokeWeight(5);
  arc(-55, 10, 66, 66, radians(270+20), radians(270+47));
  arc(-55, 10, 66, 67, radians(270+20), radians(270+47));
  strokeWeight(6);
  arc(-55, 10, 66, 66, radians(270-20), radians(270+20));
  arc(-55, 10, 66, 67, radians(270-20), radians(270+20));
  strokeWeight(7);
  arc(-55, 10, 66, 66, radians(180+45), radians(270-20));

  
  // 눈 반짝임
  noStroke();
  fill('#ffffff');
  // ellipse(60, -5, 7, 11);
  // ellipse(-46, -6, 7, 10);
  
  
  
  // 선 긋기
  strokeWeight(1);
  stroke('#aaaaaa');
//   for(let a = -250; a <= 250; a += 10) {
//     line(a, -300, a, 300);
//   }
  
//   for(let a = -300; a <= 300; a += 10) {
//     line(-250, a, 250, a);
//   }
  
  // stroke('red');
  // for(let a = -250; a <= 250; a += 50) {
  //   line(a, -300, a, 300);
  // }  
  // for(let a = -300; a <= 300; a += 50) {
  //   line(-250, a, 250, a);
  // }
  
//   stroke('blue');
//   line(-250, 0, 250, 0);
//   line(0, -300, 0, 300);
  
  
}

function keyPressed() {

  if (key === 'b') {
    animateBody = !animateBody;
  }
  if (key === 'h') {
    headSwayEnabled = !headSwayEnabled;
  }
  if (key === 's') {
    saveGif('mySketch', 10);
  }
  if (key === 'r') {
    random_r = random(0, 255);
    random_g = random(0, 255);
    random_b = random(0, 255);
    randomColor = color(random_r, random_g, random_b);
  }
}

function mousePressed() {
    tongActive = !tongActive;
}