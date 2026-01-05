import bcrypt from "bcrypt";

export class PasswordHasher {
  private static SAL_ROUNDS = 10;
  static async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.SAL_ROUNDS);
  }
  static async compare(planPassword: string, hashedPassword: string):Promise<boolean>
  {
    return bcrypt.compare(planPassword, hashedPassword)
  }
}
