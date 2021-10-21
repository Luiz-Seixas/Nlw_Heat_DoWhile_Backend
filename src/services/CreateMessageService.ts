import prismaClient from "../prisma";

// include é para incluir mais algo na resposta pro front, no caso, incluir as informações do usuário que está cadastrando
class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    return message;
  }
}

export { CreateMessageService };
