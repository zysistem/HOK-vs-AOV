
import { HERO_MAPPINGS } from './constants';
import { HeroMatch, HeroRole } from './types';

// Uygulama Durumu (State)
interface State {
  searchTerm: string;
  selectedHero: HeroMatch | null;
  selectedRole: HeroRole | 'ALL';
}

let state: State = {
  searchTerm: '',
  selectedHero: null,
  selectedRole: 'ALL'
};

function setState(newState: Partial<State>) {
  state = { ...state, ...newState };
  render();
}

const getRoleBadgeColor = (role: HeroRole) => {
  switch(role) {
    case HeroRole.MAGE: return 'from-purple-500 to-indigo-600';
    case HeroRole.WARRIOR: return 'from-orange-500 to-red-600';
    case HeroRole.ASSASSIN: return 'from-red-600 to-rose-700';
    case HeroRole.MARKSMAN: return 'from-yellow-500 to-amber-600';
    case HeroRole.SUPPORT: return 'from-green-500 to-emerald-600';
    case HeroRole.TANK: return 'from-blue-600 to-cyan-700';
    default: return 'from-slate-500 to-slate-700';
  }
};

function HeroCardHTML(hero: string, isAoV: boolean, role: HeroRole, iconUrl?: string) {
  const fallbackUrl = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${hero}&backgroundColor=${isAoV ? '0ea5e9' : 'ef4444'}`;
  const displayImage = iconUrl || fallbackUrl;
  const gradient = getRoleBadgeColor(role);

  return `
    <div class="relative group w-full overflow-hidden rounded-[3.5rem] border-2 ${isAoV ? 'border-sky-500/40' : 'border-rose-500/40'} bg-[#020617] h-full shadow-2xl">
      <div class="relative aspect-[4/5] overflow-hidden bg-slate-950">
        <div class="absolute inset-0 opacity-20 bg-gradient-to-tr ${gradient} blur-[120px]"></div>
        <div class="absolute inset-0 flex items-center justify-center p-10 z-10">
          <img 
            src="${displayImage}" 
            alt="${hero}" 
            referrerpolicy="no-referrer"
            onerror="this.onerror=null; this.src='${fallbackUrl}'"
            class="w-full h-full object-contain transition-all duration-700 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-110" 
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-95 z-20"></div>
        <div class="absolute top-8 left-8 z-30">
            <div class="px-5 py-2 text-[8px] font-black uppercase tracking-[0.3em] rounded-full shadow-xl backdrop-blur-3xl border border-white/10 ${isAoV ? 'bg-sky-500/80' : 'bg-rose-500/80'} text-white">
                ${isAoV ? 'AoV ARENA' : 'HoK WORLD'}
            </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 p-10 z-30">
        <div class="flex flex-col items-start">
          <div class="h-1 w-12 mb-4 rounded-full bg-gradient-to-r ${gradient}"></div>
          <h3 class="heading-font text-3xl font-black text-white leading-tight tracking-tighter uppercase italic">${hero}</h3>
          <div class="mt-4">
            <span class="px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest bg-gradient-to-r ${gradient} text-white">
                ${role}
            </span>
          </div>
        </div>
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
  const filtered = HERO_MAPPINGS.filter(h => {
    const search = state.searchTerm.toLowerCase();
    const matchesSearch = h.aovName.toLowerCase().includes(search) || h.hokName.toLowerCase().includes(search);
    const matchesRole = state.selectedRole === 'ALL' || h.role === state.selectedRole;
    return matchesSearch && matchesRole;
  });

  const roles = Object.values(HeroRole);

  container.innerHTML = `
    <div class="min-h-screen bg-[#020617] text-slate-200 font-['Inter'] pb-20 relative overflow-hidden">
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-0 left-1/4 w-[1200px] h-[1200px] bg-sky-600/5 rounded-full blur-[250px]"></div>
        <div class="absolute bottom-0 right-1/4 w-[1200px] h-[1200px] bg-rose-600/5 rounded-full blur-[250px]"></div>
      </div>

      <div class="relative z-10 max-w-[1600px] mx-auto px-6 py-12 lg:py-20">
        <header class="text-center mb-16">
          <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/60 border border-slate-800 mb-8 backdrop-blur-md">
             <span class="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">ZY MOBA CROSS-REF</span>
          </div>
          <h1 class="heading-font text-5xl md:text-8xl font-black tracking-tighter mb-4 text-white uppercase italic">
            ZY <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-rose-400">MOBA</span>
          </h1>
          <p class="text-slate-500 font-bold uppercase tracking-[0.2em] text-sm opacity-60">124 Kahraman Karşılaştırması</p>
        </header>

        <div class="max-w-5xl mx-auto mb-16 space-y-8">
          <div class="flex flex-wrap justify-center gap-2">
            <button class="role-btn px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border border-white/5 transition-all ${state.selectedRole === 'ALL' ? 'bg-white text-black' : 'bg-slate-900/40 text-slate-500'}" data-role="ALL">HEPSİ</button>
            ${roles.map(role => `
              <button class="role-btn px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border border-white/5 transition-all ${state.selectedRole === role ? 'bg-sky-600 text-white' : 'bg-slate-900/40 text-slate-500'}" data-role="${role}">${role}</button>
            `).join('')}
          </div>

          <div class="relative group max-w-2xl mx-auto">
            <div class="absolute -inset-1 bg-white/5 rounded-[2rem] blur group-focus-within:bg-sky-500/20 transition duration-500"></div>
            <div class="relative flex items-center bg-slate-950 border border-slate-800/80 rounded-[1.5rem] p-4 backdrop-blur-3xl shadow-2xl">
              <i class="fas fa-search text-slate-700 ml-4"></i>
              <input id="search-input" type="text" placeholder="Kahraman adı (AoV veya HoK)..." value="${state.searchTerm}" class="flex-1 bg-transparent border-none outline-none px-6 text-lg text-white placeholder:text-slate-800" />
            </div>
          </div>
        </div>

        <div class="hero-grid">
          ${filtered.map(hero => `
            <button class="hero-select-btn group relative bg-slate-900/20 border border-slate-800/50 hover:border-sky-500/30 p-5 rounded-[2rem] transition-all hover:-translate-y-1 text-center" data-hero="${hero.aovName}">
              <div class="absolute top-0 right-0 px-3 py-1 text-[7px] font-black uppercase bg-gradient-to-br ${getRoleBadgeColor(hero.role)} text-white rounded-bl-xl z-20">
                 ${hero.role}
              </div>
              <div class="flex flex-col items-center gap-3">
                <div class="relative">
                    <img src="${hero.aovIconUrl}" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${hero.aovName}'" class="w-16 h-16 rounded-xl border border-white/5 object-cover group-hover:scale-110 transition-transform" />
                    <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-rose-500 border-2 border-slate-950 flex items-center justify-center">
                        <i class="fas fa-sync-alt text-[8px] text-white"></i>
                    </div>
                </div>
                <div>
                  <div class="text-sm font-black text-white group-hover:text-sky-400 truncate">${hero.aovName}</div>
                  <div class="text-[8px] text-slate-500 uppercase tracking-widest font-bold mt-1">
                    HoK: <span class="text-rose-400">${hero.hokName}</span>
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
    btn.addEventListener('click', (e) => {
      setState({ selectedRole: (e.currentTarget as HTMLElement).dataset.role as any });
    });
  });

  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  if (searchInput) {
    searchInput.focus();
    searchInput.setSelectionRange(state.searchTerm.length, state.searchTerm.length);
    searchInput.addEventListener('input', (e) => setState({ searchTerm: (e.target as HTMLInputElement).value }));
  }

  document.querySelectorAll('.hero-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const hero = HERO_MAPPINGS.find(h => h.aovName === (e.currentTarget as HTMLElement).dataset.hero);
      if (hero) setState({ selectedHero: hero });
    });
  });
}

