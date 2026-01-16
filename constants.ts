
import { HeroMatch, HeroRole } from './types';

const LP_BASE = 'https://liquipedia.net';

export const HERO_MAPPINGS: HeroMatch[] = [
  // --- ASSASSINS ---
  { 
    aovName: 'Nakroth', hokName: 'Han Xin', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Oyunun en mobil suikastçısı.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/9/9e/Nakroth_2020_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/a/af/Han_Xin_Hero_Icon.png'
  },
  { 
    aovName: 'Murad', hokName: 'Li Bai', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Dokunulmazlık ve yüksek anlık hasar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/0/05/Murad_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/9/9e/Li_Bai_Hero_Icon.png'
  },
  { 
    aovName: 'Butterfly', hokName: 'Arke', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Öldürme sonrası yetenek sıfırlama.', matchSimilarity: 92,
    aovIconUrl: LP_BASE + '/commons/images/3/3f/Butterfly_Hero_Icon_2019.png',
    hokIconUrl: LP_BASE + '/commons/images/5/53/A_Ke_Hero_Icon.png'
  },
  { 
    aovName: 'Wukong', hokName: 'Sun Wukong', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Kritik hasar ve görünmezlik.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/c/c3/WuKong_2019_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/6/6f/Sun_Wukong_Hero_Icon.png'
  },
  { 
    aovName: 'Airi', hokName: 'Mulan', role: HeroRole.ASSASSIN, lane: 'Karanlık Koridor', description: 'Mobil ninja savaşçı.', matchSimilarity: 85,
    aovIconUrl: LP_BASE + '/commons/images/7/75/Airi_Hero_New_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/d/d4/Hua_Mulan_Hero_Icon.png'
  },
  { 
    aovName: 'Zata', hokName: 'Shangguan', role: HeroRole.ASSASSIN, lane: 'Orta Koridor', description: 'Havada uçan suikastçı büyücü.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/d/de/Zata_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/0/0a/Shangguan_Wan%27er_Hero_Icon.png'
  },
  { 
    aovName: 'Paine', hokName: 'Sima Yi', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Gölge formuyla mesafe kat eden büyücü.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/7/7e/Paine_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/d/d9/Sima_Yi_Hero_Icon.png'
  },
  { 
    aovName: 'Kriknak', hokName: 'Nakoruru', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Havadan dalış yapan böcek.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/b/b3/Kriknak_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/a/ab/Nakoruru_Hero_Icon.png'
  },
  { 
    aovName: 'Raz', hokName: 'Mai Shiranui', role: HeroRole.ASSASSIN, lane: 'Orta Koridor', description: 'Kombo ve yetenek bazlı boksör.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/c/ca/Raz_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/1/13/Mai_Shiranui_Hero_Icon.png'
  },

  // --- MAGES ---
  { 
    aovName: 'Veera', hokName: 'Daji', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Basit ve etkili anlık hasar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/49/Veera_hero_icon_2022.jpg',
    hokIconUrl: LP_BASE + '/commons/images/3/39/Daji_Hero_Icon.png'
  },
  { 
    aovName: 'Krixi', hokName: 'Xiao Qiao', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Geniş alan hasarı ve dürtme.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/44/Krixi_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/f/f9/Xiao_Qiao_Hero_Icon.png'
  },
  { 
    aovName: 'Tulen', hokName: 'Kongming', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Yıldırım pasifiyle yüksek hasar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/47/Tulen_Hero_New_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/4/4e/Zhuge_Liang_Hero_Icon.png'
  },
  { 
    aovName: 'Natalya', hokName: 'Angela', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Ölümcül lazer ultisi.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/6/69/Natalya_Hero_New_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/5/5a/Angela_Hero_Icon.png'
  },
  { 
    aovName: 'Diao Chan', hokName: 'Wang Zhaojun', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Dondurma ve yavaşlatma odaklı.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/3/38/Diao_chan_2019_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/1/1f/Wang_Zhaojun_Hero_Icon.png'
  },
  { 
    aovName: 'Lauriel', hokName: 'Diaochan (HoK)', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Sürekli dans eden yetenek makinesi.', matchSimilarity: 95,
    aovIconUrl: LP_BASE + '/commons/images/7/70/Lauriel_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/a/a9/KOG_Diaochan_Hero_Icon.png'
  },
  { 
    aovName: 'Aleister', hokName: 'Liang', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Kilitleme ve kontrol ustası.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/thumb/5/56/Aleister_hero_icon_2022.jpg/180px-Aleister_hero_icon_2022.jpg',
    hokIconUrl: LP_BASE + '/commons/images/b/bd/Zhang_Liang_2019.jpg'
  },
  { 
    aovName: 'Mganga', hokName: 'Dr Bian', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Zehir ve sürekli şifa.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/1/1b/Mganga_Hero_Icon_2022.png',
    hokIconUrl: LP_BASE + '/commons/images/2/26/Bian_Que_Hero_Icon.png'
  },

  // --- WARRIORS ---
  { 
    aovName: 'Arthur', hokName: 'Arthur', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Zırhlı şövalye.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/6/6f/Arthur_hero_icon_2022.jpg',
    hokIconUrl: LP_BASE + '/commons/images/b/b5/Arthur_HOK_Hero_Icon.png'
  },
  { 
    aovName: 'Lu Bu', hokName: 'Cao Cao', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Yüksek can çalma ve dayanıklılık.', matchSimilarity: 98,
    aovIconUrl: LP_BASE + '/commons/images/a/a9/Lubu_2019_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/0/00/Cao_Cao_Hero_Icon.png'
  },
  { 
    aovName: 'Maloch', hokName: 'Lu Bu (HoK)', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Gerçek hasar ve alan saldırıları.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/4c/Maloch_Hero_Icon_2019.png',
    hokIconUrl: LP_BASE + '/commons/images/2/2f/Lu_Bu_2022_Hero_Icon.png'
  },
  { 
    aovName: 'Yena', hokName: 'Mulan', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Çift formlu kombo kraliçesi.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/7/73/Yena_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/d/d4/Hua_Mulan_Hero_Icon.png'
  },
  { 
    aovName: 'Skud', hokName: 'Lian Po', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Yıkıcı yumruklar ve tanklık.', matchSimilarity: 80,
    aovIconUrl: LP_BASE + '/commons/images/4/4c/Skud_Hero_New_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/2/20/Lian_Po_Hero_Icon.png'
  },

  // --- MARKSMEN ---
  { 
    aovName: 'Valhein', hokName: 'Di Renjie', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Sersemleten kart atışları.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/6/63/Valhein_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/9/94/Di_Renjie_Hero_Icon.png'
  },
  { 
    aovName: 'Violet', hokName: 'Lady Sun', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Takla atarak anlık hasar vurma.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/7/73/Violet_2019_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/4/40/Sun_Shangxiang_Hero_Icon.png'
  },
  { 
    aovName: 'Yorn', hokName: 'Hou Yi', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Sürekli ok atışı ve global ulti.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/0/05/Yorn_Hero_Icon_2019.png',
    hokIconUrl: LP_BASE + '/commons/images/4/49/Hou_Yi_Hero_Icon.png'
  },
  { 
    aovName: 'Elsu', hokName: 'Shouyue', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Keskin nişancı ve kamuflaj.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/8/88/Elsu_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/9/9c/BaiLi_ShouYue_Hero_Icon.png'
  },
  { 
    aovName: 'Hayate', hokName: 'Marco Polo', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Kritik vuran gerçek hasar mermileri.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/45/Hayate_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/5/58/Marco_Polo_Hero_Icon.png'
  },
  { 
    aovName: 'Erin', hokName: 'Erin', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Büyü hasarı vuran nişancı.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/8/87/Ailin_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/8/87/Ailin_Hero_Icon.png'
  },

  // --- SUPPORTS ---
  { 
    aovName: 'Alice', hokName: 'Sun Bin', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Zaman yavaşlatma ve hızlandırma.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/9/9c/Alice_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/d/d9/Sun_Bin_Hero_Icon.png'
  },
  { 
    aovName: 'Grakk', hokName: 'Zhong Kui', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Efsanevi kanca ve çekme.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/f/fb/Grakk_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/b/b4/Zhong_Kui_Hero_Icon.png'
  },
  { 
    aovName: 'Helen', hokName: 'Cai Yan', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Alan etkili şifa ve koruma.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/thumb/e/e1/Helen_Hero_Icon.jpg/180px-Helen_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/f/f8/Cai_Wenji_Hero_Icon.png'
  },
  { 
    aovName: 'Aya', hokName: 'Yaria', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Dost kahramanın üzerine binerek kalkan sağlar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/0/0b/Aya_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/d/d3/Yao_Hero_Icon.png'
  },
  { 
    aovName: 'Rouie', hokName: 'Da Qiao', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Portallar ile takımı ışınlama.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/6/61/Rouie_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/3/30/Da_Qiao_Hero_Icon.png'
  }
];
