
import { HERO_MAPPINGS } from './constants';
import { HeroMatch, HeroRole } from './types';

interface State {
  searchTerm: string;
  selectedHero: HeroMatch | null;
  selectedRole: HeroRole | 'ALL';
  showSuggestions: boolean;
}

// Başlangıçta herhangi bir kahraman seçili olmasın (Ana sayfa listesi gelsin)
let state: State = {
  searchTerm: '',
  selectedHero: null,
  selectedRole: 'ALL',
  showSuggestions: false
};

function setState(newState: Partial<State>) {
  state = { ...state, ...newState };
  render();
}

const getRoleColor = (role: HeroRole) => {
  switch(role) {
    case HeroRole.MAGE: return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
    case HeroRole.WARRIOR: return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
    case HeroRole.ASSASSIN: return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
    case HeroRole.MARKSMAN: return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    case HeroRole.SUPPORT: return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    case HeroRole.TANK: return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
  }
};

const getRolePriority = (role: HeroRole) => {
  if (role === HeroRole.MAGE) return 0;
  return 1;
};

function HeroCardDetail(hero: string, isAoV: boolean, iconUrl?: string) {
  const fallbackUrl = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${hero}`;
  const displayImage = iconUrl || fallbackUrl;
  
  return `
    <div class="relative w-full max-w-[480px] mx-auto transition-all duration-1000 animate-in">
      <div class="relative aspect-square flex items-center justify-center">
        <!-- Minimalist Background Glow -->
        <div class="absolute inset-0 opacity-20 bg-gradient-to-tr ${isAoV ? 'from-sky-500' : 'from-rose-500'} to-transparent blur-[120px] rounded-full"></div>
        
        <img 
          src="${displayImage}" 
          alt="${hero}" 
          referrerpolicy="no-referrer"
          onerror="this.onerror=null; this.src='${fallbackUrl}'"
          class="w-full h-full object-contain relative z-10 transition-transform duration-1000 drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]" 
        />
      </div>
      <div class="mt-8 text-center">
         <div class="text-[12px] font-black tracking-[0.5em] uppercase mb-3 opacity-40 ${isAoV ? 'text-sky-400' : 'text-rose-400'}">
            ${isAoV ? 'Arena of Valor' : 'Honor of Kings'}
         </div>
         <h3 class="heading-font text-6xl font-black text-white uppercase italic tracking-tighter">${hero}</h3>
      </div>
    </div>
  `;
}

function render() {
  const root = document.getElementById('root');
  if (!root) return;
  if (state.selectedHero) { renderDetailView(root, state.selectedHero); } 
  else { renderListView(root); }
}

function renderListView(container: HTMLElement) {
  const search = state.searchTerm.toLowerCase();
  
  // Kullanıcı isteğine göre sıralama: Veera, Krixi, Ilumia, Mganga en başta
  const forcedMages = ['Veera', 'Krixi', 'Ilumia', 'Mganga'];

  const sortedMappings = [...HERO_MAPPINGS].sort((a, b) => {
    // Rol önceliği (Büyücüler 0, diğerleri 1)
    const prioA = getRolePriority(a.role);
    const prioB = getRolePriority(b.role);
    if (prioA !== prioB) return prioA - prioB;

    // Aynı rol grubu içindeki sıralama
    const idxA = forcedMages.indexOf(a.aovName);
    const idxB = forcedMages.indexOf(b.aovName);
    
    if (idxA !== -1 || idxB !== -1) {
      const valA = idxA === -1 ? 999 : idxA;
      const valB = idxB === -1 ? 999 : idxB;
      if (valA !== valB) return valA - valB;
    }

    return a.aovName.localeCompare(b.aovName);
  });

  const suggestions = search.length > 0 
    ? sortedMappings.filter(h => h.aovName.toLowerCase().startsWith(search) || h.hokName.toLowerCase().startsWith(search)).slice(0, 6)
    : [];

  const filtered = sortedMappings.filter(h => {
    const matchesSearch = h.aovName.toLowerCase().includes(search) || h.hokName.toLowerCase().includes(search);
    const matchesRole = state.selectedRole === 'ALL' || h.role === state.selectedRole;
    return matchesSearch && matchesRole;
  });

  const roles = Object.values(HeroRole);

  container.innerHTML = `
    <div class="min-h-screen pb-24 px-4 sm:px-8">
      <div class="fixed top-0 left-1/2 -translate-x-1/2 w-screen h-screen pointer-events-none opacity-20 overflow-hidden">
         <div class="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-sky-600 rounded-full blur-[250px]"></div>
         <div class="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-rose-600 rounded-full blur-[250px]"></div>
      </div>

      <div class="relative z-10 max-w-[1920px] mx-auto py-12 lg:py-16">
        <header class="text-center mb-16 lg:mb-20">
          <div class="inline-flex items-center gap-4 px-8 py-3 rounded-full glass mb-8">
             <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
             <span class="text-[10px] font-black tracking-[0.5em] text-slate-300 uppercase">ZY MOBA CROSS-REF</span>
          </div>
          <h1 class="heading-font text-5xl md:text-8xl font-black tracking-tighter mb-4 text-white uppercase italic leading-none">
            ZY <span class="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-700">MOBA</span>
          </h1>
          <p class="text-slate-500 font-bold uppercase tracking-[0.3em] text-sm opacity-40">Karakter Karşılaştırma Rehberi</p>
        </header>

        <div class="max-w-5xl mx-auto mb-16 space-y-12">
          <div class="flex flex-wrap justify-center gap-3">
            <button class="role-btn px-8 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all ${state.selectedRole === 'ALL' ? 'bg-white text-black scale-105 shadow-2xl' : 'glass text-slate-400 hover:text-white'}" data-role="ALL">TÜMÜ</button>
            ${roles.map(role => `
              <button class="role-btn px-8 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all ${state.selectedRole === role ? 'bg-sky-600 text-white scale-105 shadow-2xl shadow-sky-500/20' : 'glass text-slate-400 hover:text-white'}" data-role="${role}">${role}</button>
            `).join('')}
          </div>

          <div class="relative max-w-2xl mx-auto">
            <div class="relative flex items-center glass rounded-[2.5rem] p-5 shadow-2xl focus-within:ring-2 focus-within:ring-white/10 transition-all">
              <i class="fas fa-search text-slate-700 ml-6 text-xl"></i>
              <input id="search-input" type="text" placeholder="Karakter ara..." value="${state.searchTerm}" autocomplete="off" class="flex-1 bg-transparent border-none outline-none px-6 text-xl text-white placeholder:text-slate-800 font-bold" />
            </div>

            ${state.showSuggestions && suggestions.length > 0 ? `
              <div class="absolute top-full left-0 right-0 mt-4 glass rounded-[2.5rem] overflow-hidden shadow-2xl z-50">
                ${suggestions.map(s => `
                  <div class="suggestion-item flex items-center gap-6 px-8 py-4 cursor-pointer hover:bg-white/5 transition-colors border-b border-white/5 last:border-none" data-hero="${s.aovName}">
                    <img src="${s.aovIconUrl}" referrerpolicy="no-referrer" class="w-12 h-12 rounded-xl object-cover border border-white/10" />
                    <div class="flex-1">
                      <div class="text-xl font-black text-white uppercase italic tracking-tighter">${s.aovName}</div>
                      <div class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">HoK: ${s.hokName}</div>
                    </div>
                    <span class="text-[9px] font-black uppercase px-4 py-1.5 rounded-full border border-white/10 text-slate-400">${s.role}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>

        <div class="hero-grid">
          ${filtered.map(hero => `
            <button class="hero-select-btn group relative glass p-6 rounded-[3rem] transition-all hover:-translate-y-4 hover:bg-white/5 text-center h-[420px]" data-hero="${hero.aovName}">
              <div class="absolute top-6 right-6 px-3 py-1 rounded-full text-[8px] font-black uppercase border ${getRoleColor(hero.role)}">
                 ${hero.role}
              </div>
              <div class="flex flex-col h-full justify-between items-center py-4">
                <div class="relative w-36 h-36 xl:w-40 xl:h-40">
                    <img 
                      src="${hero.aovIconUrl}" 
                      referrerpolicy="no-referrer" 
                      onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${hero.aovName}'" 
                      class="w-full h-full rounded-[2.5rem] object-cover border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:scale-110" 
                    />
                </div>
                <div class="mt-4 w-full">
                  <div class="text-2xl xl:text-3xl font-black text-white leading-tight uppercase italic tracking-tighter group-hover:text-sky-400 transition-colors truncate px-2">${hero.aovName}</div>
                  <div class="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold mt-3">
                    KARŞILIĞI: <span class="text-rose-500">${hero.hokName}</span>
                  </div>
                </div>
              </div>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', (e) => setState({ selectedRole: (e.currentTarget as HTMLElement).dataset.role as any }));
  });

  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = (e.target as HTMLInputElement).value;
      setState({ searchTerm: val, showSuggestions: val.length > 0 });
    });
    searchInput.addEventListener('focus', () => { if (state.searchTerm.length > 0) setState({ showSuggestions: true }); });
    document.addEventListener('click', (e) => { if (!(e.target as HTMLElement).closest('.relative')) setState({ showSuggestions: false }); }, { once: true });
  }

  document.querySelectorAll('.suggestion-item, .hero-select-btn').forEach(el => {
    el.addEventListener('click', (e) => {
      const heroName = (e.currentTarget as HTMLElement).dataset.hero;
      const hero = HERO_MAPPINGS.find(h => h.aovName === heroName);
      if (hero) setState({ selectedHero: hero, showSuggestions: false });
    });
  });
}

function renderDetailView(container: HTMLElement, hero: HeroMatch) {
  const roleColor = getRoleColor(hero.role);
  
  container.innerHTML = `
    <div class="min-h-screen relative flex items-center justify-center py-12 px-6">
      <div class="fixed inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.01] rounded-full blur-[150px]"></div>
      </div>

      <div class="relative z-10 w-full max-w-[1300px]">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div class="w-full lg:flex-1 animate-in">
            ${HeroCardDetail(hero.aovName, true, hero.aovIconUrl)}
          </div>
          
          <div class="flex flex-col items-center gap-12 lg:w-72">
             <div class="relative">
                <div class="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative z-10 bg-slate-950/50 backdrop-blur-3xl">
                   <span class="heading-font text-4xl font-black text-white italic tracking-tighter opacity-70">VS</span>
                </div>
                <div class="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-rose-500/10 rounded-full blur-2xl"></div>
             </div>

             <div class="text-center w-full space-y-10">
                <div class="space-y-3">
                   <div class="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em]">Benzerlik</div>
                   <div class="text-7xl font-black text-white italic tracking-tighter">%${hero.matchSimilarity}</div>
                </div>

                <div class="grid grid-cols-1 gap-3">
                  <div class="px-8 py-4 glass rounded-2xl border-b border-white/5">
                     <div class="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mb-1">Koridor</div>
                     <div class="text-lg font-black text-white uppercase tracking-tighter italic">${hero.lane}</div>
                  </div>
                  <div class="px-8 py-4 glass rounded-2xl border-b border-white/5">
                     <div class="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mb-1">Sınıf</div>
                     <div class="text-lg font-black ${roleColor.split(' ')[0]} uppercase tracking-tighter italic">${hero.role}</div>
                  </div>
                </div>
             </div>

             <button id="back-btn" class="px-12 py-5 bg-white text-black rounded-[2.5rem] text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-xl">
                <i class="fas fa-chevron-left mr-4"></i> Geri Dön
             </button>
          </div>

          <div class="w-full lg:flex-1 animate-in">
            ${HeroCardDetail(hero.hokName, false, hero.hokIconUrl)}
          </div>

        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn')?.addEventListener('click', () => {
    setState({ selectedHero: null, showSuggestions: false });
  });
}

render();
