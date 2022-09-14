export type Provider = 'google' | 'cognito';

export class User {
  id: number;
  provider: Provider;
  providerId: string;
  username: string;
  password: string;
  name?: string;
  options: string;
  ip_addr: string;
  last_visit: Date;
  created_at: Date;
  updated_at: Date;
  status_id: number;
}
