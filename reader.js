// reader.js
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
    } catch (err) {
        console.error('Error parsing JSON:', err);
    }
});
