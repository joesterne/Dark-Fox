// Packs index.html + style.css into a body-only page (for hosting inside a sandboxed artifact frame).
const fs = require('fs');
const path = require('path');
const out = process.argv[2];
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8').replace(':root {', ':root {\n  color-scheme: dark;');
const fonts = html.match(/<link href="https:\/\/fonts\.googleapis[^>]+>/)[0];
const body = html.slice(html.indexOf('<body>') + 6, html.indexOf('</body>')).replace('src="dist/darkfox.js"', 'src="darkfox.js"');
const page = `<title>Dark Fox</title>\n<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n${fonts}\n<style>\n${css}\nhtml, body { height: 100%; }\n</style>\n${body}`;
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), page);
fs.copyFileSync('dist/darkfox.js', path.join(out, 'darkfox.js'));
console.log('wrote', out);
