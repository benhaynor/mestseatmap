function f(b,a,d){this.b=b;this.d=a;this.c=d;this.a=null;g(this);var c=this;this.b.addEventListener("click",function(){c.a?alert("This seat is already occupied by "+c.a):(c.a=prompt("Enter the name of the passenger for this seat:"),g(c))},!1)}function g(b){var a=["seat",b.c];b.a&&a.push("occupied");b.b.className=a.join(" ")}var j=["a","b","c","d"];function k(b){var a=document.createElement("div");b.appendChild(a);return a}
window.init=function(){for(var b=document.getElementById("seatmap"),a=0,d,c=0;70>c;++c){var h=j[c%4];if("a"==h){d=++a;var e=k(b);e.className="row "+(5>=d?"firstClass":"economyClass");var i=k(e);i.innerHTML=d;i.className="rowNumber";d=e}e=k(d);new f(e,a,h)}};