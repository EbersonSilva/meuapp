import express, {Request, Response, NextFunction, response} from "express";
import "express-async-errors"
import "reflect-metadata"
import { router } from "./routes";

const app = express(); //instancia

app.use(express.json()); //fazer o express entender json

app.use(router); 

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if(err instanceof Error) {
		return response.status(400).json({
			error: err.message
		})
	}
	return response.status(500).json({
		status: "error",
		message: "Internal Server Error"
	})
});

// Rota para a raiz do servidor
app.get("/", (req, res) => {
	res.send("API está rodando!");
});

console.log("Start at => 3000"); 
app.listen(3000); //porta que a aplicação vai rodar


//este arquivo inicializa e executa o servidor da sua aplicação.