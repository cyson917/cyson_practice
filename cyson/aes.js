const request = require("request");
const crypto = require('crypto');

//const aes256 = require("aes256");


var cipherText = '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';

var key = "ad48e9bf898066d314ce27a792f313ec";
var iv = key.slice(0,16);

var test = "테스트";

const cipher  = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update(test, 'utf8', 'base64');
encrypted += cipher.final('base64');
console.log(encrypted);

const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'base64', 'utf8'); 
decrypted += decipher.final('utf8');
console.log(decrypted);

/*
테스트
java dA7l4IIVxNVUWy+MwLgwQQ==
nodejs G3aw1OqjGSLjBJ31EEjNuQ==

test
java GNaUhjKWuaxX2UbJYRLV2A==
nodejs W2EhG233wLfl+aVp8xPFeg==
*/

/*
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(cipherText, 'base64', 'utf8'); 
decrypted += decipher.final('utf8');
console.log(decrypted);
*/

/*
const privateKey = "ad48e9bf898066d314ce27a792f313ec"; // 32byte
const ivKey = privateKey.substring(0, 16); // 16byte
const chainingMode = "AES-256-CBC";
const encrypt = (utf8Text) => {
    const cipher = crypto.createCipheriv(chainingMode, privateKey, ivKey);
    cipher.setAutoPadding(false);
    let encrypted = cipher.update(pkcs7Pad(utf8Text), undefined, "base64");
    encrypted += cipher.final("base64");
    return encrypted;
};

const decrypt = (base64Text) => {
    const decipher = crypto.createDecipheriv(chainingMode, privateKey, ivKey);
    decipher.setAutoPadding(false);
    let decrypted = decipher.update(base64Text, "base64", "utf8");
    decrypted += decipher.final("utf8");
    return pkcs7Unpad(decrypted);
};

const pkcs7 = require("pkcs7");

const pkcs7Pad = (params) => {
    const buffer = Buffer.from(params, "utf8");
    const bytes = new Uint8Array(buffer.length);
    let i = buffer.length;
    while (i--) {
        bytes[i] = buffer[i];
    }
    return Buffer.from(new Uint8Array(pkcs7.pad(bytes)));
}

const pkcs7Unpad = (params) => {
    const buffer = Buffer.from(params, "utf8");
    const bytes = new Uint8Array(buffer.length);
    let i = buffer.length;
    while (i--) {
        bytes[i] = buffer[i];
    }
    const result = Buffer.from(new Uint8Array(pkcs7.unpad(bytes)));
    return result.toString("utf8");
}



const plainText = "테스트";
const encrypted = encrypt(plainText);
console.log("ENCRYPTED", encrypted);
console.log("DECRYPTED", decrypt(encrypted));
*/




var uri = 'https://api.fondant.kr/api/church/getClassList?key=c11120734de9287e';

/*
request({ 
    uri: uri, 
    method: "GET", 
    }, function(error, response, body) { 
        var obj = JSON.parse(body);
        var json = obj.return;
        var encStr = JSON.stringify(json);

        encStr = Buffer.from(encStr, "utf8").toString('base64');

        var key = 'ad48e9bf898066d314ce27a792f313ec';
        var decStr = aes256.decrypt(key, encStr);
        //console.log(decStr); 
        //console.log('안녕');

   

    } 
);
*/


