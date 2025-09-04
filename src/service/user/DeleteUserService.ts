import { IUserRequest } from "../../interface/IUserRequest";    

export class DeleteUserService {
    async execute(id:any) {
  
        console.log(id);
        var msg = {
            message:"Registro excluido com sucesso"
          }
      
          return msg;
       
    }
  }
  