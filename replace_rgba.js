const fs = require('fs');

const files = ['app/globals.css', 'app/page.js', 'app/layout.js'];

const blueToGreenMap = [
    { regex: /rgba\(\s*2\s*,\s*8\s*,\s*24\s*,/g, replacement: 'rgba(5, 10, 5,' },
    { regex: /rgba\(\s*10\s*,\s*20\s*,\s*50\s*,/g, replacement: 'rgba(5, 10, 5,' },
    { regex: /rgba\(\s*9\s*,\s*13\s*,\s*22\s*,/g, replacement: 'rgba(5, 10, 5,' },

    { regex: /rgba\(\s*37\s*,\s*99\s*,\s*235\s*,/g, replacement: 'rgba(143, 188, 143,' },
    { regex: /rgba\(\s*59\s*,\s*130\s*,\s*246\s*,/g, replacement: 'rgba(143, 188, 143,' },
    { regex: /rgba\(\s*96\s*,\s*165\s*,\s*250\s*,/g, replacement: 'rgba(143, 188, 143,' },
    { regex: /rgba\(\s*147\s*,\s*197\s*,\s*253\s*,/g, replacement: 'rgba(143, 188, 143,' },
    { regex: /rgba\(\s*26\s*,\s*58\s*,\s*255\s*,/g, replacement: 'rgba(143, 188, 143,' },
    { regex: /rgba\(\s*26\s*,\s*86\s*,\s*219\s*,/g, replacement: 'rgba(143, 188, 143,' },
    { regex: /rgba\(\s*59\s*,\s*111\s*,\s*224\s*,/g, replacement: 'rgba(143, 188, 143,' },
    { regex: /rgba\(\s*129\s*,\s*140\s*,\s*248\s*,/g, replacement: 'rgba(143, 188, 143,' }, // indigo
    { regex: /rgba\(\s*124\s*,\s*109\s*,\s*242\s*,/g, replacement: 'rgba(143, 188, 143,' }, // violet/indigo
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let original = content;

        for (const mapping of blueToGreenMap) {
            content = content.replace(mapping.regex, mapping.replacement);
        }

        if (content !== original) {
            fs.writeFileSync(file, content);
            console.log(`Updated ${file}`);
        }
    }
}
console.log('Done replacing rgba colors.');
