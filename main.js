document.getElementById('base').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Base";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Base"; }
});

document.getElementById('botoes').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Manga";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Manga"; }
});

document.getElementById('gola1').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores do Punho";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores do Punho"; }
});

document.getElementById('gola2').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Barra";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Barra"; }
});

document.getElementById('vista').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Gola";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Gola"; }
});

document.getElementById('cor1').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fff");
    document.getElementById('CB').style.backgroundColor = "#fff";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fff");
    document.getElementById('BT').style.backgroundColor = "#fff";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#fff");
    document.getElementById('ge').style.backgroundColor = "#fff";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#fff");
    document.getElementById('gi').style.backgroundColor = "#fff";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#fff");
    document.getElementById('VE').style.backgroundColor = "#fff";
  }
});

document.getElementById('cor2').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#000");
    document.getElementById('CB').style.backgroundColor = "#000";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#000");
    document.getElementById('BT').style.backgroundColor = "#000";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#000");
    document.getElementById('ge').style.backgroundColor = "#000";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#000");
    document.getElementById('gi').style.backgroundColor = "#000";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#000");
    document.getElementById('VE').style.backgroundColor = "#000";
  }
});

document.getElementById('cor3').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#013831");
    document.getElementById('CB').style.backgroundColor = "#013831";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#013831");
    document.getElementById('BT').style.backgroundColor = "#013831";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#013831");
    document.getElementById('ge').style.backgroundColor = "#013831";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#013831");
    document.getElementById('gi').style.backgroundColor = "#013831";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#013831");
    document.getElementById('VE').style.backgroundColor = "#013831";
  }
});

document.getElementById('cor4').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#65161a");
    document.getElementById('CB').style.backgroundColor = "#65161a";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#65161a");
    document.getElementById('BT').style.backgroundColor = "#65161a";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#65161a");
    document.getElementById('ge').style.backgroundColor = "#65161a";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#65161a");
    document.getElementById('gi').style.backgroundColor = "#65161a";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#65161a");
    document.getElementById('VE').style.backgroundColor = "#65161a";
  }
});

document.getElementById('cor5').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#b62536");
    document.getElementById('CB').style.backgroundColor = "#b62536";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#b62536");
    document.getElementById('BT').style.backgroundColor = "#b62536";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#b62536");
    document.getElementById('ge').style.backgroundColor = "#b62536";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#b62536");
    document.getElementById('gi').style.backgroundColor = "#b62536";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#b62536");
    document.getElementById('VE').style.backgroundColor = "#b62536";
  }
});

document.getElementById('cor6').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ed6840");
    document.getElementById('CB').style.backgroundColor = "#ed6840";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ed6840");
    document.getElementById('BT').style.backgroundColor = "#ed6840";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ed6840");
    document.getElementById('ge').style.backgroundColor = "#ed6840";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ed6840");
    document.getElementById('gi').style.backgroundColor = "#ed6840";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#ed6840");
    document.getElementById('VE').style.backgroundColor = "#ed6840";
  }
});

document.getElementById('cor7').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#e64e27");
    document.getElementById('CB').style.backgroundColor = "#e64e27";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#e64e27");
    document.getElementById('BT').style.backgroundColor = "#e64e27";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#e64e27");
    document.getElementById('ge').style.backgroundColor = "#e64e27";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#e64e27");
    document.getElementById('gi').style.backgroundColor = "#e64e27";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#e64e27");
    document.getElementById('VE').style.backgroundColor = "#e64e27";
  }
});

document.getElementById('cor8').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f8ab14");
    document.getElementById('CB').style.backgroundColor = "#f8ab14";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#f8ab14");
    document.getElementById('BT').style.backgroundColor = "#f8ab14";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#f8ab14");
    document.getElementById('ge').style.backgroundColor = "#f8ab14";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#f8ab14");
    document.getElementById('gi').style.backgroundColor = "#f8ab14";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#f8ab14");
    document.getElementById('VE').style.backgroundColor = "#f8ab14";
  }
});

