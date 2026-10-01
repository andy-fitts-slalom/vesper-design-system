import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const mime={'.html':'text/html','.css':'text/css','.js':'text/javascript','.woff2':'font/woff2','.svg':'image/svg+xml','.json':'application/json','.md':'text/plain'};
http.createServer((req,res)=>{
 let decoded; try { decoded=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch { res.writeHead(400).end(); return; }
 if(decoded==='/'){res.writeHead(302,{Location:'/preview/index.html'}).end();return;}
 const file=path.resolve(root,`.${decoded}`);
 if(!file.startsWith(root) || !fs.existsSync(file) || !fs.statSync(file).isFile()){res.writeHead(404).end('Not found');return;}
 res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(file).pipe(res);
}).listen(4386,'127.0.0.1',()=>console.log('Vesper UI: http://127.0.0.1:4386'));
