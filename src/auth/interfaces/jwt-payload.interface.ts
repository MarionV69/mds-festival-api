import { Role } from 'src/users/enums/role.enum';

export interface JwtPayload {
  id: number;
  role: Role;
  email: string;
}
