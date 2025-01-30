export interface Token {
  id: string;
  name: string;
  creator: string;
  marketCap: string;
  description: string;
}

export interface TokenCardProps {
  token: Token;
}

export interface TokenGridProps {
  tokens: Token[];
} 