// script.js - popup detail handler and touch hover

document.addEventListener('DOMContentLoaded', ()=>{
  // open popup when clicking 'Ver detalle'
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e)=> {
      const card = btn.closest('.card');
      const img = card.querySelector('img')?.getAttribute('src') || '';
      const title = card.querySelector('h3')?.innerText || '';
      const short = card.querySelector('p.short')?.innerText || '';
      const price = card.querySelector('.price')?.innerText || '';
      openPopup({img, title, short, price});
    });
  });

  // touch hover imitation
  document.querySelectorAll('.card').forEach(c=>{
    let t;
    c.addEventListener('touchstart', ()=> { c.classList.add('hover'); if(t) clearTimeout(t); });
    c.addEventListener('touchend', ()=> { t = setTimeout(()=> c.classList.remove('hover'), 600); });
  });

  // close popup events
  document.getElementById('popclose')?.addEventListener('click', closePopup);
  document.getElementById('popback')?.addEventListener('click', closePopup);
});

function openPopup(data){
  const wrap = document.getElementById('popwrap');
  const imgEl = document.getElementById('popimg');
  const titleEl = document.getElementById('poptitle');
  const descEl = document.getElementById('popdesc');
  const priceEl = document.getElementById('popprice');

  imgEl.src = data.img;
  titleEl.innerText = data.title;
  descEl.innerText = data.short + "\\n\\nLa " + data.title + " libera una potencia salvaje, lista para dominar cualquier tarea exigente. Diseño ficticio pensado para proyecto académico.";
  priceEl.innerText = data.price;

  wrap.classList.add('show');
}

function closePopup(){
  const wrap = document.getElementById('popwrap');
  wrap.classList.remove('show');
}
