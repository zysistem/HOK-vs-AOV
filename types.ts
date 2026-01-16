
export enum HeroRole {
  MAGE = 'Büyücü',
  WARRIOR = 'Savaşçı',
  ASSASSIN = 'Suikastçı',
  MARKSMAN = 'Nişancı',
  SUPPORT = 'Destek',
  TANK = 'Tank'
}

export type HeroLane = 'Orta Koridor' | 'Karanlık Koridor' | 'Ejderha Koridoru' | 'Orman' | 'Destek';

export interface HeroMatch {
  aovName: string;
  hokName: string;
  role: HeroRole;
  lane: HeroLane;
  description: string;
  matchSimilarity: number;
  aovIconUrl?: string;
  hokIconUrl?: string;
}

export interface AppState {
  searchTerm: string;
  selectedHero: HeroMatch | null;
  isLoading: boolean;
  selectedRole: HeroRole | 'ALL';
}
