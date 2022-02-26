let hentai = document.getElementById('hentai');
let colorOut = document.getElementById('colorOut');
let hentaiLink = document.getElementById('hentaiLink');
function convert() {
    let value = hentai.value;
    if (value.includes('#')) {
        let hexStr = value.substring(1);
        let hex = parseInt(hexStr, 16);
        console.log(hex);
        if (isNaN(hex) || hex < 0 || hex > 16777215) {
            return alert('enter hexadecimal color code from #000000 - #ffffff');
        } else {
            body.style.backgroundColor = value;

            let redHex = hexStr.substring(0, 2);
            let greenHex = hexStr.substring(2, 4);
            let blueHex = hexStr.substring(4, 6);

            let red = parseInt(redHex, 16);
            let green = parseInt(greenHex, 16);
            let blue = parseInt(blueHex, 16);

            if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) {
                body.style.color = '#000000';
            } else {
                body.style.color = '#ffffff';
            }

            let hentaiCode =
                '' +
                Math.round((red / 255) * 99)
                    .toString()
                    .padStart(2, '0') +
                Math.round((green / 255) * 99)
                    .toString()
                    .padStart(2, '0') +
                Math.round((blue / 255) * 99)
                    .toString()
                    .padStart(2, '0');

            colorOut.innerText = hentaiCode;

            hentaiLink.href = 'https://nhentai.net/g/' + hentaiCode;
            hentaiLink.innerText = 'https://nhentai.net/g/' + hentaiCode;
        }
    } else if (isNaN(value) || value < 0 || value > 999999) {
        return alert('enter hentai code from 000000 - 999999, or hexadecimal color code from #000000 - #ffffff');
    } else {
        value = value.toString();
        while (value.length < 6) {
            value = '0' + value;
        }
        console.log(value);
        let r = parseInt(value.substring(0, 2));
        let g = parseInt(value.substring(2, 4));
        let b = parseInt(value.substring(4, 6));

        let red = Math.round((r / 99) * 255);
        let green = Math.round((g / 99) * 255);
        let blue = Math.round((b / 99) * 255);

        red16 = red.toString(16) + '';
        green16 = green.toString(16) + '';
        blue16 = blue.toString(16) + '';
        if (red16.length == 1) red16 = '0' + red16;
        if (green16.length == 1) green16 = '0' + green16;
        if (blue16.length == 1) blue16 = '0' + blue16;

        let color = `#${red16}${green16}${blue16}`;
        console.log(color);
        let body = document.getElementById('body');

        body.style.backgroundColor = color;
        if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) {
            body.style.color = '#000000';
        } else {
            body.style.color = '#ffffff';
        }
        colorOut.innerText = color;
    }
}
hentai.value = '200834';
