(function(j,r){var z=S,l=j();while(!![]){try{var M=parseInt(z(0x1db))/0x1+-parseInt(z(0x1f7))/0x2+-parseInt(z(0x1f1))/0x3*(-parseInt(z(0x1e0))/0x4)+-parseInt(z(0x1e1))/0x5+-parseInt(z(0x1ea))/0x6+parseInt(z(0x1f2))/0x7*(parseInt(z(0x1f0))/0x8)+-parseInt(z(0x1ee))/0x9*(-parseInt(z(0x1fa))/0xa);if(M===r)break;else l['push'](l['shift']());}catch(s){l['push'](l['shift']());}}}(p,0x346f5));function Asteroid(j,l){var Y=S;j?this[Y(0x1e8)]=j[Y(0x1d9)]():this[Y(0x1e8)]=createVector(random(width),random(height));l?this['r']=l*0.5:this['r']=random(0xf,0x32);this[Y(0x1e2)]=p5[Y(0x1d6)][Y(0x1ed)](),this[Y(0x1f6)]=floor(random(0x5,0xf)),this[Y(0x1e5)]=[];for(var M=0x0;M<this[Y(0x1f6)];M++){this[Y(0x1e5)][M]=random(-this['r']*0.5,this['r']*0.5);}this[Y(0x1de)]=function(){var O=Y;this[O(0x1e8)][O(0x1e9)](this[O(0x1e2)]);},this['render']=function(){var e=Y;push(),stroke(0xff),noFill(),translate(this[e(0x1e8)]['x'],this[e(0x1e8)]['y']),beginShape();for(var s=0x0;s<this[e(0x1f6)];s++){var v=map(s,0x0,this['total'],0x0,TWO_PI),Z=this['r']+this[e(0x1e5)][s],n=Z*cos(v),f=Z*sin(v);vertex(n,f);}endShape(CLOSE),pop();},this[Y(0x1f3)]=function(){var K=Y,s=[];return s[0x0]=new Asteroid(this[K(0x1e8)],this['r']),s[0x1]=new Asteroid(this[K(0x1e8)],this['r']),s;},this[Y(0x1d5)]=function(){var X=Y;if(this[X(0x1e8)]['x']>width+this['r'])this[X(0x1e8)]['x']=-this['r'];else this[X(0x1e8)]['x']<-this['r']&&(this[X(0x1e8)]['x']=width+this['r']);if(this[X(0x1e8)]['y']>height+this['r'])this[X(0x1e8)]['y']=-this['r'];else this[X(0x1e8)]['y']<-this['r']&&(this[X(0x1e8)]['y']=height+this['r']);};}function Laser(j,r){var R=S;this['pos']=createVector(j['x'],j['y']),this[R(0x1e2)]=p5[R(0x1d6)][R(0x1f9)](r),this[R(0x1e2)]['mult'](0xa),this[R(0x1de)]=function(){var b=R;this[b(0x1e8)][b(0x1e9)](this[b(0x1e2)]);},this[R(0x1ef)]=function(){var P=R;push(),stroke(0xff),strokeWeight(0x4),point(this['pos']['x'],this[P(0x1e8)]['y']),pop();},this[R(0x1ec)]=function(l){var T=R,M=dist(this[T(0x1e8)]['x'],this[T(0x1e8)]['y'],l[T(0x1e8)]['x'],l[T(0x1e8)]['y']);return M<l['r']?!![]:![];},this[R(0x1f4)]=function(){var h=R;if(this['pos']['x']>width||this[h(0x1e8)]['x']<0x0)return!![];if(this[h(0x1e8)]['y']>height||this['pos']['y']<0x0)return!![];return![];};}function Ship(){var J=S;this[J(0x1e8)]=createVector(width/0x2,height/0x2),this['r']=0x14,this[J(0x1df)]=0x0,this['rotation']=0x0,this[J(0x1e2)]=createVector(0x0,0x0),this[J(0x1f8)]=![],this['boosting']=function(j){var i=J;this[i(0x1f8)]=j;},this['update']=function(){var C=J;this[C(0x1f8)]&&this[C(0x1e6)](),this[C(0x1e8)][C(0x1e9)](this[C(0x1e2)]),this['vel'][C(0x1e3)](0.99);},this[J(0x1e6)]=function(){var c=J,j=p5[c(0x1d6)][c(0x1f9)](this[c(0x1df)]);j[c(0x1e3)](0.1),this[c(0x1e2)][c(0x1e9)](j);},this[J(0x1ec)]=function(j){var d=J,r=dist(this[d(0x1e8)]['x'],this[d(0x1e8)]['y'],j[d(0x1e8)]['x'],j[d(0x1e8)]['y']);return r<this['r']+j['r']?!![]:![];},this[J(0x1ef)]=function(){var D=J;push(),translate(this[D(0x1e8)]['x'],this[D(0x1e8)]['y']),rotate(this[D(0x1df)]+PI/0x2),fill(0x0),stroke(0xff),triangle(-this['r'],this['r'],this['r'],this['r'],0x0,-this['r']),pop();},this[J(0x1d5)]=function(){var W=J;if(this[W(0x1e8)]['x']>width+this['r'])this[W(0x1e8)]['x']=-this['r'];else this[W(0x1e8)]['x']<-this['r']&&(this[W(0x1e8)]['x']=width+this['r']);if(this[W(0x1e8)]['y']>height+this['r'])this[W(0x1e8)]['y']=-this['r'];else this[W(0x1e8)]['y']<-this['r']&&(this[W(0x1e8)]['y']=height+this['r']);},this[J(0x1f5)]=function(j){var m=J;this[m(0x1d7)]=j;},this[J(0x1e4)]=function(){var H=J;this[H(0x1df)]+=this[H(0x1d7)];};}var ship,asteroids=[],lasers=[];function S(j,r){var l=p();return S=function(M,s){M=M-0x1d5;var v=l[M];return v;},S(j,r);}function setup(){createCanvas(windowWidth,windowHeight),ship=new Ship();for(var j=0x0;j<0x5;j++){asteroids['push'](new Asteroid());}}function draw(){var o=S;background(0x0);for(var r=0x0;r<asteroids[o(0x1d8)];r++){ship[o(0x1ec)](asteroids[r])&&console['log'](o(0x1eb)),asteroids[r][o(0x1ef)](),asteroids[r][o(0x1de)](),asteroids[r]['edges']();}for(var r=lasers[o(0x1d8)]-0x1;r>=0x0;r--){lasers[r]['render'](),lasers[r][o(0x1de)]();if(lasers[r][o(0x1f4)]())lasers['splice'](r,0x1);else for(var l=asteroids[o(0x1d8)]-0x1;l>=0x0;l--){if(lasers[r][o(0x1ec)](asteroids[l])){if(asteroids[l]['r']>0xa){var M=asteroids[l][o(0x1f3)]();asteroids=asteroids[o(0x1da)](M);}asteroids[o(0x1dd)](l,0x1),lasers['splice'](r,0x1);break;}}}console['log'](lasers[o(0x1d8)]),ship[o(0x1ef)](),ship[o(0x1e4)](),ship[o(0x1de)](),ship[o(0x1d5)]();}function keyReleased(){var G=S;ship[G(0x1f5)](0x0),ship[G(0x1dc)](![]);}function keyPressed(){var t=S;if(key=='\x20')lasers[t(0x1e7)](new Laser(ship['pos'],ship[t(0x1df)]));else{if(keyCode==RIGHT_ARROW)ship[t(0x1f5)](0.1);else{if(keyCode==LEFT_ARROW)ship['setRotation'](-0.1);else keyCode==UP_ARROW&&ship['boosting'](!![]);}}}function p(){var B=['random2D','11349irkBtf','render','280ooCFCO','1452uKQxlJ','43386oyZHDb','breakup','offscreen','setRotation','total','304190IkOoDn','isBoosting','fromAngle','2180pkmQyz','edges','Vector','rotation','length','copy','concat','298347BHQfSZ','boosting','splice','update','heading','1832IhfrUD','1920310XszYhK','vel','mult','turn','offset','boost','push','pos','add','1565502nGobtl','ooops!','hits'];p=function(){return B;};return p();}

