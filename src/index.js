const express = require('express');

const app = express();
app.use(express.json());

app.get("/produtos", (request,response) => {
    return  response.json(        
        [{
                "id": "1",
                "nome": "Caderno Pequeno",
                "image": "caderno.png",
                "categoria": "7",
                "descricao": "caderno universitario 40 folhas",
                "status": "Ativo"
                
            },
            {
                "id": 2,
                "nome": "Caderno Grande",
                "image": "caderno.png",
                "categoria": "7",
                "descricao": "caderno universitario 20 folhas",
                "status": "Ativo"
            }
        ]
    );
});

app.post("/produtos", (request,response) => {    
    const body  = request.body;
    console.log(body)
    const {nome,image,categoria,descricao,status}  = request.body;
    min = Math.ceil(0);
    max = Math.floor(99);
    const id= Math.floor(Math.random() * (max - min)) + min

    var objeto = {
        id,
        nome,
        image,
        categoria,
        status,
        descricao
    }

    return  response.json(objeto);
});

app.get("/produtos/index/:id", (request,response) => {    
    const id= request.params.id;
    console.log(id)
    return  response.json(        
       [{
               "id": "1",
               "nome": "Caderno Pequeno",
               "image": "caderno.png",
               "categoria": "7",
               "descricao": "caderno universitario 40 folhas",
               "status": "Ativo"
               
           }
       ]
   );
});

app.get("/produtos/list/", (request,response) => {    
    console.log(request.query)
    const { name,categId } = request.query;
    
    console.log(name)
    console.log(categId)
    const id=1
    const image="imagem 1"
    const status="ativo"
    const descricao="Desc 01"
    var objeto = {
        id,
        name,
        image,
        categId,
        status,
        descricao
    }

    return  response.json(objeto);
});

app.put("/produtos/:id", (request,response) => {    
    const id= request.params.id;
    const body  = request.body;
    console.log(id)
    const {nome,image,categoria,descricao,status}  = request.body;

    var objeto = {
        id,
        nome,
        image,
        categoria,
        status,
        descricao
    }

    return  response.json(objeto);
});

app.delete("/products/:id", (request,response) => {    
    const id= request.params.id;
   
    return  response.json({"message": "Produto Excluído com Sucesso"});
});


//Categorias
app.post("/categoria", (request,response) => {    
    const body  = request.body;
    console.log(body)
    const {nome,descricao}  = request.body;
    min = Math.ceil(0);
    max = Math.floor(99);
    const id= Math.floor(Math.random() * (max - min)) + min

    var objeto = {
        id,
        nome,
        descricao
    }
    return  response.json(objeto);
});

app.put("/categoria/:id", (request,response) => {    
    const id= request.params.id;
    const body  = request.body;
    console.log(id)
    const {nome,image,categoria,descricao,status}  = request.body;

    var objeto = {
        id,
        nome,
        image,
        categoria,
        status,
        descricao
    }

    return  response.json(objeto);
});

app.get("/categoria/index/:id", (request,response) => {
    return  response.json(        
        [   
            {
                "id": "1",
                "nome": "Caderno",
                "descricao": "Categotia de caderno",
                "status": "Ativo"
            }
        ]
    );
});

app.get("/categoria/list/", (request,response) => {    
    console.log(request.query)
    const { name } = request.query;
    
    console.log(name)
    const id=1
    const descricao="Categotia de caderno"
    var objeto = {
        id,
        name,
        descricao
    }
    return  response.json(objeto);
});

app.delete("/categoria/:id", (request,response) => {    
    const id= request.params.id;
   
    return  response.json({"message": "categoria Excluído com Sucesso"});
});


//Clientes
app.post("/clientes", (request,response) => {    
    const body  = request.body;
    console.log(body)
    const {nome, telefone, email, senha, cpf, endereço, cidade, estado, bairro}  = request.body;
    min = Math.ceil(0);
    max = Math.floor(99);
    const id= Math.floor(Math.random() * (max - min)) + min

    var objeto = {
        id,
        nome,
        telefone,
        email, 
        senha, 
        cpf, 
        endereço, 
        cidade, 
        estado, 
        bairro
    }
    return  response.json(objeto);
});

app.put("/clientes/:id", (request,response) => {    
    const id= request.params.id;
    const body  = request.body;
    console.log(id)
    const {nome, telefone, email, senha, cpf, endereço, cidade, estado, bairro}  = request.body;

    var objeto = {
        id,
        nome,
        telefone,
        email, 
        senha, 
        cpf, 
        endereço, 
        cidade, 
        estado, 
        bairro
    }
    return  response.json(objeto);
});

