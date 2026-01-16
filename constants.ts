
import { HeroMatch, HeroRole } from './types';

// AoV Image Source: https://cdn.id.garenanow.com/games/aov/hero/icon/{id}.png
// HoK Image Source: https://liquipedia.net/commons/images/...
export const HERO_MAPPINGS: HeroMatch[] = [
  // --- MAGES (Büyücüler) ---
  { 
    aovName: 'Veera', hokName: 'Daji', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Anlık hasar ve kontrol odaklı büyücü.', matchSimilarity: 100, 
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/103.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/5/5d/Daji_Hero_Icon.png'
  },
  { 
    aovName: 'Krixi', hokName: 'Xiao Qiao', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Alan hasarı ve dürtme yeteneği yüksek.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/105.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/2/22/Xiao_Qiao_Hero_Icon.png'
  },
  { 
    aovName: 'Tulen', hokName: 'Zhuge Liang', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Yüksek mobiliteye sahip bitirici büyücü.', matchSimilarity: 98,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/149.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/3/3d/Zhuge_Liang_Hero_Icon.png'
  },
  { 
    aovName: 'Natalya', hokName: 'An Qi La', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Ön hattı eriten lazer hasarı.', matchSimilarity: 98,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/123.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/1/18/Angela_Hero_Icon.png'
  },
  { 
    aovName: 'Lauriel', hokName: 'Diaochan (HoK)', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Sürekli yetenek kullanımı ve sustain.', matchSimilarity: 98,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/150.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/c/c9/Diao_Chan_Hero_Icon.png'
  },
  { 
    aovName: 'Zata', hokName: 'Wan\'er', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Havadan saldırı gerçekleştiren suikastçı büyücü.', matchSimilarity: 98,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/200.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/f/fe/Shangguan_Wan%27er_Hero_Icon.png'
  },
  { 
    aovName: 'Raz', hokName: 'Mai Shiranui', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Yumruk komboları ve yüksek mobilite.', matchSimilarity: 92,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/135.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/a/a5/Mai_Shiranui_Hero_Icon.png'
  },
  { 
    aovName: 'Aleister', hokName: 'Liang', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Mutlak kontrol ve kilitleme yeteneği.', matchSimilarity: 95,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/127.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/3/30/Zhang_Liang_Hero_Icon.png'
  },

  // --- MARKSMEN (Nişancılar) ---
  { 
    aovName: 'Valhein', hokName: 'Di Renjie', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Sersemletme ve seri hasar.', matchSimilarity: 95,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/101.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/5/5c/Di_Renjie_Hero_Icon.png'
  },
  { 
    aovName: 'Violet', hokName: 'Sun Shangxiang', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Yuvarlanma ve anlık yüksek hasar.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/108.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/5/5e/Sun_Shangxiang_Hero_Icon.png'
  },
  { 
    aovName: 'Yorn', hokName: 'Hou Yi', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Hızlı ok atışları ve global ulti.', matchSimilarity: 95,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/113.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/b/b3/Hou_Yi_Hero_Icon.png'
  },
  { 
    aovName: 'Elsu', hokName: 'Shouyue', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Keskin nişancı ve görünmezlik.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/172.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/9/91/Baili_Shouyue_Hero_Icon.png'
  },
  { 
    aovName: 'Hayate', hokName: 'Marco Polo', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Gerçek hasar ve yüksek mobilite.', matchSimilarity: 98,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/183.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/1/14/Marco_Polo_Hero_Icon.png'
  },
  { 
    aovName: 'Laville', hokName: 'Hou Yi', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Çoklu hedef vurma ve global sersemletme.', matchSimilarity: 90,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/198.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/b/b3/Hou_Yi_Hero_Icon.png'
  },

  // --- WARRIORS (Savaşçılar) ---
  { 
    aovName: 'Arthur', hokName: 'Arthur', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Dayanıklı ve basit oynanışlı savaşçı.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/133.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/1/1b/Arthur_Hero_Icon_HoK.png'
  },
  { 
    aovName: 'Lu Bu', hokName: 'Cao Cao', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Yüksek yaşam çalma ve düello gücü.', matchSimilarity: 95,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/121.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/d/d5/Cao_Cao_Hero_Icon.png'
  },
  { 
    aovName: 'Yena', hokName: 'Mulan', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Çift formlu kombo kraliçesi.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/185.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/0/09/Mulan_Hero_Icon.png'
  },
  { 
    aovName: 'Maloch', hokName: 'Lu Bu (HoK)', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Gerçek hasar ve alan etkili ulti.', matchSimilarity: 98,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/140.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/e/e0/L%C3%BC_Bu_Hero_Icon.png'
  },
  { 
    aovName: 'Riktor', hokName: 'Li Xin', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Çevreye göre değişen yetenekler.', matchSimilarity: 92,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/175.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/7/75/Li_Xin_Hero_Icon.png'
  },

  // --- ASSASSINS (Suikastçılar) ---
  { 
    aovName: 'Nakroth', hokName: 'Han Xin', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Oyunun en mobil suikastçısı.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/130.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/a/a0/Han_Xin_Hero_Icon.png'
  },
  { 
    aovName: 'Murad', hokName: 'Li Bai', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Görünmezlik ve seri saldırılar.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/139.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/5/5e/Li_Bai_Hero_Icon.png'
  },
  { 
    aovName: 'Butterfly', hokName: 'Ake', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Sıfırlanan bekleme süreleri.', matchSimilarity: 92,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/107.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/5/53/A_Ke_Hero_Icon.png'
  },
  { 
    aovName: 'Wukong', hokName: 'Wukong', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Kritik hasar ve gizlilik.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/af.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/3/3b/Sun_Wukong_Hero_Icon_HoK.png'
  },

  // --- TANKS (Tanklar) ---
  { 
    aovName: 'Grakk', hokName: 'Zhong Kui', role: HeroRole.TANK, lane: 'Destek', description: 'Efsanevi kanca ve yutma yeteneği.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/118.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/0/00/Zhong_Kui_Hero_Icon.png'
  },
  { 
    aovName: 'Cresht', hokName: 'Zhang Fei', role: HeroRole.TANK, lane: 'Destek', description: 'Dönüşerek devleşen koruyucu tank.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/129.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/0/02/Zhang_Fei_Hero_Icon.png'
  },
  { 
    aovName: 'Thane', hokName: 'Xiang Yu', role: HeroRole.TANK, lane: 'Destek', description: 'Geri itme ve yüksek dayanıklılık.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/102.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/0/0e/Xiang_Yu_Hero_Icon.png'
  },

  // --- SUPPORTS (Destekler) ---
  { 
    aovName: 'Alice', hokName: 'Sun Bin', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Hızlandırma ve alan etkili susturma.', matchSimilarity: 95,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/111.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/5/5d/Sun_Bin_Hero_Icon.png'
  },
  { 
    aovName: 'Helen', hokName: 'Cai Wenji', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Sürekli şifa sağlayan destek.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/50.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/0/07/Cai_Wenji_Hero_Icon.png'
  },
  { 
    aovName: 'Aya', hokName: 'Yao', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Takım arkadaşlarının üzerine binerek koruma sağlar.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/211.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/a/a2/Yao_Hero_Icon.png'
  },
  { 
    aovName: 'Rouie', hokName: 'Da Qiao', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Takımı ışınlayan portal yetenekleri.', matchSimilarity: 100,
    aovIconUrl: 'https://cdn.id.garenanow.com/games/aov/hero/icon/199.png',
    hokIconUrl: 'https://liquipedia.net/commons/images/9/98/Da_Qiao_Hero_Icon.png'
  }
];
