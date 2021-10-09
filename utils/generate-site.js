const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if error, reject Promise and send err to Promise's `.catach()` method
            if (err) {
                reject(err);
                // return out of fnction here so Promise doesn't accidentally execute resolve() function too
                return;
            }

            // if all is well, resolve Promise and send successful data to `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true;
            message:'Style sheet was copied sucessfully!');
    })
}

module.exports = { writeFile,copyFile };