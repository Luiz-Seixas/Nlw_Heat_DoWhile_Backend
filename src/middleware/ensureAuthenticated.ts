import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //pegando token de autenticação
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      errorCode: "token.invalid",
    });
  }

  // Bearer (token)
  // [0] Bearer
  // [1] (token)

  // a virgula esta dizendo para ignorar o bearer
  // split() está separando o código de authToken pelos espaços entre o token e o bearer
  const [, token] = authToken.split(" ");

  // verify vai verificar se esse token é válido, recebe como parâmetro o token em si e o secret que esta salvo na .env
  // estou separando, das informações que ele devolve, o sub (id do usuário)

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    req.user_id = sub;

    // next está fazendo com que depois que ele execute tudo aqui ele passe a executar a função da frente na rota, no caso o controller de  message
    return next();
  } catch (error) {
    return res.status(401).json({
      errorCode: "token.expired",
    });
  }
}
