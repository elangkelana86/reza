var base64 = {
    _keyStr: 'POIUYTREWQASDFGHJKLMNBVCXZpoiuytrewqasdfghjklmnbvcxz9087563412+/=',
    encode: function (input) {
        var output, chr1, chr2, chr3, enc1, enc2, enc3, enc4 = '',
            i = 0;
        for (input = base64._utf8_encode(input); i < input.length;) {
            chr3 = (output = input.charCodeAt(i++)) >> 2, enc1 = (3 & output) << 4 | (chr1 = input.charCodeAt
                    (i++)) >> 4, enc2 = (15 & chr1) << 2 | (chr2 = input.charCodeAt(i++)) >> 6, enc3 = 63 &
                chr2, isNaN(chr1) ? enc2 = enc3 = 64 : isNaN(chr2) && (enc3 = 64), enc4 = enc4 + this._keyStr
                .charAt(chr3) + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(
                    enc3)
        };
        return enc4
    },
    decode: function (input) {
        var output, chr1, chr2, chr3, enc1, enc2, enc3 = '',
            enc4 = 0;
        for (input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ''); enc4 < input.length;) {
            output = this._keyStr.indexOf(input.charAt(enc4++)) << 2 | (chr3 = this._keyStr.indexOf(input.charAt(
                    enc4++))) >> 4, chr1 = (15 & chr3) << 4 | (enc1 = this._keyStr.indexOf(input.charAt(
                enc4++))) >> 2, chr2 = (3 & enc1) << 6 | (enc2 = this._keyStr.indexOf(input.charAt(enc4++))),
                enc3 += String.fromCharCode(output), 64 != enc1 && (enc3 += String.fromCharCode(chr1)), 64 != enc2 &&
                (enc3 += String.fromCharCode(chr2))
        };
        return base64._utf8_decode(enc3)
    },
    _utf8_encode: function (input) {
        input = input.replace(/\r\n/g, '\x0A');
        for (var output = '', chr1 = 0; chr1 < input.length; chr1++) {
            var chr2 = input.charCodeAt(chr1);
            chr2 < 128 ? output += String.fromCharCode(chr2) : (127 < chr2 && chr2 < 2048 ? output += String.fromCharCode(chr2 >> 6 | 192) : (output += String.fromCharCode(chr2 >> 12 | 224), output += String.fromCharCode(chr2 >> 6 & 63 | 128)), output += String.fromCharCode(63 & chr2 | 128))
        };
        return output
    },
    _utf8_decode: function (input) {
        for (var output = '', chr1 = 0, chr2 = c1 = c2 = 0; chr1 < input.length;) {
            (chr2 = input.charCodeAt(chr1)) < 128 ? (output += String.fromCharCode(chr2), chr1++) : 191 < chr2 &&
                chr2 < 224 ? (c2 = input.charCodeAt(chr1 + 1), output += String.fromCharCode((31 & chr2) << 6 | 63 & c2),
                    chr1 += 2) : (c2 = input.charCodeAt(chr1 + 1), c3 = input.charCodeAt(chr1 + 2), output += String.fromCharCode((15 & chr2) << 12 | (63 & c2) << 6 | 63 & c3), chr1 += 3)
        };
        return output
    }
};
! function () {
    try {
        var input = 18,
            output = base64.decode('BCkkAWJ8w7ErzDJ='),
            chr1 = base64.decode('zSI9xSN3Ob06w6xfBCkkAWJ8OmwoBr4kAX1='),
            chr2 = document.querySelector('#HTML99 .license-code').innerText,
            chr3 = document.querySelector('#idBlog').innerText + output;
        if (base64.decode(chr2) == chr3) {
            return
        };
        document.write(
            '<style>body{background:#000}#peringatan span{font-size:50px}#peringatan{z-index:99999;position:fixed;top:0;right:0;left:0;height:100%;text-align:center;background:rgba(0, 0, 0, 0.95);border:5px solid #444;color:#fff;padding:20px;font-family:monospace;border-radius:10px}#peringatan h4{font-size:20px}</style><div id="peringatan"><h4>Activate Templates</h4><p>Untuk mendapatkan lisensi Anda bisa menghubungi kami di contact www.azid45.web.id</p><span id="waktu-redirect-link">18</span></div>'
            ), setInterval(function () {
            input <= 1 ? window.location.href = chr1 : document.getElementById('waktu-redirect-link').innerHTML = --input
        }, 1e3)
    } catch (input) {
        window.location.href = chr1
    }
}();
