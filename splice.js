const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src/app/(user)/home/page.tsx');
let data = fs.readFileSync(pagePath, 'utf8');

const snipPath = path.join(__dirname, 'bento_compact.tsx');
const tabContent = fs.readFileSync(snipPath, 'utf8');

const startMarker = '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 max-w-[1200px] mx-auto w-full">';
const endMarker = '                     </div>\n                  );\n              })}\n            </div>';

const startIndex = data.indexOf(startMarker);
if (startIndex === -1) {
    console.error('Start marker not found');
    process.exit(1);
}

const innerStart = data.substring(startIndex);
const endIndex = data.indexOf(endMarker, startIndex);

if (endIndex === -1) {
    console.error('End marker not found');
    process.exit(1);
}

const finalData = data.substring(0, startIndex) + tabContent + data.substring(endIndex + endMarker.length);
fs.writeFileSync(pagePath, finalData);
console.log('Successfully spliced Original Bento Section into page.tsx!');
