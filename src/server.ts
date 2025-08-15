import express from "express";
import { router } from "./routes";

const app = express(); //instancia

app.use(express.json()); //fazer o express entender json

app.use(router); 

// Rota para a raiz do servidor
app.get("/", (req, res) => {
	res.send("API está rodando!");
});

console.log("Start at => 3000"); 
app.listen(3000); //porta que a aplicação vai rodar


//este arquivo inicializa e executa o servidor da sua aplicação.