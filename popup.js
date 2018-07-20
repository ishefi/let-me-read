'use strict';

let changeColor = document.getElementById('LetMeRead');
changeColor.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.executeScript(
          tabs[0].id,
          {code: 
          	`var elem = document.querySelector('body > div.paywall-pop-small.js-modal.modal-wrapper.modal-wrapper--fixed');
          	if (elem != undefined){ 
          		elem.parentNode.removeChild(elem);
          	}
          	var elem2 = document.querySelector('#private-mode-wrapper');
          	if (elem2 != undefined){
          		elem2.parentNode.removeChild(elem2);
          	} document.querySelector('html').style.overflowY = 'auto';`});
    });
  };

