
import { HERO_MAPPINGS } from './constants';
import { HeroMatch, HeroRole } from './types';

interface State {
  searchTerm: string;
  selectedHero: HeroMatch | null;
  selectedRole: HeroRole | 'ALL';
}

let state: State = {
  searchTerm: '',
  selectedHero: null,
  selectedRole: 'ALL',
};

// Uygulamanın ana iskeletinin kurulup kurulmadığını takip eder
let isLayoutRendered = false;

function setState(newState: Partial<State>) {
  const oldSelectedHero = state.selectedHero;
  state = { ...state, ...newState };
  
  // Eğer görünüm (Liste -> Detay veya tam tersi) değiştiyse tam render yap
  if (oldSelectedHero !== state.selectedHero) {
    isLayoutRendered = false;
    render();
  } else {
    // Sadece arama veya rol değiştiyse kısmi güncelleme yap
    updateDynamicContent();
  }
}

const getRoleBadge = (role: HeroRole) => {
  const base = "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ";
  let colorClasses = "";
  switch(role) {
    case HeroRole.MAGE: colorClasses = 'text-purple-400 border-purple-500/30 bg-purple-500/10'; break;
    case HeroRole.WARRIOR: colorClasses = 'text-orange-400 border-orange-500/30 bg-orange-500/10'; break;
    case HeroRole.ASSASSIN: colorClasses = 'text-rose-400 border-rose-500/30 bg-rose-500/10'; break;
    case HeroRole.MARKSMAN: colorClasses = 'text-amber-400 border-amber-500/30 bg-amber-500/10'; break;
    case HeroRole.SUPPORT: colorClasses = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'; break;
    case HeroRole.TANK: colorClasses = 'text-blue-400 border-blue-500/30 bg-blue-500/10'; break;
    default: colorClasses = 'text-slate-400 border-slate-500/30 bg-slate-500/10'; break;
  }
  return `<span class="${base + colorClasses}">${role}</span>`;
};

