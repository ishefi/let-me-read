console.log('in content')

var banners = ['body > div.paywall-pop-small.js-modal.modal-wrapper.modal-wrapper--fixed',
               '#private-mode-wrapper', '#botspopup_wrapper']

var do_scrollbar = false;
for (var i = 0; i < banners.length; i++){
    var banner = document.querySelector(banners[i]);
    if (banner != undefined){
        console.log('removing ' + banners[i]);
        banner.parentNode.removeChild(banner);
        do_scrollbar = true;
    }
}

if (do_scrollbar){
    console.log('adding scroll bar')
    document.querySelector('html').style.overflowY = 'auto';
}
