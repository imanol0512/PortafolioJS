const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

ctx.fillStyle='red';
ctx.beginPath();
ctx.ellipse(200,250,100,90,0,0,Math.PI * 2);
ctx.fill();

ctx.fillStyle='	#FCD0B4';
ctx.beginPath();
ctx.ellipse(200,190,100,75,0,0,Math.PI * 2);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.ellipse(170,185,15,25,0,0,Math.PI * 2);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.ellipse(220,185,15,25,0,0,Math.PI * 2);
ctx.fill();

ctx.fillStyle='black';
ctx.beginPath();
ctx.ellipse(170,185,5,7,0,0,Math.PI * 2);
ctx.fill();

ctx.fillStyle='black';
ctx.beginPath();
ctx.ellipse(220,185,5,7,0,0,Math.PI * 2);
ctx.fill();

ctx.fillStyle='yellow';
ctx.beginPath();
ctx.arc(199,69,30,0,Math.PI * 2);
ctx.fill();

ctx.fillStyle='#87CEEB';
ctx.beginPath();
ctx.arc(199,150,86,3.08,Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.ellipse(200,230,20,10,0,0,Math.PI * 2);
ctx.stroke();

ctx.fillStyle='black';
ctx.beginPath();
ctx.ellipse(200,285,5,7,0,0,Math.PI * 2);
ctx.fill();

ctx.fillStyle='black';
ctx.beginPath();
ctx.ellipse(200,320,5,7,0,0,Math.PI * 2);
ctx.fill();



