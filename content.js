console.log('in content')
var elem = document.querySelector('body > div.paywall-pop-small.js-modal.modal-wrapper.modal-wrapper--fixed');
if (elem != undefined){
	console.log('found paywall banner') 
	elem.parentNode.removeChild(elem);
}
var elem2 = document.querySelector('#private-mode-wrapper');
if (elem2 != undefined){
	console.log('found private banner')
	elem2.parentNode.removeChild(elem2);
}
if (elem2!= undefined || elem!=undefined){
	console.log('adding scroll bar')
	document.querySelector('html').style.overflowY = 'auto';	
}
