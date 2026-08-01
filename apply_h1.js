const fs = require('fs');
const path = require('path');

const targetFiles = [
    'src/app/(user)/about-us/page.tsx',
    'src/app/(user)/batik-fabric/page.tsx',
    'src/app/(user)/batik-suits/page.tsx',
    'src/app/(user)/blog/page.tsx',
    'src/app/(user)/contact-us/page.tsx',
    'src/app/(user)/cotton-cloth/page.tsx',
    'src/app/(user)/fabric-wholesale/page.tsx',
    'src/app/(user)/new-batik-prints/page.tsx'
];

for (let file of targetFiles) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Replace H1 class
        let oldContent = content;
        content = content.replace(/<h1 className="font-heading[^"]*"/, '<h1 className="text-h1"');
        
        if (content !== oldContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated H1 in ${file}`);
        }
    }
}
