@echo off
title 3D Artist Portfolio Server - Parinya Daengsawat
echo ========================================================
echo Starting Local Portfolio Server...
echo Opening http://localhost:3000 in your browser
echo ========================================================
start "" "http://localhost:3000"
node -e "
const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf'
};
http.createServer((req, res) => {
  let u = decodeURI(req.url.split('?')[0]);
  if (u === '/') u = '/index.html';
  let p = path.join(process.cwd(), u);
  fs.stat(p, (err, s) => {
    if (err || !s.isFile()) {
      res.writeHead(404); res.end('Not Found'); return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(p).pipe(res);
  });
}).listen(PORT, () => console.log('Portfolio Server running at http://localhost:3000/ (Press Ctrl+C to stop)'));
"
pause
