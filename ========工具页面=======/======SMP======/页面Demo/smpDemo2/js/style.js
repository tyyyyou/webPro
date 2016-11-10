function hideAllCont() {
	var contEls = document.getElementsByClassName('area-cont'),
		iconEls = document.getElementsByClassName('icon-toggle');
	for (var i = 0; i < contEls.length; i++) {
		contEls[i].className = 'area-cont hide';
		iconEls[i].className = 'icon-toggle fr down';
	}
}

function toggle(that) {
	var contEl = that.parentNode.getElementsByClassName('area-cont')[0],
		iconEl = contEl.parentNode.getElementsByClassName('icon-toggle')[0],
		elCls = contEl.className;
	if(elCls.indexOf('show') > -1) {
		contEl.className = 'area-cont hide';
		iconEl.className = 'icon-toggle fr down';
	}else {
		hideAllCont();
		contEl.className = 'area-cont show';
		iconEl.className = 'icon-toggle fr up';
	}
}

var toggleEl = document.getElementsByClassName('area-title');
for (var i = 0;i < toggleEl.length;i++) {
	toggleEl[i].onclick = function() {
		toggle(this);
	}
}