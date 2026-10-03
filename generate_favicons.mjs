import fs from "fs";
import zlib from "zlib";

// 1. Create crisp SVG favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff3322" />
      <stop offset="100%" stop-color="#cc0e00" />
    </linearGradient>
  </defs>
  <!-- Background Rounded Rect -->
  <rect width="32" height="32" rx="7" fill="url(#grad)" />
  <rect width="30" height="30" x="1" y="1" rx="6" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="1" />
  
  <!-- Code brackets </> -->
  <path d="M10 11L5 16L10 21" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M22 11L27 16L22 21" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M18.5 9.5L13.5 22.5" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" fill="none"/>
</svg>`;

fs.writeFileSync("public/favicon.svg", svgContent, "utf8");
fs.writeFileSync("src/app/icon.svg", svgContent, "utf8");
fs.writeFileSync("public/icon.svg", svgContent, "utf8");
console.log("SVG favicons created successfully!");

// 2. Generate a 32x32 RGBA PNG using pure Node.js (zlib)
function createPng32() {
  const width = 32;
  const height = 32;
  const buffer = Buffer.alloc(height * (1 + width * 4));
  
  // Fill 32x32 pixels
  let offset = 0;
  for (let y = 0; y < height; y++) {
    buffer[offset++] = 0; // Filter type 0: None
    for (let x = 0; x < width; x++) {
      // Rounded corner check (radius ~ 6)
      const rx = x < 6 ? 6 - x : x > 25 ? x - 25 : 0;
      const ry = y < 6 ? 6 - y : y > 25 ? y - 25 : 0;
      const dist = Math.sqrt(rx * rx + ry * ry);
      
      if (dist > 6) {
        // Transparent outside rounded corners
        buffer[offset++] = 0;
        buffer[offset++] = 0;
        buffer[offset++] = 0;
        buffer[offset++] = 0;
        continue;
      }
      
      // Determine if pixel is part of code icon </>
      let isCode = false;
      
      // Left bracket: (10,11) to (5,16) to (10,21)
      if (y >= 11 && y <= 21) {
        const expectedX = y <= 16 ? 5 + (16 - y) : 5 + (y - 16);
        if (Math.abs(x - expectedX) <= 1) isCode = true;
      }
      
      // Right bracket: (22,11) to (27,16) to (22,21)
      if (y >= 11 && y <= 21) {
        const expectedX = y <= 16 ? 27 - (16 - y) : 27 - (y - 16);
        if (Math.abs(x - expectedX) <= 1) isCode = true;
      }
      
      // Slash: from (18, 9) to (14, 23)
      if (y >= 9 && y <= 23) {
        const expectedX = 18 - Math.round(((y - 9) / 14) * 4);
        if (Math.abs(x - expectedX) <= 0.8) isCode = true;
      }
      
      if (isCode) {
        // Crisp White icon
        buffer[offset++] = 255;
        buffer[offset++] = 255;
        buffer[offset++] = 255;
        buffer[offset++] = 255;
      } else {
        // Red #e91100 with vertical gradient
        const r = 233;
        const g = Math.max(0, Math.min(255, Math.round(17 - (y / 32) * 10)));
        const b = 0;
        buffer[offset++] = r;
        buffer[offset++] = g;
        buffer[offset++] = b;
        buffer[offset++] = 255;
      }
    }
  }
  
  const compressed = zlib.deflateSync(buffer);
  
  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i];
      for (let j = 0; j < 8; j++) {
        c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
      }
    }
    return (c ^ 0xffffffff) >>> 0;
  }
  
  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, "ascii");
    const crcBuf = Buffer.alloc(4);
    const crc = crc32(Buffer.concat([typeBuf, data]));
    crcBuf.writeUInt32BE(crc, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }
  
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth
  ihdrData[9] = 6; // Color type: RGBA
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace
  
  const ihdr = makeChunk("IHDR", ihdrData);
  const idat = makeChunk("IDAT", compressed);
  const iend = makeChunk("IEND", Buffer.alloc(0));
  
  const png = Buffer.concat([signature, ihdr, idat, iend]);
  return png;
}

const png32 = createPng32();
fs.writeFileSync("public/favicon-32x32.png", png32);
fs.writeFileSync("public/apple-touch-icon.png", png32);

// Create a valid ICO file with the 32x32 PNG payload
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // type: icon
icoHeader.writeUInt16LE(1, 4); // 1 image

const icoDir = Buffer.alloc(16);
icoDir[0] = 32; // width
icoDir[1] = 32; // height
icoDir[2] = 0;  // colors
icoDir[3] = 0;  // reserved
icoDir.writeUInt16LE(1, 4);  // color planes
icoDir.writeUInt16LE(32, 6); // bpp
icoDir.writeUInt32LE(png32.length, 8); // size
icoDir.writeUInt32LE(6 + 16, 12);      // offset

const ico = Buffer.concat([icoHeader, icoDir, png32]);
fs.writeFileSync("public/favicon.ico", ico);
fs.writeFileSync("src/app/favicon.ico", ico);
console.log("PNG and ICO favicons generated successfully!");
