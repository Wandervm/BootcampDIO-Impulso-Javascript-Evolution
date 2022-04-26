let clua = 'Cavaleiro da Lua';
let sonic = 'Sonic';
let vikings = 'Vikings: Valhalla';
let ainda = 'Ainda estou aqui';
let sem = 'Sem saida';
let encanto = 'Encanto';




document.getElementById("c0").onclick = function(){
    document.getElementById("txt").innerHTML = clua;
    document.getElementById("sinopse").innerHTML = 'Em Cavaleiro da Lua, durante um trabalho sujo, o mercenário Marc Spector (Oscar Isaac) sofre um acidente e acaba sendo abandonado por seus comparsas, ficando à beira da morte. Ele é, então, resgatado e levado para um templo egípcio, onde o deus da lua, Khonshu, lhe oferece uma segunda chance de viver em troca do seu corpo como hospedeiro.';
    document.getElementById("bd").style.backgroundImage = "url('img/cf00.jpg')";
}

document.getElementById("c1").onclick = function(){
    document.getElementById("txt").innerHTML = sonic;
    document.getElementById("sinopse").innerHTML = 'Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.';
    document.getElementById("bd").style.backgroundImage = "url('img/ft01.jpg')";
}

document.getElementById("c2").onclick = function(){
    document.getElementById("txt").innerHTML = vikings;
    document.getElementById("sinopse").innerHTML = 'Quanto ao enredo de Vikings: Valhalla, este se passa após a morte do rei Eduardo, o Confessor (filho de Æthelred, o Despreparado e Emma da Normandia), quando três senhores reivindicam o trono inglês, entre os quais Harald Hardrada.';
    document.getElementById("bd").style.backgroundImage = "url('img/ft02.jpg')";
}

document.getElementById("c3").onclick = function(){
    document.getElementById("txt").innerHTML = ainda;
    document.getElementById("sinopse").innerHTML = 'Uma adolescente perde o amor da sua vida em um trágico acidente. Arrasada, a jovem começa a achar que o rapaz está se comunicando com ela do além.';
    document.getElementById("bd").style.backgroundImage = "url('img/ft03.jpg')";
}

document.getElementById("c4").onclick = function(){
    document.getElementById("txt").innerHTML = sem;
    document.getElementById("sinopse").innerHTML = 'A vida de Nathan vira de cabeça para baixo quando ele encontra sua foto em um site de crianças desaparecidas. O jovem parte em busca de sua verdadeira identidade com a ajuda da amiga Karen. Mas o caminho não será fácil, pois a dupla passará a ser perseguida e precisará correr para salvar suas vidas.';
    document.getElementById("bd").style.backgroundImage = "url('img/ft04.jpg')";
}

document.getElementById("c5").onclick = function(){
    document.getElementById("txt").innerHTML = encanto;
    document.getElementById("sinopse").innerHTML = 'Encanto da Walt Disney Animation Studios conta a história dos Madrigal, uma família extraordinária que vive escondida nas montanhas da Colômbia, em uma casa mágica, em uma cidade vibrante, em um lugar maravilhoso conhecido como um Encanto. A magia deste Encanto abençoou todos os meninos e meninas da família com um dom único, desde superforça até o poder de curar.';
    document.getElementById("bd").style.backgroundImage = "url('img/ft05.jpg')";
}
