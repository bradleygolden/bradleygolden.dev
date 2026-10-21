import { readFileSync, writeFileSync } from 'node:fs';
// Builds site/index.html from source/src.html and source/content.html (run from the repo root: node source/tools/build.mjs).
const dir = 'source';
const icon = (file, fill) => {
  const s = readFileSync(`${dir}/logos/${file}`, 'utf8');
  const vb = s.match(/viewBox="([^"]+)"/)[1];
  const inner = s.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').replace(/<title>[\s\S]*?<\/title>/, '').replace(/ aria-label="[^"]*"/g, '');
  return `<svg viewBox="${vb}" fill="${fill}" aria-hidden="true" focusable="false">${inner}</svg>`;
};
const files = { recursive: 'recursive-mark.svg', lockup: 'recursive-systems-lockup.svg', instagram: 'instagram.svg', youtube: 'youtube.svg' };
const icons = (h, force) => h.replace(/<!--icon:(\w+)(?::(#[0-9a-fA-F]+|currentColor))?-->/g, (_, n, c) => icon(files[n], force || c || '#fff'));
const content = readFileSync(`${dir}/content.html`, 'utf8');
// The thermal copy: same layout, thermal photo, logos in white (each brand's allowed reverse), nothing focusable or announced.
// Only the name and the portrait are ever right of the seam; the reading text and links never are.
const thermal = icons(content.replace(/<div class="links">[\s\S]*?<\/ul>\s*<\/div>/, '').replace(/<p class="statement">[\s\S]*?<\/p>/, '').replace(/<p class="about">[\s\S]*?<\/p>/, ''), '#ffffff')
  .replace(/<h1 class="name">([\s\S]*?)<\/h1>/, '<div class="name">$1</div>')
  .replace(/src="bradley-800.webp" srcset="bradley-480.webp 480w, bradley-800.webp 800w"/, 'src="bradley-thermal-800.webp" srcset="bradley-thermal-480.webp 480w, bradley-thermal-800.webp 800w"')
  .replace('logos/linkedin-inbug-black.webp', 'logos/linkedin-inbug-white.webp')
  .replace(/ alt="[^"]*"/g, ' alt=""').replace(/ aria-label="[^"]*"/g, '').replace(/ href="[^"]*"/g, '')
  .replace(/<ul class="social"/, '<ul class="social" role="presentation"');
const html = readFileSync(`${dir}/src.html`, 'utf8').replace('<!--content-->', icons(content)).replace('<!--thermal-->', thermal);
writeFileSync('site/index.html', html);
console.log('built', html.length);
