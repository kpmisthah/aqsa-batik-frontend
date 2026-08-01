const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(dirPath);
    });
}

walk('./src/app/(user)', function(filePath) {
    if (!filePath.endsWith('.tsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // 1. Remove hero-highlight span wrappers
    if (content.includes("hero-highlight")) {
        content = content.replace(/<span className=['"]hero-highlight['"]>([^<]+)<\/span>/g, "$1");
        changed = true;
    }

    // 2. Replace yellow bg-accent buttons with the new premium styling 
    // Usually matched by inline-block bg-accent text-primary px-4 py-3...
    // Let's use a regex that catches the old yellow button and turns it into tan button.
    const oldYellowBtn = /className="([^"]*)bg-accent text-primary([^"]*)"/g;
    content = content.replace(oldYellowBtn, (match, prefix, suffix) => {
        changed = true;
        // The old classes included stuff like `px-4 py-3 md:px-8 md:py-4.5 rounded-[10px] md:rounded-[18px] font-black text-sm md:text-xl shadow-[...`
        // We can just replace the whole className if it's the hero button or CTA button
        // Let's just check if it's a typical button and apply our new premium style.
        // If it includes uppercase tracking-wider, we can swap it.
        // Actually simpler: just find and replace the specific long class strings.
        return match; // fallback safety
    });

    // Specifically targeting the full class strings for safety:
    
    // A. Yellow Button exact replacements
    const yellowClass1 = /className="inline-block bg-accent text-primary px-4 py-3 md:px-8 md:py-4\.5 rounded-\[10px\] md:rounded-\[18px\] font-black text-sm md:text-xl shadow-\[0_15px_40px_rgba\(0,0,0,0\.3\)\] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider border-b-2 md:border-b-4 border-black\/10( w-full sm:w-auto text-center| text-center w-full sm:w-auto|)/g;
    const newYellowClass1 = `className="inline-block bg-tan text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl hover:brightness-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto"`;

    if (yellowClass1.test(content)) {
        content = content.replace(yellowClass1, newYellowClass1);
        changed = true;
    }
    
    const yellowClass2 = /className="inline-block bg-accent text-primary px-4 py-3 md:px-10 md:py-5 rounded-\[10px\] md:rounded-2xl font-black text-sm md:text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest border-b-2 md:border-b-4 border-black\/10( w-full sm:w-auto text-center| text-center w-full sm:w-auto|)/g;
    if (yellowClass2.test(content)) {
        content = content.replace(yellowClass2, newYellowClass1);
        changed = true;
    }
    
    // batik-suits page has slightly different yellow button:
    const yellowClass3 = /className="inline-block bg-accent text-primary px-6 py-3\.5 md:px-8 md:py-4\.5 rounded-\[12px\] md:rounded-\[18px\] font-black text-base md:text-xl shadow-\[0_15px_40px_rgba\(0,0,0,0\.3\)\] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider border-b-2 md:border-b-4 border-black\/10"/g;
    if (yellowClass3.test(content)) {
        content = content.replace(yellowClass3, newYellowClass1);
        changed = true;
    }

    // B. Transparent Secondary Button exact replacements
    const transClass1 = /className="inline-block bg-white\/10 backdrop-blur-md text-white border-2 border-white\/30 px-4 py-3 md:px-8 md:py-4\.5 rounded-\[10px\] md:rounded-\[18px\] font-black text-sm md:text-xl shadow-\[0_15px_40px_rgba\(0,0,0,0\.2\)\] hover:bg-white hover:text-primary active:scale-95 transition-all duration-300 uppercase tracking-wider( w-full sm:w-auto text-center| text-center w-full sm:w-auto|)/g;
    const newTransClass1 = `className="inline-block border border-white/40 text-white hover:bg-white hover:text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto"`;

    if (transClass1.test(content)) {
        content = content.replace(transClass1, newTransClass1);
        changed = true;
    }
    
    const transClass2 = /className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white\/10 backdrop-blur-md text-white border-2 border-white\/30 px-4 py-3 md:px-8 md:py-4\.5 rounded-\[10px\] md:rounded-\[18px\] font-black text-sm md:text-xl shadow-\[0_15px_40px_rgba\(0,0,0,0\.2\)\] hover:bg-white hover:text-primary active:scale-95 transition-all duration-300 uppercase tracking-wider w-full sm:w-auto text-center"/g;
    const newTransClass2 = `className="inline-flex items-center justify-center gap-2 md:gap-3 border border-white/40 text-white hover:bg-white hover:text-primary px-6 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:-translate-y-1 hover:shadow-2xl active:scale-95 transition-all duration-300 uppercase tracking-widest text-center w-full sm:w-auto"`;
    
    if (transClass2.test(content)) {
        content = content.replace(transClass2, newTransClass2);
        changed = true;
    }
    
    const transClass3 = /className="inline-block bg-white\/10 backdrop-blur-md text-white border-2 border-white\/30 px-6 py-3\.5 md:px-8 md:py-4\.5 rounded-\[12px\] md:rounded-\[18px\] font-black text-base md:text-xl shadow-\[0_15px_40px_rgba\(0,0,0,0\.2\)\] hover:bg-white hover:text-primary active:scale-95 transition-all duration-300 uppercase tracking-wider"/g;
    if (transClass3.test(content)) {
        content = content.replace(transClass3, newTransClass1);
        changed = true;
    }

    // 3. Fix small pulse dot colors in heroes (bg-accent animate-pulse -> bg-tan animate-pulse)
    if (content.includes("bg-accent animate-pulse")) {
        content = content.replace(/bg-accent animate-pulse/g, "bg-tan animate-pulse");
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed', filePath);
    }
});
