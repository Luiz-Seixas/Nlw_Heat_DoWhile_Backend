// declarando qual biblioteca eu quero sobrescrever
declare namespace Express {
  // passando dentro de onde (qual interface) quero por a informação, no caso, dentro de Request
  export interface Request {
    user_id: string;
  }
}