// pseudo code for metero
// - class for meteors
//   - will need to use a forloop to push new meteors into an array 
//   class Meteor(x,y, speed){
//   constructor{
//   this.x=x
//   etc
//   }
//   
//   move{
//   - randomized x and y speed within a range
//   this.x=this.x+meteorSpeedX
//   this.y= ...
//   - what happens when they go off screen? maybe the bounce back range could be set to somethting slightly beyong the canvas size so tthey appear tto float all through space wherever but actually eventually float back 
//   }
//show{
//   push()
//   maybe use a polygon with a random number of points wihtin a range like random(5,12) 
//   and specify a starting size of random maybe 20-30, whatever the biggest size range of meteors should be
//   pop()
//   }
//   }
// - class for spaceship
//   constructor{
//   this.x=x
//   this.y=y
//   this.flyspeed=flyspeed
//   }
//   show{
//   push()
//   triangle starting in the centter of canvas and responding to key pressed function
//   pop()
//   }
//   move{
//   key pressed function called
//   }
//   else if(RIGHT_ARROW){
//   //rotate clockwise
//   //not sure exactly how to rotate it honestly
//   }
//   if(UP_ARROW){
//   //x or y position needs to continue in the direction that the ship is pointing
//   also not sure how to accomplish that, unless you just use a lot of complicated if statements with booleans that indicate what direction the ship is facing
//   }
//  / - function keyPressed{
//   if(LEFT_ARRROW){
//   //need to rotate ship counterclockwise
//   } if(SPACEBAR){
//   //shoot laser
//   // draw new bullet at spaceship.x,spaceship.y (+ or - adjustments to keep it centered)
// }
// }
// class for bullet
