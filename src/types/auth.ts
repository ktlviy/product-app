import type { User } from "firebase/auth";

export interface RegisterUserProps {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserProps {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  logout: () => Promise<void>;
}

export interface ProductRequestRoute {
  q?: string;
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: "asc" | "desc";
}
