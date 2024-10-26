export interface User {
  id: string;
  email: string;
  name: string;
  spinsRemaining: number;
}

export interface Prize {
  id: string;
  name: string;
  description: string;
  value: number;
  probability: number;
}

export interface GameState {
  isSpinning: boolean;
  currentPrize: Prize | null;
  spinsRemaining: number;
}