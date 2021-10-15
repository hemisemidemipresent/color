let hentai = document.getElementById('hentai');
function convert() {
    let value = hentai.value;
    if (isNaN(value) || value < 0 || value > 999999) {
        return alert('enter hentai code from 000000 - 999999');
    }
    value = value.toString();
    let red = parseInt(value.substring(0, 2));
    let green = parseInt(value.substring(2, 4));
    let blue = parseInt(value.substring(4, 6));
    console.log(red, green, blue);
    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);
    if (red.length == 1) red = '0' + red;
    if (green.length == 1) green = '0' + green;
    if (blue.length == 1) blue = '0' + blue;

    let color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    console.log(color);
    let body = document.getElementById('body');
    body.style.backgroundColor = color;
}
hentai.value = '200834';
