
let tt = document.getElementById('tt');
let out = document.getElementById('void');
let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let t3 = document.getElementById('t3');
let t4 = document.getElementById('t4');
let t5 = document.getElementById('t5');
let t6 = document.getElementById('t6');
let t7 = document.getElementById('t7');
let t8 = document.getElementById('t8');
let t9 = document.getElementById('t9');

let cv = document.getElementById('cv');
let trav = document.getElementById('trav');

tt.onclick = function(){
let num1 = 0;
out.innerHTML += num1;

 }
 t1.onclick = function(){
let num2 = 1;
out.innerHTML += num2;
  }

   t2.onclick = function(){
let num2 = 2;
out.innerHTML += num2;
  }
   t3.onclick = function(){
let num4 = 3;
out.innerHTML += num4;
  }
   t4.onclick = function(){
let num4 = 4;
out.innerHTML += num4;
  }
   t5.onclick = function(){
let num5 = 5;
out.innerHTML += num5;
  }
    t6.onclick = function(){
let num6 = 6;
out.innerHTML += num6;
  }

    t7.onclick = function(){
let num7 = 7;
out.innerHTML += num7;
  }
   t8.onclick = function(){
let num8 = 8;
out.innerHTML += num8;
  }
   t9.onclick = function(){
let num9 = 9;
out.innerHTML += num9;
  }
                //знаки

   tr.onclick = function(){
let numr = "+";
out.innerHTML += numr;
  }
    tg.onclick = function(){
let numg = "-" ;
out.innerHTML += numg;
  }
    t.onclick = function(){
let num7 = "/";
out.innerHTML += num7;
  }
   tumn.onclick = function(){
let num8 = "*";
out.innerHTML += num8;
  }

   cv.onclick = function(){
let num9 = "";
out.innerHTML = num9;
  }

    trav.onclick = function(){
let nu = out.innerHTML ;
if (nu) {
    out.innerHTML=eval(nu);

    }
}