document.getElementById('cor9').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ffdc1e");
    document.getElementById('CB').style.backgroundColor = "#ffdc1e";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ffdc1e");
    document.getElementById('BT').style.backgroundColor = "#ffdc1e";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ffdc1e");
    document.getElementById('ge').style.backgroundColor = "#ffdc1e";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ffdc1e");
    document.getElementById('gi').style.backgroundColor = "#ffdc1e";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#ffdc1e");
    document.getElementById('VE').style.backgroundColor = "#ffdc1e";
  }
});

document.getElementById('cor10').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#008865");
    document.getElementById('CB').style.backgroundColor = "#008865";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#008865");
    document.getElementById('BT').style.backgroundColor = "#008865";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#008865");
    document.getElementById('ge').style.backgroundColor = "#008865";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#008865");
    document.getElementById('gi').style.backgroundColor = "#008865";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#008865");
    document.getElementById('VE').style.backgroundColor = "#008865";
  }
});

document.getElementById('cor11').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#649388");
    document.getElementById('CB').style.backgroundColor = "#649388";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#649388");
    document.getElementById('BT').style.backgroundColor = "#649388";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#649388");
    document.getElementById('ge').style.backgroundColor = "#649388";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#649388");
    document.getElementById('gi').style.backgroundColor = "#649388";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#649388");
    document.getElementById('VE').style.backgroundColor = "#649388";
  }
});

document.getElementById('cor12').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#009e5d");
    document.getElementById('CB').style.backgroundColor = "#009e5d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#009e5d");
    document.getElementById('BT').style.backgroundColor = "#009e5d";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#009e5d");
    document.getElementById('ge').style.backgroundColor = "#009e5d";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#009e5d");
    document.getElementById('gi').style.backgroundColor = "#009e5d";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#009e5d");
    document.getElementById('VE').style.backgroundColor = "#009e5d";
  }
});

document.getElementById('cor13').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#028958");
    document.getElementById('CB').style.backgroundColor = "#028958";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#028958");
    document.getElementById('BT').style.backgroundColor = "#028958";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#028958");
    document.getElementById('ge').style.backgroundColor = "#028958";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#028958");
    document.getElementById('gi').style.backgroundColor = "#028958";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#028958");
    document.getElementById('VE').style.backgroundColor = "#028958";
  }
});

document.getElementById('cor14').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#314f41");
    document.getElementById('CB').style.backgroundColor = "#314f41";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#314f41");
    document.getElementById('BT').style.backgroundColor = "#314f41";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#314f41");
    document.getElementById('ge').style.backgroundColor = "#314f41";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#314f41");
    document.getElementById('gi').style.backgroundColor = "#314f41";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#314f41");
    document.getElementById('VE').style.backgroundColor = "#314f41";
  }
});

document.getElementById('cor15').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#47b6ab");
    document.getElementById('CB').style.backgroundColor = "#47b6ab";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#47b6ab");
    document.getElementById('BT').style.backgroundColor = "#47b6ab";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#47b6ab");
    document.getElementById('ge').style.backgroundColor = "#47b6ab";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#47b6ab");
    document.getElementById('gi').style.backgroundColor = "#47b6ab";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#47b6ab");
    document.getElementById('VE').style.backgroundColor = "#47b6ab";
  }
});

document.getElementById('cor16').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#829186");
    document.getElementById('CB').style.backgroundColor = "#829186";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#829186");
    document.getElementById('BT').style.backgroundColor = "#829186";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#829186");
    document.getElementById('ge').style.backgroundColor = "#829186";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#829186");
    document.getElementById('gi').style.backgroundColor = "#829186";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#829186");
    document.getElementById('VE').style.backgroundColor = "#829186";
  }
});

document.getElementById('cor17').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#007c68");
    document.getElementById('CB').style.backgroundColor = "#007c68";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#007c68");
    document.getElementById('BT').style.backgroundColor = "#007c68";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#007c68");
    document.getElementById('ge').style.backgroundColor = "#007c68";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#007c68");
    document.getElementById('gi').style.backgroundColor = "#007c68";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#007c68");
    document.getElementById('VE').style.backgroundColor = "#007c68";
  }
});

