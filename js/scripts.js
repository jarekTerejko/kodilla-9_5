var btn = document.getElementsByClassName('button');
var txt = '';
	for (var i = 0; i < btn.length; i++) {
		txt += btn[i].innerText + ' ';
		
	}

alert(txt);