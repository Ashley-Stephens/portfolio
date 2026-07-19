const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname;
http.createServer((req,res)=>{
  if(req.method==='POST'&&req.url.startsWith('/save')){
    const name=new URL(req.url,'http://x').searchParams.get('name')||'frame';
    let b='';req.on('data',c=>b+=c);req.on('end',()=>{
      fs.writeFileSync(path.join(root,'_grab_'+name+'.png'),Buffer.from(b.replace(/^data:image\/\w+;base64,/,''),'base64'));res.end('ok');});return;}
  let p=path.join(root,decodeURIComponent(req.url.split('?')[0]));
  if(req.url==='/'||req.url==='')p=path.join(root,'laptop-mockup.html');
  fs.readFile(p,(e,d)=>{if(e){res.writeHead(404);res.end('nf');return;}
    const ct={'.html':'text/html','.js':'text/javascript','.glb':'model/gltf-binary','.png':'image/png'}[path.extname(p)]||'application/octet-stream';
    res.writeHead(200,{'content-type':ct});res.end(d);});
}).listen(8778,'127.0.0.1',()=>console.log('up'));
