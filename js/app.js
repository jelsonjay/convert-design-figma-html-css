let menuList = document.querySelector('#menuList');
menuList.style.maxHeight = '0px';

function toggleMenu() {
	if ((menuList.style.maxHeight = '0px')) {
		menuList.style.maxHeight = '130px';
	} else {
		menuList.style.maxHeight = '0px';
	}
}
