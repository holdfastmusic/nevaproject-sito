// Nevaproject · Ispezioni dall'alto: menu mobile, anno nel footer, stampa della guida
(function(){
  var nav=document.querySelector('.nav'), btn=nav&&nav.querySelector('.nav-toggle');
  if(btn){
    var set=function(open){nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Chiudi il menu':'Apri il menu');};
    btn.addEventListener('click',function(){set(!nav.classList.contains('open'))});
    nav.querySelectorAll('.nav-links a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  }
  var y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
  document.querySelectorAll('[data-print]').forEach(function(b){b.addEventListener('click',function(){window.print()})});
  // Esempi di consegna: ingrandimento
  var links=document.querySelectorAll('[data-lb]');
  if(links.length&&window.HTMLDialogElement){
    var d=document.createElement('dialog');d.className='lb';
    d.innerHTML='<img alt=""><button type="button" aria-label="Chiudi">&times;</button>';
    document.body.appendChild(d);
    var im=d.querySelector('img');
    d.querySelector('button').addEventListener('click',function(){d.close()});
    d.addEventListener('click',function(e){if(e.target===d)d.close()});
    links.forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();im.src=a.getAttribute('href');im.alt=a.querySelector('img').alt;d.showModal();})});
  }
})();
