const sharp = require('/home/user/Yoshi-dojo/node_modules/sharp');
const fs = require('fs');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

const svgIcon = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="40%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#1a2a5e"/>
      <stop offset="40%" stop-color="#0e1a42"/>
      <stop offset="70%" stop-color="#09112e"/>
      <stop offset="100%" stop-color="#040810"/>
    </radialGradient>
    <radialGradient id="goldmix" cx="60%" cy="65%" r="60%">
      <stop offset="0%" stop-color="#c9862a" stop-opacity=".35"/>
      <stop offset="100%" stop-color="#c9862a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f5d060" stop-opacity=".6"/>
      <stop offset="100%" stop-color="#c9862a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="kanji" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0%" stop-color="#fff8e0"/>
      <stop offset="25%" stop-color="#f5d878"/>
      <stop offset="55%" stop-color="#d4940a"/>
      <stop offset="100%" stop-color="#7a4a08"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="114" fill="url(#bg)"/>
  <rect width="512" height="512" rx="114" fill="url(#goldmix)"/>
  <circle cx="256" cy="256" r="200" fill="url(#glow)" opacity=".5"/>
  <circle cx="256" cy="256" r="175" fill="none" stroke="#c9a030" stroke-width="2" stroke-opacity=".55"/>
  <circle cx="256" cy="256" r="160" fill="none" stroke="#c9a030" stroke-width="1.5" stroke-dasharray="10 25" stroke-opacity=".35"/>
  <circle cx="256" cy="256" r="7" fill="#fffbe0" fill-opacity=".9"/>
  <polygon points="256,28 262,46 280,46 267,57 272,75 256,64 240,75 245,57 232,46 250,46" fill="#e8c040" fill-opacity=".8"/>
  <polygon points="256,484 262,466 280,466 267,455 272,437 256,448 240,437 245,455 232,466 250,466" fill="#e8c040" fill-opacity=".8"/>
  <polygon points="28,256 46,262 46,280 57,267 75,272 64,256 75,240 57,245 46,232 46,250" fill="#e8c040" fill-opacity=".8"/>
  <polygon points="484,256 466,262 466,280 455,267 437,272 448,256 437,240 455,245 466,232 466,250" fill="#e8c040" fill-opacity=".8"/>
  <text x="256" y="300" text-anchor="middle"
    font-family="serif" font-size="200" font-weight="bold"
    fill="url(#kanji)">賀</text>
</svg>`;

if (!fs.existsSync('icons')) fs.mkdirSync('icons');

const promises = sizes.map(size =>
  sharp(Buffer.from(svgIcon))
    .resize(size, size)
    .png()
    .toFile(`icons/icon-${size}.png`)
    .then(() => console.log(`✓ icon-${size}.png`))
    .catch(err => console.error(`✗ icon-${size}.png:`, err.message))
);

Promise.all(promises).then(() => console.log('Done!'));
