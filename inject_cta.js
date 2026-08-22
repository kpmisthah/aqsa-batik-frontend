const fs = require('fs');
const path = require('path');

const targetFiles = [
    'src/app/(user)/batik-cotton-dress-for-women/page.tsx',
    'src/app/(user)/batik-ethnic-wear-for-women/page.tsx',
    'src/app/(user)/batik-prints-womens-clothing/page.tsx',
    'src/app/(user)/new-batik-prints-suits/page.tsx',
    'src/app/(user)/wholesale-batik-women-dresses/page.tsx',
    'src/app/(user)/about-us/page.tsx',
    'src/app/(user)/contact-us/page.tsx',
    'src/app/(user)/blog/page.tsx',
    'src/app/(user)/blog/[slug]/page.tsx',
    'src/app/(user)/privacy-policy/page.tsx',
    'src/app/(user)/terms-and-conditions/page.tsx',
    'src/app/(user)/shipping-delivery-policy/page.tsx',
    'src/app/(user)/refund-return-policy/page.tsx',
    'src/app/(user)/cancellation-policy/page.tsx',
];

const ctaImport = `import ConsistentCTA from "@/modules/user/components/ConsistentCTA";\n`;

for (const file of targetFiles) {
    const fullPath = path.resolve(__dirname, file);
    if (!fs.existsSync(fullPath)) {
        console.log(`Skipping ${file} - Not found`);
        continue;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    if (content.includes('<ConsistentCTA />')) {
        console.log(`Already injected in ${file}`);
        continue;
    }

    // Insert Import
    if (!content.includes('import ConsistentCTA')) {
        const importRegex = /^import\s+.*from\s+['"].*['"];?$/gm;
        let lastMatch;
        let match;
        while ((match = importRegex.exec(content)) !== null) {
            lastMatch = match;
        }
        if (lastMatch) {
            const insertPos = lastMatch.index + lastMatch[0].length;
            content = content.slice(0, insertPos) + '\n' + ctaImport + content.slice(insertPos);
        } else {
            content = ctaImport + content;
        }
    }

    let modified = false;

    if (file.includes('blog/[slug]')) {
        if (content.includes('<YouMightAlsoLike')) {
            content = content.replace(/(<YouMightAlsoLike[\s\S]*?\/>)/, `<ConsistentCTA />\n            $1`);
            modified = true;
        }
    } 
    else if (!modified && content.includes('<FAQ')) {
        const faqRegex = /(<FAQ[\s\S]*?\/>)/;
        if (faqRegex.test(content)) {
            content = content.replace(faqRegex, `$1\n\n            {/* ── CONSISTENT CTA ── */}\n            <ConsistentCTA />\n`);
            modified = true;
        }
    }
    
    if (!modified && content.includes('</main>')) {
        content = content.replace(/(<\/main>)/, `  <ConsistentCTA />\n      $1`);
        modified = true;
    }
    
    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Injected successfully in ${file}`);
    } else {
        console.log(`Could not find a place to inject in ${file}`);
    }
}
