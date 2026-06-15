const grid = document.querySelector('#concerts');
function card(e){
  const cls = (e.status||'').toLowerCase().includes('complet') ? 'status complet' : 'status';
  return `<article class="card"><div class="poster"><img src="${e.image}" alt="${e.title}" onerror="this.src='assets/img/placeholder.svg'"><span class="${cls}">${e.status||'à venir'}</span></div><div class="content"><div class="date">${e.date}</div><h3>${e.title}</h3><div class="place">📍 ${e.place}</div><p class="desc">${e.desc}</p><div class="actions"><a class="button" href="${e.ticket}" target="_blank">Réserver</a><a class="ghost" href="mailto:contact@dropgo.fr?subject=${encodeURIComponent(e.title)}">Infos</a></div></div></article>`
}
grid.innerHTML = (window.DROPGO_EVENTS||[]).map(card).join('');