function HeroDetailDisplay(hero: string, isAoV: boolean, iconUrl?: string) {
  const glowClass = isAoV ? 'from-cyan-500/20' : 'from-rose-500/20';
  const label = isAoV ? 'Arena of Valor' : 'Honor of Kings';
  const labelColor = isAoV ? 'text-cyan-400' : 'text-rose-400';
  const fallback = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${hero}`;

  return `
    <div class="group relative flex flex-col items-center">
      <div class="relative w-64 h-64 lg:w-80 lg:h-80 mb-8 floating">
        <div class="absolute inset-0 bg-gradient-to-b ${glowClass} to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div class="relative z-10 w-full h-full p-4 glass rounded-[4rem] border-white/10 overflow-hidden shadow-2xl">
          <img 
            src="${iconUrl || fallback}" 
            alt="${hero}" 
            referrerpolicy="no-referrer"
            onerror="this.onerror=null; this.src='${fallback}'"
            class="w-full h-full object-cover rounded-[3.2rem] transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 glass rounded-full border-white/20 whitespace-nowrap z-20">
           <span class="text-[10px] font-black uppercase tracking-[0.3em] ${labelColor}">${label}</span>
        </div>
      </div>
      <h2 class="heading-font text-5xl lg:text-7xl font-black text-white italic tracking-tighter uppercase text-center drop-shadow-2xl">
        ${hero}
      </h2>
    </div>
  `;
}

function getFilteredHeroes() {
  const forcedMages = ['Veera', 'Krixi', 'Ilumia', 'Mganga'];
  const sorted = [...HERO_MAPPINGS].sort((a, b) => {
    const aPrio = a.role === HeroRole.MAGE ? 0 : 1;
    const bPrio = b.role === HeroRole.MAGE ? 0 : 1;
    if (aPrio !== bPrio) return aPrio - bPrio;
    const aIdx = forcedMages.indexOf(a.aovName);
    const bIdx = forcedMages.indexOf(b.aovName);
    if (aIdx !== -1 || bIdx !== -1) {
      const vA = aIdx === -1 ? 999 : aIdx;
      const vB = bIdx === -1 ? 999 : bIdx;
      if (vA !== vB) return vA - vB;
    }
    return a.aovName.localeCompare(b.aovName);
  });

  return sorted.filter(h => {
    const term = state.searchTerm.toLowerCase();
    const matchSearch = h.aovName.toLowerCase().includes(term) || h.hokName.toLowerCase().includes(term);
    const matchRole = state.selectedRole === 'ALL' || h.role === state.selectedRole;
    return matchSearch && matchRole;
  });
}

function updateDynamicContent() {
  const grid = document.getElementById('hero-grid-dynamic');
  if (!grid) return;

  const filtered = getFilteredHeroes();
  
  // Grid içeriğini güncelle
  grid.innerHTML = filtered.map((h, i) => `
    <button class="hero-card hero-card-hover glass p-6 rounded-[3rem] h-[400px] flex flex-col items-center justify-between group animate-reveal" style="animation-delay: ${i * 0.02}s" data-aov="${h.aovName}">
      <div class="w-full flex justify-between items-center">
        ${getRoleBadge(h.role)}
        <div class="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-cyan-500/20 transition-colors">
          <i class="fas fa-chevron-right text-[10px] text-slate-500 group-hover:text-white"></i>
        </div>
      </div>
      <div class="relative w-40 h-40">
        <div class="absolute inset-0 bg-white/5 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
        <img src="${h.aovIconUrl}" referrerpolicy="no-referrer" class="w-full h-full object-cover rounded-[2.5rem] relative z-10 shadow-2xl border border-white/5" />
      </div>
      <div class="text-center w-full">
        <div class="text-2xl font-black text-white italic uppercase tracking-tighter group-hover:text-cyan-400 transition-colors mb-1 truncate px-2">${h.aovName}</div>
        <div class="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
          <span>VS</span>
          <span class="text-rose-500">${h.hokName}</span>
        </div>
      </div>
    </button>
  `).join('');

  // Click eventlerini tekrar bağla (Çünkü grid içeriği değişti)
  grid.querySelectorAll('.hero-card').forEach(card => {
    card.addEventListener('click', () => {
      const hero = HERO_MAPPINGS.find(m => m.aovName === (card as HTMLElement).dataset.aov);
      if (hero) setState({ selectedHero: hero });
    });
  });

  // Role tablarını güncelle (Aktif sınıfı için)
  document.querySelectorAll('.role-tab').forEach(btn => {
    const r = (btn as HTMLElement).dataset.role;
    if (r === state.selectedRole) {
      btn.classList.add('bg-cyan-600', 'text-white');
      btn.classList.remove('glass', 'text-slate-500');
    } else if (r === 'ALL' && state.selectedRole === 'ALL') {
      btn.classList.add('bg-white', 'text-black');
      btn.classList.remove('glass', 'text-slate-500');
    } else {
      btn.classList.remove('bg-cyan-600', 'text-white', 'bg-white', 'text-black');
      btn.classList.add('glass', 'text-slate-500');
    }
  });
}

function render() {
  const root = document.getElementById('root');
  if (!root) return;

  if (state.selectedHero) {
    renderDetail(root, state.selectedHero);
    isLayoutRendered = false;
  } else {
    if (!isLayoutRendered) {
      renderListLayout(root);
      isLayoutRendered = true;
    }
    updateDynamicContent();
  }
}

function renderListLayout(container: HTMLElement) {
  const roles = Object.values(HeroRole);

  container.innerHTML = `
    <div class="min-h-screen p-6 md:p-12 animate-reveal">
      <header class="max-w-[1920px] mx-auto text-center mb-20 relative">
        <div class="inline-block glass px-6 py-2 rounded-full mb-6 border-cyan-500/20">
          <span class="text-[10px] font-black tracking-[0.5em] text-cyan-400 uppercase">ZY MOBA CONNECT</span>
        </div>
        <h1 class="heading-font text-6xl md:text-9xl font-black italic tracking-tighter uppercase mb-6 leading-none">
          HERO <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-500">MATRIX</span>
        </h1>
        <p class="text-slate-400 text-sm font-bold uppercase tracking-[0.4em] opacity-60">Evrenler Arası Karakter Köprüsü</p>
      </header>

      <div class="max-w-7xl mx-auto mb-16 space-y-12">
        <div class="flex flex-wrap justify-center gap-3" id="role-tabs-container">
          <button class="role-tab px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all glass text-slate-500" data-role="ALL">TÜMÜ</button>
          ${roles.map(r => `
            <button class="role-tab px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all glass text-slate-500" data-role="${r}">${r}</button>
          `).join('')}
        </div>

        <div class="max-w-2xl mx-auto relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-rose-500 rounded-[2.5rem] blur opacity-25 group-focus-within:opacity-50 transition-opacity"></div>
          <div class="relative glass rounded-[2.5rem] p-5 flex items-center">
            <i class="fas fa-search text-slate-600 ml-4"></i>
            <input id="main-search" type="text" placeholder="Kahraman ismini yazın..." value="${state.searchTerm}" class="bg-transparent border-none outline-none flex-1 px-6 text-xl text-white font-bold placeholder:text-slate-700" autocomplete="off" />
          </div>
        </div>
      </div>

      <div id="hero-grid-dynamic" class="hero-grid max-w-[1920px] mx-auto">
        <!-- İçerik updateDynamicContent tarafından doldurulacak -->
      </div>
    </div>
  `;

  // Global Eventler (Sadece Layout kurulduğunda bir kez bağlanır)
  const searchInput = document.getElementById('main-search') as HTMLInputElement;
  searchInput?.addEventListener('input', (e) => {
    state.searchTerm = (e.target as HTMLInputElement).value;
    updateDynamicContent();
  });

  document.querySelectorAll('.role-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedRole = (btn as HTMLElement).dataset.role as any;
      updateDynamicContent();
    });
  });
}

function renderDetail(container: HTMLElement, hero: HeroMatch) {
  container.innerHTML = `
    <div class="min-h-screen flex items-center justify-center p-6 lg:p-12 relative overflow-hidden animate-reveal">
      <button id="detail-back" class="fixed top-8 left-8 z-50 glass px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all group">
        <i class="fas fa-arrow-left mr-3 group-hover:-translate-x-1 transition-transform"></i> Listeye Dön
      </button>

      <div class="max-w-[1400px] w-full relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          <div class="flex-1 animate-reveal" style="animation-delay: 0.1s">
            ${HeroDetailDisplay(hero.aovName, true, hero.aovIconUrl)}
          </div>
          <div class="flex flex-col items-center gap-12 w-80 animate-reveal" style="animation-delay: 0.2s">
            <div class="relative">
              <div class="w-32 h-32 rounded-full border-2 border-white/10 flex items-center justify-center bg-slate-950/80 backdrop-blur-2xl relative z-10">
                <span class="heading-font text-5xl font-black italic text-white tracking-tighter opacity-80">VS</span>
              </div>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-rose-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            </div>
            <div class="w-full space-y-6">
              <div class="text-center">
                <div class="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Eşleşme Oranı</div>
                <div class="text-7xl font-black text-white italic tracking-tighter">%${hero.matchSimilarity}</div>
              </div>
              <div class="grid grid-cols-1 gap-4">
                <div class="glass p-5 rounded-3xl border-white/5 text-center">
                  <div class="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Pozisyon</div>
                  <div class="text-lg font-black text-white italic uppercase tracking-tighter">${hero.lane}</div>
                </div>
                <div class="glass p-5 rounded-3xl border-white/5 text-center">
                  <div class="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Karakter Sınıfı</div>
                  <div class="text-lg font-black text-cyan-400 italic uppercase tracking-tighter">${hero.role}</div>
                </div>
              </div>
            </div>
            <div class="glass p-6 rounded-3xl border-white/5 w-full text-center">
              <p class="text-xs text-slate-400 italic leading-relaxed font-medium uppercase tracking-wider">
                "${hero.description}"
              </p>
            </div>
          </div>
          <div class="flex-1 animate-reveal" style="animation-delay: 0.3s">
            ${HeroDetailDisplay(hero.hokName, false, hero.hokIconUrl)}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('detail-back')?.addEventListener('click', () => {
    setState({ selectedHero: null });
  });
}

render();
