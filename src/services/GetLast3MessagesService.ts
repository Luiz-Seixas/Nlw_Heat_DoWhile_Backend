import prismaClient from "../prisma";

// include é para incluir mais algo na resposta pro front, no caso, incluir as informações do usuário que está cadastrando
class GetLast3MessagesService {
  async execute() {
    // take 3 diz pra pegar apensas 3 mensagens. OrderBy diz pra pegar em ordem decrescente na data, da ultima pras anteriores
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: true,
      },
    });

    return messages;
  }
}

export { GetLast3MessagesService };
