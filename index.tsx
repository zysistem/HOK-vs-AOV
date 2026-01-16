
import { HERO_MAPPINGS } from './constants';
import { HeroMatch, HeroRole } from './types';

// Uygulama Durumu (State)
interface State {
  searchTerm: string;
  selectedHero: HeroMatch | null;
  selectedRole: HeroRole | 'ALL';
  showSuggestions: boolean;
  focusedSuggestionIndex: number;
}

let state: State = {
  searchTerm: '',
  selectedHero: null,
  selectedRole: 'ALL',
  showSuggestions: false,
  focusedSuggestionIndex: -1
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
    <div class="relative group w-full overflow-hidden rounded-[3rem] border-2 ${isAoV ? 'border-sky-500/30' : 'border-rose-500/30'} bg-slate-950 h-full shadow-2xl">
      <div class="relative aspect-[4/5] overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-gradient-to-tr ${gradient} blur-[100px]"></div>
        <div class="absolute inset-0 flex items-center justify-center p-8 z-10">
          <img 
            src="${displayImage}" 
            alt="${hero}" 
            referrerpolicy="no-referrer"
            onerror="this.onerror=null; this.src='${fallbackUrl}'"
            class="w-full h-full object-contain transition-all duration-700 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110" 
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 z-20"></div>
        <div class="absolute top-6 left-6 z-30">
            <div class="px-4 py-1.5 text-[8px] font-black uppercase tracking-[0.3em] rounded-full shadow-xl backdrop-blur-3xl border border-white/10 ${isAoV ? 'bg-sky-500/70' : 'bg-rose-500/70'} text-white">
                ${isAoV ? 'AoV' : 'HoK'}
            </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 p-8 z-30">
        <div class="flex flex-col items-start">
          <div class="h-1 w-10 mb-3 rounded-full bg-gradient-to-r ${gradient}"></div>
          <h3 class="heading-font text-2xl font-black text-white leading-tight uppercase italic">${hero}</h3>
          <div class="mt-3">
            <span class="px-2.5 py-1 rounded-md text-[8px] font-black uppercase tracking-widest bg-gradient-to-r ${gradient} text-white">
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
  const search = state.searchTerm.toLowerCase();
  
  // Öneri Listesi Filtreleme
  const suggestions = search.length > 0 
    ? HERO_MAPPINGS.filter(h => h.aovName.toLowerCase().startsWith(search) || h.hokName.toLowerCase().startsWith(search)).slice(0, 8)
    : [];

  const filtered = HERO_MAPPINGS.filter(h => {
    const matchesSearch = h.aovName.toLowerCase().includes(search) || h.hokName.toLowerCase().includes(search);
    const matchesRole = state.selectedRole === 'ALL' || h.role === state.selectedRole;
    return matchesSearch && matchesRole;
  });

  const roles = Object.values(HeroRole);

  container.innerHTML = `
    <div class="min-h-screen bg-[#020617] text-slate-200 font-['Inter'] pb-20 relative overflow-hidden">
      <!-- Arka Plan Efektleri -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-sky-600/5 rounded-full blur-[200px]"></div>
        <div class="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-rose-600/5 rounded-full blur-[200px]"></div>
      </div>

      <div class="relative z-10 max-w-[1400px] mx-auto px-6 py-12">
        <header class="text-center mb-12">
          <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 mb-6 backdrop-blur-md">
             <span class="text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">ZY MOBA CROSS-REF</span>
          </div>
          <h1 class="heading-font text-4xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase italic">
            ZY <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-rose-400">MOBA</span>
          </h1>
          <p class="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] opacity-60">${HERO_MAPPINGS.length} KAHRAMAN VERİSİ</p>
        </header>

        <!-- Filtreler ve Arama -->
        <div class="max-w-4xl mx-auto mb-12 space-y-6">
          <div class="flex flex-wrap justify-center gap-2">
            <button class="role-btn px-5 py-2.5 rounded-xl text-[8px] font-black uppercase tracking-widest border border-white/5 transition-all ${state.selectedRole === 'ALL' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-slate-900/40 text-slate-500 hover:text-slate-300'}" data-role="ALL">HEPSİ</button>
            ${roles.map(role => `
              <button class="role-btn px-5 py-2.5 rounded-xl text-[8px] font-black uppercase tracking-widest border border-white/5 transition-all ${state.selectedRole === role ? 'bg-sky-600 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]' : 'bg-slate-900/40 text-slate-500 hover:text-slate-300'}" data-role="${role}">${role}</button>
            `).join('')}
          </div>

          <!-- Arama Barı + Autocomplete -->
          <div class="relative group max-w-xl mx-auto">
            <div class="absolute -inset-0.5 bg-white/5 rounded-2xl blur group-focus-within:bg-sky-500/10 transition duration-500"></div>
            <div class="relative flex items-center bg-slate-950 border border-slate-800 rounded-2xl p-3.5 backdrop-blur-3xl shadow-2xl">
              <i class="fas fa-search text-slate-700 ml-4"></i>
              <input id="search-input" type="text" placeholder="Kahraman adı (M, Val, Hou...)" value="${state.searchTerm}" autocomplete="off" class="flex-1 bg-transparent border-none outline-none px-5 text-base text-white placeholder:text-slate-800" />
            </div>

            <!-- Öneri Listesi Dropdown -->
            ${state.showSuggestions && suggestions.length > 0 ? `
              <div class="absolute top-full left-0 right-0 mt-2 bg-slate-950/95 border border-slate-800 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl z-50">
                ${suggestions.map((s, idx) => `
                  <div class="suggestion-item flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-white/5 border-b border-white/5 last:border-none transition-colors" data-hero="${s.aovName}">
                    <div class="flex items-center gap-4">
                      <img src="${s.aovIconUrl}" referrerpolicy="no-referrer" class="w-10 h-10 rounded-lg border border-white/10" />
                      <div>
                        <div class="text-sm font-black text-white leading-none">${s.aovName}</div>
                        <div class="text-[9px] text-slate-500 uppercase mt-1">HoK: ${s.hokName}</div>
                      </div>
                    </div>
                    <div class="px-2 py-1 bg-white/5 rounded text-[8px] text-slate-400 font-bold uppercase">${s.role}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Grid -->
        <div class="hero-grid">
          ${filtered.map(hero => `
            <button class="hero-select-btn group relative bg-slate-900/10 border border-slate-800/40 hover:border-sky-500/20 p-4 rounded-3xl transition-all hover:-translate-y-1 text-center" data-hero="${hero.aovName}">
              <div class="absolute top-0 right-0 px-2 py-1 text-[6px] font-black uppercase bg-gradient-to-br ${getRoleBadgeColor(hero.role)} text-white rounded-bl-lg z-20">
                 ${hero.role}
              </div>
              <div class="flex flex-col items-center gap-2.5">
                <div class="relative">
                    <img src="${hero.aovIconUrl}" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${hero.aovName}'" class="w-14 h-14 rounded-2xl border border-white/5 object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <div class="text-xs font-black text-white group-hover:text-sky-400 truncate w-32 uppercase">${hero.aovName}</div>
                  <div class="text-[7px] text-slate-600 uppercase tracking-widest font-bold mt-0.5">
                    HoK: <span class="text-rose-500/60">${hero.hokName}</span>
                  </div>
                </div>
              </div>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Listeners
  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      setState({ selectedRole: (e.currentTarget as HTMLElement).dataset.role as any });
    });
  });

  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  if (searchInput) {
    if (state.searchTerm.length > 0) searchInput.focus();
    searchInput.setSelectionRange(state.searchTerm.length, state.searchTerm.length);
    
    searchInput.addEventListener('input', (e) => {
      const val = (e.target as HTMLInputElement).value;
      setState({ searchTerm: val, showSuggestions: val.length > 0 });
    });

    searchInput.addEventListener('focus', () => {
      if (state.searchTerm.length > 0) setState({ showSuggestions: true });
    });

    // Sayfa geneline tıklandığında dropdown kapat
    document.addEventListener('click', (e) => {
      if (!(e.target as HTMLElement).closest('.group')) {
        setState({ showSuggestions: false });
      }
    }, { once: true });
  }

  document.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const heroName = (e.currentTarget as HTMLElement).dataset.hero;
      const hero = HERO_MAPPINGS.find(h => h.aovName === heroName);
      if (hero) setState({ selectedHero: hero, showSuggestions: false });
    });
  });

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
        <div class="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-sky-600/5 rounded-full blur-[200px]"></div>
        <div class="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-rose-600/5 rounded-full blur-[200px]"></div>
      </div>

      <div class="relative z-10 max-w-[1200px] mx-auto px-6 py-16">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          <div class="w-full lg:flex-1 max-w-sm space-y-6">
            <div class="bg-slate-900/40 border border-sky-500/20 p-5 rounded-3xl backdrop-blur-3xl text-center">
               <div class="text-[8px] font-black text-sky-500 uppercase tracking-widest mb-1">ARENA OF VALOR</div>
               <h4 class="heading-font text-3xl font-black text-white uppercase italic">${hero.aovName}</h4>
            </div>
            ${HeroCardHTML(hero.aovName, true, hero.role, hero.aovIconUrl)}
          </div>
          
          <div class="flex flex-col items-center gap-6">
             <div class="relative">
                <div class="w-20 h-20 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center relative z-10">
                   <span class="heading-font text-xl font-black text-white italic">VS</span>
                </div>
                <div class="absolute inset-0 bg-sky-500/10 rounded-full blur-xl animate-pulse"></div>
             </div>

             <div class="flex flex-col gap-4">
                <div class="bg-slate-900/40 border border-white/5 p-5 rounded-3xl text-center min-w-[240px] backdrop-blur-2xl">
                   <div class="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">BENZERLİK</div>
                   <div class="text-4xl font-black text-sky-400 italic">%${hero.matchSimilarity}</div>
                </div>
                
                <div class="bg-slate-900/40 border border-white/5 p-6 rounded-3xl text-center backdrop-blur-2xl space-y-4 shadow-xl">
                  <div>
                    <div class="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">KORİDOR</div>
                    <div class="text-lg font-black text-white uppercase">${hero.lane}</div>
                  </div>
                  <div class="h-px bg-white/5 w-1/2 mx-auto"></div>
                  <div>
                    <div class="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">ROL</div>
                    <div class="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r ${getRoleBadgeColor(hero.role)} uppercase">
                      ${hero.role}
                    </div>
                  </div>
                </div>
             </div>

             <button id="back-btn" class="px-8 py-4 bg-white text-black rounded-2xl text-[9px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                <i class="fas fa-arrow-left mr-3"></i> GERİ DÖN
             </button>
          </div>

          <div class="w-full lg:flex-1 max-w-sm space-y-6">
            <div class="bg-slate-900/40 border border-rose-500/20 p-5 rounded-3xl backdrop-blur-3xl text-center">
               <div class="text-[8px] font-black text-rose-500 uppercase tracking-widest mb-1">HONOR OF KINGS</div>
               <h4 class="heading-font text-3xl font-black text-white uppercase italic">${hero.hokName}</h4>
            </div>
            ${HeroCardHTML(hero.hokName, false, hero.role, hero.hokIconUrl)}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn')?.addEventListener('click', () => {
    setState({ selectedHero: null, searchTerm: '', showSuggestions: false });
  });
}

render();
