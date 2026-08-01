const fs = require('fs');

const replacements = [
    {
        file: 'src/app/(user)/about-us/page.tsx',
        search: /Legacy Craftsmanship/g,
        replace: "<span className='text-accent'>Legacy Craftsmanship</span>"
    },
    {
        file: 'src/app/(user)/batik-fabric/page.tsx',
        search: /Batik Fabric Online/g,
        replace: "<span className='text-accent'>Batik Fabric Online</span>"
    },
    {
        file: 'src/app/(user)/batik-suits/page.tsx',
        search: /Batik Suits/g,
        replace: "<span className='text-accent'>Batik Suits</span>"
    },
    {
        file: 'src/app/(user)/blog/page.tsx',
        search: /Fashion Trends Blog/g,
        replace: "<span className='text-accent'>Fashion Trends</span> Blog"
    },
    {
        file: 'src/app/(user)/contact-us/page.tsx',
        search: /Your Batik Fabric/g,
        replace: "<span className='text-accent'>Your Batik Fabric</span>"
    },
    {
        file: 'src/app/(user)/cotton-cloth/page.tsx',
        search: /Batik Printed Cotton Cloth/g,
        replace: "<span className='text-accent'>Batik Printed Cotton Cloth</span>"
    },
    {
        file: 'src/app/(user)/cotton-cloth/page.tsx',
        search: /Cotton Fabric Online/g,
        replace: "<span className='text-accent'>Cotton Fabric Online</span>"
    },
    {
        file: 'src/app/(user)/fabric-wholesale/page.tsx',
        search: /Wholesale Cotton Dresses/g,
        replace: "<span className='text-accent'>Wholesale Cotton Dresses</span>"
    },
    {
        file: 'src/app/(user)/new-batik-prints/page.tsx',
        search: /New Arrival Batik Prints/g,
        replace: "<span className='text-accent'>New Arrival Batik Prints</span>"
    }
];

for (let r of replacements) {
    if (fs.existsSync(r.file)) {
        let content = fs.readFileSync(r.file, 'utf8');
        content = content.replace(r.search, r.replace);
        fs.writeFileSync(r.file, content, 'utf8');
        console.log(`Updated ${r.file}`);
    }
}
