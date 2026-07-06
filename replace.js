const fs = require('fs');
const files = ['app/globals.css', 'app/page.js'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Regex for all the blue hexes found in the project
    const blueHexes = /#(2563eb|1a3aff|3b82f6|60a5fa|1d4ed8|1e3a8a|93c5fd|bfdbfe|1041c3|153c9e|1e40af|3178C6|0175C2|61DAFB|38BDF8|336791|1679A7|7C3AED)/gi;
    content = content.replace(blueHexes, '#1b4d3e');
    fs.writeFileSync(file, content);
});
console.log('Replaced colors successfully!');
