
window.addEventListener('load', function (event) { videoresize(this.innerWidth); });
window.addEventListener('resize', function (event) { videoresize(this.innerWidth); });
window.addEventListener('scroll', function (event) { navresize(this.scrollY); });


function navresize(scroll) {
    var scroll = this.scrollY;
    var menu = document.getElementById('menu').style;
    var nav = document.getElementById('nav').style;

    if (scroll == 0) {
        menu.backgroundColor = 'rgba(45, 45, 45, 0)';
        menu.height = '114px';
        nav.height = '114px';

    } else {
        menu.backgroundColor = 'rgba(45, 45, 45, 1)';
        menu.height = '71px';
        nav.height = '71px';

    }
}


function videoresize(xoffset) {
    var vid = document.getElementById('vid').style;
    var header = document.getElementsByTagName('header');
    var logo = document.getElementById('logo').style;

    if (xoffset > 600) {
        if (xoffset <= 1110) {

            vid.width = '1920px';
            vid.height = (xoffset * 0.50) + 70 + 'px';
            vid.marginTop = '-6px';
            vid.marginLeft = '-' + ((1920 - xoffset) / 2) + 'px';
            header[0].style.height = (xoffset * 0.50) + 50 + 'px';
            logo.top = ((xoffset * 0.50) - 150) / 2 + 'px';

        } else if (xoffset > 1110 && xoffset <= 1350) {

            vid.width = xoffset + 'px';
            vid.height = (xoffset * 0.80) + 50 + 'px';
            vid.marginTop = '-' + (xoffset * 0.15) + 'px';
            vid.marginLeft = '0px';
            logo.top = '200px';
            header[1].width = xoffset + 'px';
            document.getElementById('header_gros').style.height = '610px';

        } else {

            vid.width = (xoffset) + 'px';
            vid.height = (xoffset * 0.70) + 50 + 'px';
            vid.marginTop = '-' + (xoffset * 0.2) + 'px';
            vid.marginLeft = '0px';
            logo.top = '200px';
            header[1].width = xoffset + 'px';
            document.getElementById('header_gros').style.height = '610px';

        }
    }
}


function dropdownMiniMenu(id) {
    var sous = document.getElementById(id).style;
    var img = document.getElementById(id + '_img').style;
    
    if (sous.display == '') {
        sous.display = 'block';
        img.transform = 'rotate(90deg)';

    } else {

        sous.display = '';
        img.transform = 'rotate(0deg)';

    }
}
