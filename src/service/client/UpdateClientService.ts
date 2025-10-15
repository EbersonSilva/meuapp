import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repository/ClientRepositories";
import { IClientRequest } from "../../interface/IClientRequest";

export class UpdateClientService {
  async execute({ id, name, cpf, email, address, city, state, zipcode, number }: IClientRequest) {
    const clientRepository = getCustomRepository(ClientRepositories);
    // Verifica se o ID foi fornecido
    if (!id) {
      throw new Error("ID do cliente é obrigatório");
    }
    // Verifica se o cliente existe
    try {
      const client = await clientRepository.findOne(id);
      if (!client) {
        throw new Error("Cliente não encontrado");
      }
      // Verifica se o CPF já existe para outro cliente
      const clientAlreadyExists = await clientRepository.findOne({ cpf });

      if (clientAlreadyExists && clientAlreadyExists.id !== id) {
        throw new Error("Já existe um cliente com este CPF");
      }

      // Cria um objeto com os dados atuais
      const clientData = { ...client };
      // Atualiza apenas os campos fornecidos
      if (name !== undefined) clientData.name = name;
      if (cpf !== undefined) clientData.cpf = cpf;
      if (email !== undefined) clientData.email = email;
      if (address !== undefined) clientData.address = address;
      if (city !== undefined) clientData.city = city;
      if (state !== undefined) clientData.state = state;
      if (zipcode !== undefined) clientData.zipcode = zipcode;
      if (number !== undefined) clientData.number = number;

      // Salva as alterações
      await clientRepository.save(clientData);

      // Busca novamente para garantir que retorna os dados atualizados
      const updatedClient = await clientRepository.findOne(id);
      // Retorna o cliente atualizado
      return updatedClient;
    } catch (error) {
      throw new Error(error.message || "Erro ao atualizar cliente");
    }
  } 
}