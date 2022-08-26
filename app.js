let turnon = document.getElementById ('turnOn');
let turnoff = document.getElementById ('turnOff');
let Lamp = document.getElementById ('lamp');
let icon = document.getElementById ('refresh');

function isLampSmash () {
    return Lamp.src.indexOf ('quebrada') > -1           /* indexOf --> é um metodo onde faz uma varredura de string, ou seja ele procura se contem a palavra quebrada dentro do "src" */
}                                                       /* -1 --> se o indexOf encontrar a palavra "quebrada" ele traz um numero maior que -1 e se não encontrar a palavra "quebrada" ele traz o proprio -1 */

function lampOn () {
    if (!isLampSmash () ) {
        Lamp.src = 'assets/ligada.jpg';        
    } else alert("Lâmpada quebrada!! NÃO VAI LIGAR...")    
}

function lampOff () {
    if (!isLampSmash () ) {
        Lamp.src = 'assets/desligada.jpg';
    } else alert('Lâmpada quebrada!! NÃO VAI DESLIGAR...')   
}

function lampSmash () {
    Lamp.src = 'assets/quebrada.jpg';    
}

function atualizar () {
    location.reload();
}

turnon.addEventListener ('click', lampOn);
turnoff.addEventListener ('click', lampOff);
Lamp.addEventListener ('mouseover', lampOn);
Lamp.addEventListener ('mouseleave', lampOff);
Lamp.addEventListener ('dblclick', lampSmash)
icon.addEventListener ('click', atualizar)
