
import { HeroMatch, HeroRole } from './types';

const LP_BASE = 'https://liquipedia.net';

export const HERO_MAPPINGS: HeroMatch[] = [
  // --- ASSASSINS (SUİKASTÇILAR) ---
  { 
    aovName: 'Nakroth', hokName: 'Han Xin', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Yüksek mobilite ve orman kontrolü.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/9/9e/Nakroth_2020_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/a/af/Han_Xin_Hero_Icon.png'
  },
  { 
    aovName: 'Murad', hokName: 'Li Bai', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Dokunulmazlık alan yetenekler ve ani hasar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/0/05/Murad_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/9/9e/Li_Bai_Hero_Icon.png'
  },
  { 
    aovName: 'Butterfly', hokName: 'Arke', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Alt etme sonrası yetenek bekleme süresi sıfırlama.', matchSimilarity: 92,
    aovIconUrl: LP_BASE + '/commons/images/3/3f/Butterfly_Hero_Icon_2019.png',
    hokIconUrl: LP_BASE + '/commons/images/5/53/A_Ke_Hero_Icon.png'
  },
  { 
    aovName: 'Quillen', hokName: 'Arke', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Arkadan vuruşlarda %100 kritik hasar.', matchSimilarity: 98,
    aovIconUrl: LP_BASE + '/commons/images/5/58/Quillen_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/5/53/A_Ke_Hero_Icon.png'
  },
  { 
    aovName: 'Wukong', hokName: 'Sun Wukong', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Görünmezlik ve kritik balyoz darbeleri.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/c/c3/WuKong_2019_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/6/6f/Sun_Wukong_Hero_Icon.png'
  },
  { 
    aovName: 'Kriknak', hokName: 'Nakoruru', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Havadan dalış ve patlayıcı hasar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/b/b3/Kriknak_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/a/ab/Nakoruru_Hero_Icon.png'
  },
  { 
    aovName: 'Paine', hokName: 'Sima Yi', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Hızlı mesafe kat eden büyücü suikastçı.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/7/7e/Paine_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/d/d9/Sima_Yi_Hero_Icon.png'
  },
  { 
    aovName: 'Keera', hokName: 'Zilong', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Duvarların içinden geçme ve yüksek mobilite.', matchSimilarity: 80,
    aovIconUrl: LP_BASE + '/commons/images/7/74/Keera_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/9/97/Zhao_Yun_Hero_Icon.png'
  },
  { 
    aovName: 'Enzo', hokName: 'Xuance', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Kanca mekaniği ile rakipleri savurma.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/9/92/Enzo_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/e/ef/BaiLi_XuanCe_Hero_Icon.png'
  },
  { 
    aovName: 'Kaine', hokName: 'Gao Changgong', role: HeroRole.ASSASSIN, lane: 'Orman', description: 'Uzun süreli görünmezlik ve anlık infaz.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/thumb/c/cb/Kaine_Hero_Icon.png/180px-Kaine_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/c/c6/Lan_Ling_Wan_Hero_Icon.png'
  },

  // --- MAGES (BÜYÜCÜLER) ---
  { 
    aovName: 'Veera', hokName: 'Daji', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Tekli hedefe yüksek anlık hasar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/49/Veera_hero_icon_2022.jpg',
    hokIconUrl: LP_BASE + '/commons/images/3/39/Daji_Hero_Icon.png'
  },
  { 
    aovName: 'Krixi', hokName: 'Xiao Qiao', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Alan hasarı ve dürtme yetenekleri.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/44/Krixi_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/f/f9/Xiao_Qiao_Hero_Icon.png'
  },
  { 
    aovName: 'Natalya', hokName: 'Angela', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Hareketsiz rakipleri eriten lazer ışını.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/6/69/Natalya_Hero_New_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/5/5a/Angela_Hero_Icon.png'
  },
  { 
    aovName: 'Tulen', hokName: 'Kongming', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Pasif yükleri ile yüksek hasar ve mobilite.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/47/Tulen_Hero_New_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/4/4e/Zhuge_Liang_Hero_Icon.png'
  },
  { 
    aovName: 'Lauriel', hokName: 'Diaochan (HoK)', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Yetenek kullandıkça bekleme süresi kısalır.', matchSimilarity: 98,
    aovIconUrl: LP_BASE + '/commons/images/7/70/Lauriel_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/a/a9/KOG_Diaochan_Hero_Icon.png'
  },
  { 
    aovName: 'Diao Chan', hokName: 'Wang Zhaojun', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Rakipleri dondurma ve yavaşlatma.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/3/38/Diao_chan_2019_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/1/1f/Wang_Zhaojun_Hero_Icon.png'
  },
  { 
    aovName: 'Aleister', hokName: 'Liang', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Uzun süreli sabitleme kontrolü.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/thumb/5/56/Aleister_hero_icon_2022.jpg/180px-Aleister_hero_icon_2022.jpg',
    hokIconUrl: LP_BASE + '/commons/images/b/bd/Zhang_Liang_2019.jpg'
  },
  { 
    aovName: 'Raz', hokName: 'Mai Shiranui', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Kombo ve enerji bazlı suikastçı büyücü.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/c/ca/Raz_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/1/13/Mai_Shiranui_Hero_Icon.png'
  },
  { 
    aovName: 'Mganga', hokName: 'Dr Bian', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Zehir yükleri ve sürekli şifa/hasar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/1/1b/Mganga_Hero_Icon_2022.png',
    hokIconUrl: LP_BASE + '/commons/images/2/26/Bian_Que_Hero_Icon.png'
  },
  { 
    aovName: 'Sephera', hokName: 'Yang Yuhuan', role: HeroRole.MAGE, lane: 'Orta Koridor', description: 'Hem hasar hem şifa veren enstrümantal yetenekler.', matchSimilarity: 95,
    aovIconUrl: LP_BASE + '/commons/images/4/4c/Sephera_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/7/76/Yang_Yuhuan_Hero_Icon.png'
  },

  // --- WARRIORS (SAVAŞÇILAR) ---
  { 
    aovName: 'Arthur', hokName: 'Arthur', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Dayanıklı ve kolay oynanışlı şövalye.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/6/6f/Arthur_hero_icon_2022.jpg',
    hokIconUrl: LP_BASE + '/commons/images/b/b5/Arthur_HOK_Hero_Icon.png'
  },
  { 
    aovName: 'Lu Bu', hokName: 'Cao Cao', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Yüksek can çalma ve düello yeteneği.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/a/a9/Lubu_2019_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/0/00/Cao_Cao_Hero_Icon.png'
  },
  { 
    aovName: 'Maloch', hokName: 'Lu Bu', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Gerçek hasar vuran geniş alanlı saldırılar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/4c/Maloch_Hero_Icon_2019.png',
    hokIconUrl: LP_BASE + '/commons/images/2/2f/Lu_Bu_2022_Hero_Icon.png'
  },
  { 
    aovName: 'Yena', hokName: 'Mulan', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'İki farklı form ve karmaşık kombo yapısı.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/7/73/Yena_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/d/d4/Hua_Mulan_Hero_Icon.png'
  },
  { 
    aovName: 'Omen', hokName: 'Lao Fuzi', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Hasar azaltma ve rakibi hapsetme.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/0/08/Omen_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/7/7b/Lao_Fu_Zi_Hero_Icon.png'
  },
  { 
    aovName: 'Richter', hokName: 'Guan Yu', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Zemin türüne göre yetenek değiştiren savaşçı.', matchSimilarity: 90,
    aovIconUrl: LP_BASE + '/commons/images/f/fa/Richter_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/2/21/Guan_Yu_Hero_Icon.png'
  },
  { 
    aovName: 'Ryoma', hokName: 'Ukyo Tachibana', role: HeroRole.WARRIOR, lane: 'Karanlık Koridor', description: 'Menzilli dürtme ve yüksek anlık hasar.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/0/0d/Ryoma_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/b/b3/Ukyo_Tachibana_Hero_Icon.png'
  },

  // --- MARKSMEN (NİŞANCILAR) ---
  { 
    aovName: 'Valhein', hokName: 'Di Renjie', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Hızlı saldırı ve kitle kontrolü kartları.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/6/63/Valhein_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/9/94/Di_Renjie_Hero_Icon.png'
  },
  { 
    aovName: 'Violet', hokName: 'Lady Sun', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Takla atarak güçlendirilmiş saldırı yapma.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/7/73/Violet_2019_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/4/40/Sun_Shangxiang_Hero_Icon.png'
  },
  { 
    aovName: 'Yorn', hokName: 'Hou Yi', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Saf saldırı hızı ve global ok ultisi.', matchSimilarity: 95,
    aovIconUrl: LP_BASE + '/commons/images/0/05/Yorn_Hero_Icon_2019.png',
    hokIconUrl: LP_BASE + '/commons/images/4/49/Hou_Yi_Hero_Icon.png'
  },
  { 
    aovName: 'Elsu', hokName: 'Shouyue', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Görünmezlik ve keskin nişancı atışları.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/8/88/Elsu_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/9/9c/BaiLi_ShouYue_Hero_Icon.png'
  },
  { 
    aovName: 'Hayate', hokName: 'Marco Polo', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Mobil nişancı ve gerçek hasar pasifi.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/4/45/Hayate_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/5/58/Marco_Polo_Hero_Icon.png'
  },
  { 
    aovName: 'Erin', hokName: 'Erin', role: HeroRole.MARKSMAN, lane: 'Ejderha Koridoru', description: 'Büyü hasarı odaklı nişancı.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/8/87/Ailin_Hero_Icon.png',
    hokIconUrl: LP_BASE + '/commons/images/8/87/Ailin_Hero_Icon.png'
  },

  // --- SUPPORTS & TANKS ---
  { 
    aovName: 'Alice', hokName: 'Sun Bin', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Hızlandırma ve zaman bazlı kontrol.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/9/9c/Alice_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/d/d9/Sun_Bin_Hero_Icon.png'
  },
  { 
    aovName: 'Grakk', hokName: 'Zhong Kui', role: HeroRole.TANK, lane: 'Destek', description: 'Rakibi kendine çeken efsanevi kanca.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/f/fb/Grakk_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/b/b4/Zhong_Kui_Hero_Icon.png'
  },
  { 
    aovName: 'Helen', hokName: 'Cai Yan', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Yüksek miktar alan şifası ve koruma.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/thumb/e/e1/Helen_Hero_Icon.jpg/180px-Helen_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/f/f8/Cai_Wenji_Hero_Icon.png'
  },
  { 
    aovName: 'Aya', hokName: 'Yaria', role: HeroRole.SUPPORT, lane: 'Destek', description: 'Dost kahramana binerek koruma sağlama.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/0/0b/Aya_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/d/d3/Yao_Hero_Icon.png'
  },
  { 
    aovName: 'Thane', hokName: 'Xiang Yu', role: HeroRole.TANK, lane: 'Destek', description: 'İttirme mekaniği ve dayanıklılık.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/1/14/Thane_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/a/ac/Xiang_Yu_Hero_Icon.png'
  },
  { 
    aovName: 'Mina', hokName: 'Bai Qi', role: HeroRole.TANK, lane: 'Destek', description: 'Rakipleri kışkırtma ve hasar çekme.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/3/38/Mina_Hero_Icon.jpg',
    hokIconUrl: LP_BASE + '/commons/images/f/fb/Bai_Qi_Hero_Icon.png'
  },
  { 
    aovName: 'Cresht', hokName: 'Zhang Fei', role: HeroRole.TANK, lane: 'Destek', description: 'Öfke biriktirerek dev canavara dönüşme.', matchSimilarity: 100,
    aovIconUrl: LP_BASE + '/commons/images/c/c6/Cresht_Hero_Icon_2019.png',
    hokIconUrl: LP_BASE + '/commons/images/9/9e/Zhang_Fei_Hero_Icon.png'
  }
];
