function calcular1(){
    var k= 9000000;
    var q=parseFloat(document.getElementById('q1').value);
    var q2=parseFloat(document.getElementById('q2').value);
    var d=parseFloat(document.getElementById('d').value);

    var força= (k* q * q2)/ (d*d);

    document.getElementById('forca1').innerText = força;
    
}

function calcular2(){

    var q = parseFloat(document.getElementById('q').value);
    var v = parseFloat(document.getElementById('v').value);
    var b = parseFloat(document.getElementById('b').value);
    var sen = parseFloat(document.getElementById('sen').value);

    var forca2 = (q * v * b * sen );

    document.getElementById('forca2').innerText = forca2;
}




