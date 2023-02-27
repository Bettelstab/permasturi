import { Role } from "@prisma/client";

export function parseRole(role: string): Role {
  if (Object.values(Role).includes(role as Role)) {
    return role as Role;
  }
  throw new Error(`Invalid role: ${role}`);
}
