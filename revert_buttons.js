const fs = require('fs');

const targetFiles = [
    'src/app/(user)/batik-fabric/page.tsx',
    'src/app/(user)/batik-suits/page.tsx',
    'src/app/(user)/blog/page.tsx',
    'src/app/(user)/contact-us/page.tsx',
    'src/app/(user)/cotton-cloth/page.tsx',
    'src/app/(user)/fabric-wholesale/page.tsx',
    'src/app/(user)/home/page.tsx',
    'src/app/(user)/new-batik-prints/page.tsx'
];

for (let file of targetFiles) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let oldContent = content;
        
        content = content.replace(/bg-tan text-primary/g, "bg-accent text-primary");
        
        if (content !== oldContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Reverted button to yellow in ${file}`);
        }
    }
}
