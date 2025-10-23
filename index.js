 // Small uploader: when a user picks a video/gif the script will replace the overlay content.
   const fileIn = document.getElementById('fileIn');
const overlay = document.getElementById('overlay');


fileIn.addEventListener('change', e => {
const f = e.target.files[0];
if (!f) return;
const url = URL.createObjectURL(f);
overlay.innerHTML = '';


if (f.type.startsWith('video')) {
const v = document.createElement('video');
v.src = url;
v.autoplay = true;
v.loop = true;
v.muted = true;
v.playsInline = true;
overlay.appendChild(v);
} else if (f.type === 'image/gif') {
const img = document.createElement('img');
img.src = url;
img.style.width = '100%';
img.style.height = '100%';
img.style.objectFit = 'cover';
overlay.appendChild(img);
}
});

    function enableDrag(el){
      let isDown=false, startX, startY, origLeft, origTop;
      el.style.pointerEvents = 'auto';
      el.style.position = 'absolute';
      el.style.left = el.offsetLeft + 'px';
      el.style.top = el.offsetTop + 'px';

      el.addEventListener('mousedown', (e)=>{isDown=true; startX=e.clientX; startY=e.clientY; origLeft=parseFloat(el.style.left); origTop=parseFloat(el.style.top); e.preventDefault();});
      window.addEventListener('mousemove', (e)=>{ if(!isDown) return; el.style.left = (origLeft + (e.clientX - startX)) + 'px'; el.style.top = (origTop + (e.clientY - startY)) + 'px'; });
      window.addEventListener('mouseup', ()=> isDown=false);
    }