function renderDetailView(container: HTMLElement, hero: HeroMatch) {
  container.innerHTML = `
    <div class="min-h-screen bg-[#020617] text-slate-200 font-['Inter'] pb-20 relative">
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-0 left-1/4 w-[1200px] h-[1200px] bg-sky-600/5 rounded-full blur-[250px]"></div>
        <div class="absolute bottom-0 right-1/4 w-[1200px] h-[1200px] bg-rose-600/5 rounded-full blur-[250px]"></div>
      </div>

      <div class="relative z-10 max-w-[1400px] mx-auto px-6 py-20">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          <div class="w-full lg:flex-1 max-w-sm space-y-6">
            <div class="bg-slate-900/60 border border-sky-500/30 p-6 rounded-[2rem] backdrop-blur-3xl text-center shadow-2xl">
               <div class="text-[9px] font-black text-sky-500 uppercase tracking-widest mb-1">ARENA OF VALOR</div>
               <h4 class="heading-font text-4xl font-black text-white uppercase italic tracking-tighter">${hero.aovName}</h4>
            </div>
            ${HeroCardHTML(hero.aovName, true, hero.role, hero.aovIconUrl)}
          </div>
          
          <div class="flex flex-col items-center gap-8">
             <div class="relative">
                <div class="w-24 h-24 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center relative z-10 shadow-2xl">
                   <span class="heading-font text-2xl font-black text-white italic">VS</span>
                </div>
                <div class="absolute inset-0 bg-sky-500/20 rounded-full blur-2xl animate-pulse"></div>
             </div>

             <div class="flex flex-col gap-4">
                <div class="bg-slate-900/80 border border-white/5 p-6 rounded-[2rem] text-center min-w-[280px] backdrop-blur-2xl shadow-xl">
                   <div class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">BENZERLİK</div>
                   <div class="text-5xl font-black text-sky-400 italic">%${hero.matchSimilarity}</div>
                </div>
                
                <div class="bg-slate-900/80 border border-white/5 p-6 rounded-[2rem] text-center backdrop-blur-2xl space-y-4 shadow-xl">
                  <div>
                    <div class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">KORİDOR</div>
                    <div class="text-xl font-black text-white uppercase tracking-tighter">${hero.lane}</div>
                  </div>
                  <div class="h-px bg-white/5 w-1/2 mx-auto"></div>
                  <div>
                    <div class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">ROL</div>
                    <div class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r ${getRoleBadgeColor(hero.role)} uppercase tracking-tighter">
                      ${hero.role}
                    </div>
                  </div>
                </div>
             </div>

             <button id="back-btn" class="px-10 py-5 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                <i class="fas fa-arrow-left mr-3"></i> LİSTEYE DÖN
             </button>
          </div>

          <div class="w-full lg:flex-1 max-w-sm space-y-6">
            <div class="bg-slate-900/60 border border-rose-500/30 p-6 rounded-[2rem] backdrop-blur-3xl text-center shadow-2xl">
               <div class="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1">HONOR OF KINGS</div>
               <h4 class="heading-font text-4xl font-black text-white uppercase italic tracking-tighter">${hero.hokName}</h4>
            </div>
            ${HeroCardHTML(hero.hokName, false, hero.role, hero.hokIconUrl)}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn')?.addEventListener('click', () => setState({ selectedHero: null }));
}

render();