document.getElementById('cor18').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#283055");
    document.getElementById('CB').style.backgroundColor = "#283055";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#283055");
    document.getElementById('BT').style.backgroundColor = "#283055";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#283055");
    document.getElementById('ge').style.backgroundColor = "#283055";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#283055");
    document.getElementById('gi').style.backgroundColor = "#283055";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#283055");
    document.getElementById('VE').style.backgroundColor = "#283055";
  }
});

document.getElementById('cor19').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#223b7b");
    document.getElementById('CB').style.backgroundColor = "#223b7b";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#223b7b");
    document.getElementById('BT').style.backgroundColor = "#223b7b";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#223b7b");
    document.getElementById('ge').style.backgroundColor = "#223b7b";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#223b7b");
    document.getElementById('gi').style.backgroundColor = "#223b7b";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#223b7b");
    document.getElementById('VE').style.backgroundColor = "#223b7b";
  }
});

document.getElementById('cor20').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#587dbc");
    document.getElementById('CB').style.backgroundColor = "#587dbc";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#587dbc");
    document.getElementById('BT').style.backgroundColor = "#587dbc";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#587dbc");
    document.getElementById('ge').style.backgroundColor = "#587dbc";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#587dbc");
    document.getElementById('gi').style.backgroundColor = "#587dbc";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#587dbc");
    document.getElementById('VE').style.backgroundColor = "#587dbc";
  }
});

document.getElementById('cor21').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2a3c74");
    document.getElementById('CB').style.backgroundColor = "#2a3c74";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#2a3c74");
    document.getElementById('BT').style.backgroundColor = "#2a3c74";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#2a3c74");
    document.getElementById('ge').style.backgroundColor = "#2a3c74";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#2a3c74");
    document.getElementById('gi').style.backgroundColor = "#2a3c74";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#2a3c74");
    document.getElementById('VE').style.backgroundColor = "#2a3c74";
  }
});

document.getElementById('cor22').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2c313c");
    document.getElementById('CB').style.backgroundColor = "#2c313c";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#2c313c");
    document.getElementById('BT').style.backgroundColor = "#2c313c";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#2c313c");
    document.getElementById('ge').style.backgroundColor = "#2c313c";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#2c313c");
    document.getElementById('gi').style.backgroundColor = "#2c313c";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#2c313c");
    document.getElementById('VE').style.backgroundColor = "#2c313c";
  }
});

document.getElementById('cor23').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#353c7e");
    document.getElementById('CB').style.backgroundColor = "#353c7e";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#353c7e");
    document.getElementById('BT').style.backgroundColor = "#353c7e";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#353c7e");
    document.getElementById('ge').style.backgroundColor = "#353c7e";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#353c7e");
    document.getElementById('gi').style.backgroundColor = "#353c7e";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#353c7e");
    document.getElementById('VE').style.backgroundColor = "#353c7e";
  }
});

document.getElementById('cor24').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#232851");
    document.getElementById('CB').style.backgroundColor = "#232851";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#232851");
    document.getElementById('BT').style.backgroundColor = "#232851";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#232851");
    document.getElementById('ge').style.backgroundColor = "#232851";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#232851");
    document.getElementById('gi').style.backgroundColor = "#232851";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#232851");
    document.getElementById('VE').style.backgroundColor = "#232851";
  }
});

document.getElementById('cor25').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#5b473d");
    document.getElementById('CB').style.backgroundColor = "#5b473d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#5b473d");
    document.getElementById('BT').style.backgroundColor = "#5b473d";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#5b473d");
    document.getElementById('ge').style.backgroundColor = "#5b473d";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#5b473d");
    document.getElementById('gi').style.backgroundColor = "#5b473d";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#5b473d");
    document.getElementById('VE').style.backgroundColor = "#5b473d";
  }
});

document.getElementById('cor26').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#8f7d6f");
    document.getElementById('CB').style.backgroundColor = "#8f7d6f";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#8f7d6f");
    document.getElementById('BT').style.backgroundColor = "#8f7d6f";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#8f7d6f");
    document.getElementById('ge').style.backgroundColor = "#8f7d6f";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#8f7d6f");
    document.getElementById('gi').style.backgroundColor = "#8f7d6f";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#8f7d6f");
    document.getElementById('VE').style.backgroundColor = "#8f7d6f";
  }
});