app.get("/clientes/index/:id", (request,response) => {
    return  response.json(        
        [   
            {
                "id": "1",
                "nome": "Cliente1",
                "telefone": "11111-1111",
                "email": "cliente1@mail", 
                "senha": "1234", 
                "cpf": "111.111.111-11", 
                "endereço": "Rua 1", 
                "cidade": "Cidade1", 
                "estado": "Estado1", 
                "bairro": "Bairro1"
            }
        ]
    );
});

app.get("/clientes/nome/", (request,response) => {    
    console.log(request.query)
    const { name } = request.query;
    console.log(name)

    const id=1
    const telefone="1111-1111"
    const email="cliente1@mail"
    const senha="1234"
    const cpf="111.111.111-11" 
    const endereço="Rua 1"
    const cidade="Cidade1" 
    const estado="Estado1" 
    const bairro="Bairro1"

    var objeto = {
        id,
        nome,
        telefone,
        email, 
        senha, 
        cpf, 
        endereço, 
        cidade, 
        estado, 
        bairro
    }
    return  response.json(objeto);
});

app.get("/clientes/endereco/", (request,response) => {    
    console.log(request.query)
    const { endereço, cidade, estado } = request.query;
    console.log(endereço, cidade, estado)

    const id=1
    const nome= "Cliente1"
    const telefone="1111-1111"
    const email="cliente1@mail"
    const senha="1234"
    const cpf="111.111.111-11" 

    var objeto = {
        id,
        nome,
        telefone,
        email, 
        senha, 
        cpf, 
        endereço, 
        cidade, 
        estado, 
        bairro
    }
    return  response.json(objeto);
});


app.delete("/clientes/:id", (request,response) => {    
    const id= request.params.id;
   
    return  response.json({"message": "cliente Excluído com Sucesso"});
});

//Vendas
app.post("/vendas", (request,response) => {    
    const body  = request.body;
    console.log(body)
    const {produto, cliente, quantidade, totalBruto , desconto, valorTotal}  = request.body;
    min = Math.ceil(0);
    max = Math.floor(99);
    const id= Math.floor(Math.random() * (max - min)) + min

    var objeto = {
        id,
        produto, 
        cliente, 
        quantidade, 
        totalBruto, 
        desconto, 
        valorTotal
    }
    return  response.json(objeto);
});

app.put("/vendas/:id", (request,response) => {    
    const id= request.params.id;
    const body  = request.body;
    console.log(id)
    const {produto, cliente, quantidade, totalBruto , desconto, valorTotal}  = request.body;

    var objeto = {
        id,
        produto, 
        cliente, 
        quantidade, 
        totalBruto, 
        desconto, 
        valorTotal
    }
    return  response.json(objeto);
});

app.get("/vendas/index/:id", (request,response) => {
    return  response.json(        
        [   
            {
                "id": "1",
                "produto": "Produto1",
                "cliente": "Cliente1", 
                "quantidade": 2, 
                "totalBruto": 23.5, 
                "desconto": 10, 
                "valorTotal": 13.5
            }
        ]
    );
});

app.get("/vendas/produto/", (request,response) => {    
    console.log(request.query)
    const { produto } = request.query;
    
    console.log(produto)
    const id=1
    const cliente= "Cliente1"
    const quantidade= 2
    const totalBruto= 23.5
    const desconto= 10
    const valorTotal= 13.5
    
    var objeto = {
        id,
        produto, 
        cliente, 
        quantidade, 
        totalBruto, 
        desconto, 
        valorTotal
    }
    return  response.json(objeto);
});

app.get("/vendas/cliente/", (request,response) => {    
    console.log(request.query)
    const { cliente } = request.query;
    
    console.log(cliente)
    const id=1
    const produto= "Produto1"
    const quantidade= 2
    const totalBruto= 23.5
    const desconto= 10
    const valorTotal= 13.5
    
    var objeto = {
        id,
        produto, 
        cliente, 
        quantidade, 
        totalBruto, 
        desconto, 
        valorTotal
    }
    return  response.json(objeto);
});

app.delete("/vendas/:id", (request,response) => {    
    const id= request.params.id;
   
    return  response.json({"message": "venda Excluído com Sucesso"});
});

app.listen(3000);