document.getElementById('cor27').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#888485");
    document.getElementById('CB').style.backgroundColor = "#888485";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#888485");
    document.getElementById('BT').style.backgroundColor = "#888485";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#888485");
    document.getElementById('ge').style.backgroundColor = "#888485";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#888485");
    document.getElementById('gi').style.backgroundColor = "#888485";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#888485");
    document.getElementById('VE').style.backgroundColor = "#888485";
  }
});

document.getElementById('cor28').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#957152");
    document.getElementById('CB').style.backgroundColor = "#957152";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#957152");
    document.getElementById('BT').style.backgroundColor = "#957152";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#957152");
    document.getElementById('ge').style.backgroundColor = "#957152";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#957152");
    document.getElementById('gi').style.backgroundColor = "#957152";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#957152");
    document.getElementById('VE').style.backgroundColor = "#957152";
  }
});

document.getElementById('cor29').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#8b807a");
    document.getElementById('CB').style.backgroundColor = "#8b807a";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#8b807a");
    document.getElementById('BT').style.backgroundColor = "#8b807a";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#8b807a");
    document.getElementById('ge').style.backgroundColor = "#8b807a";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#8b807a");
    document.getElementById('gi').style.backgroundColor = "#8b807a";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#8b807a");
    document.getElementById('VE').style.backgroundColor = "#8b807a";
  }
});

document.getElementById('cor30').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#455158");
    document.getElementById('CB').style.backgroundColor = "#455158";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#455158");
    document.getElementById('BT').style.backgroundColor = "#455158";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#455158");
    document.getElementById('ge').style.backgroundColor = "#455158";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#455158");
    document.getElementById('gi').style.backgroundColor = "#455158";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#455158");
    document.getElementById('VE').style.backgroundColor = "#455158";
  }
});

document.getElementById('cor31').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#bca68e");
    document.getElementById('CB').style.backgroundColor = "#bca68e";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#bca68e");
    document.getElementById('BT').style.backgroundColor = "#bca68e";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#bca68e");
    document.getElementById('ge').style.backgroundColor = "#bca68e";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#bca68e");
    document.getElementById('gi').style.backgroundColor = "#bca68e";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#bca68e");
    document.getElementById('VE').style.backgroundColor = "#bca68e";
  }
});

document.getElementById('cor32').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#86817b");
    document.getElementById('CB').style.backgroundColor = "#86817b";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#86817b");
    document.getElementById('BT').style.backgroundColor = "#86817b";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#86817b");
    document.getElementById('ge').style.backgroundColor = "#86817b";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#86817b");
    document.getElementById('gi').style.backgroundColor = "#86817b";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#86817b");
    document.getElementById('VE').style.backgroundColor = "#86817b";
  }
});


  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('frente4').style.visibility = "visible";
      document.getElementById('frente3').style.visibility = "hidden";
      document.querySelectorAll(".ziper").forEach(v => v.style.fill = "#00000000");
    }else {
      document.getElementById('frente4').style.visibility = "hidden";
      document.getElementById('frente3').style.visibility = "visible";
      document.querySelectorAll(".ziper").forEach(v => v.style.fill = "#969696");
    }
  });


  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "jaqueta.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.visibility = "visible";
    }else {
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.visibility = "hidden" ;
    }
  });


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
        document.getElementById('coresb').style.visibility = "hidden";
        document.getElementById('coresGE').style.visibility = "hidden";
        document.getElementById('coresGI').style.visibility = "hidden";
        document.getElementById('coresP').style.visibility = "hidden";
        document.getElementById('coresVE').style.visibility = "hidden";
        document.getElementById('coresVD').style.visibility = "hidden";
        document.getElementById('coresBF').style.visibility = "hidden";
        document.getElementById('coresBB').style.visibility = "hidden";

    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "visible";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "block";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "visible";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "block";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "visible";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "block";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpunho').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorpeitilho1').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "visible";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpeitilho2').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "visible";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorfriso').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

