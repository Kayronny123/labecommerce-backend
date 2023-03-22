import {users,products, purchase, getAllUsers, createProducts, getAllProducts, getProductById, queryProductsByName, getAllPurchaseId, createPurchase} from './database'
import { Category, Product, Purchase, User } from './types'
import express, {Request, Response} from 'express'
import cors from 'cors'

// criando servidor express
const app = express()
// configuração de middleware que entrega respostas em JSON
app.use(express.json())
// configurando middleware para habilitar o CORS
app.use(cors())

// habilitando servidor para rodar na porta 3003
app.listen(3003,()=>{
    console.log('Servidor rodando com sucesso na porta 3003')
})
// criando endpoint para testar funcionalidade 
app.get("/ping",(req: Request, res: Response)=>{
    res.send("Pong!")
})
app.get("/users", (req: Request, res: Response)=>{
  res.status(200).send(users)  
})
app.get("/products",(req:Request, res: Response)=>{
  res.status(200).send(products)
})
app.get("/product/search",(req: Request, res: Response)=>{
  const q =  req.query.q as string
  const result = products.filter(products => products.name.toLowerCase().includes(q.toLowerCase()))
  res.status(200).send(result)
})
app.post("/users",(req: Request, res: Response)=>{
  const {id, email, password}: User=req.body
  const newUser: User={
  id,
  email,
  password
}
users.push(newUser)
res.status(201).send('Usuário criado com sucesso!')
})
app.post("/products", (req: Request, res: Response)=>{
  const {id, name, price, category}: Product = req.body
  const newProduct: Product={
    id,
    name,
    price,
    category
  }
  products.push(newProduct)
  res.status(201).send('Produto cadastrado com sucesso"')
})
app.post("/purchases", (req: Request, res: Response)=>{
  const {userId, productId, quantity, totalPrice}: Purchase= req.body
  const newPurchase: Purchase={
    userId,
    productId,
    quantity,
    totalPrice
  }
  purchase.push(newPurchase)
  res.status(201).send('Compra realizada com sucesso!')
})

// exercicio 1 aprofundamento api express
// pegando produtos por ID
app.get("/products/:id", (req:Request, res: Response)=>{
  const id: string = req.params.id
  const result: Product[] = products.filter((item)=> item.id === id)

  res.status(200).send(result)
})
// Pegando itens de compra por ID
app.get("/users/:id/purchases", (req: Request, res: Response)=>{  
  const userId: string = req.params.id
  const results: Purchase[] = purchase.filter((item)=> item.userId === userId)
  res.status(200).send(results)
})
// exercicio 2 
// deletando usuário por id
app.delete("/users/:id", (req: Request, res: Response)=>{
  const id = req.params.id

   const indexDelUser = users.findIndex((item)=>{
    return item.id === id
   }) 
   if(indexDelUser >= 0){
    users.splice(indexDelUser, 1)
   }
   
    res.status(200).send("Usuário deletado com sucesso!")

})
// deletando produtos por id
app.delete("/products/:id", (req: Request, res: Response)=>{
  const id = req.params.id

  const indexDelProduct = products.findIndex((item)=>{
    return item.id === id
  })
  if(indexDelProduct >= 0 ){
    products.splice(indexDelProduct,1)
  }
  res.status(200).send("Produto Deletado com sucesso!")
})
// exercicio 3
//  alterar informações do usuário email e senha usando seu ID
app.put("/user/:id",(req:Request, res: Response)=>{
  const id: string = req.params.id
  const newEmail = req.body.newEmail
  const newPassword = req.body.newPassword  
  const newUsers: User[]= users.filter((item)=> item.id === id)
  if (newUsers.length > 0) {
    newUsers[0].email = newEmail || newUsers[0].email
    newUsers[0].password = newPassword || newUsers[0].password 
    console.log(newUsers)
  } else {
    console.log(`Usuário com o id ${id} não encontrado.`)
  }
  res.status(200).send('Cadastro de usuário realizado com sucesso')
})
//  alterar informações do produto, nome, preço e categoria usando seu ID
app.put("/products/:id", (req: Request, res: Response)=>{
    const id: string = req.params.id
    const newName = req.body.newName
    const newPrice = req.body.newPrice
    const newCategory = req.body.newCategory
    const newProducts: Product[] = products.filter((item)=> item.id === id)
    
    if(newProducts.length > 0){
      newProducts[0].name = newName || newProducts[0].name
      newProducts[0].price = newPrice || newProducts[0].price
      newProducts[0].category = newCategory || newProducts[0].category
    } else {
      console.log(`Produto com o ${id} não encontrado`)
    }
    res.status(200).send("Cadastro do produto atualizado com sucesso")
})



// chamando dados mockados
// console.table(users,['id', 'password', 'email' ]);
// console.table(products, ['id', 'name', 'price', 'category']);
// console.table(purchase, ['userId', 'productId', 'quantity', 'totalPrice'])

// chamando dados com função criada em database para criar novos usuários
// console.log(users)

// função criada para listar todos usuarios criados
// getAllUsers()

// função que cria novos produtos
// createProducts('P0o1', "luva de pedreiro", 50000, Category.CLOTHES_AND_SHOES)

// função que lista novos produtos criados
// getAllProducts()

// função que lista produtos por ID
// getProductById("001")

// função de busca de produto pelo nome
// queryProductsByName('esmeralda')

// função que cria nova compra
// createPurchase('03', '003', 1, 200 )

// função que lista novas compras pelo Id
// getAllPurchaseId('03')

// exercicios fixação da aula typescript-I
// type Person={
//     id: string,
//     name: string,
//     email: string,
//     password: string,
//     role: string
// }
// const user1: Person={
//     id: '01',
//     name: 'rogerio',
//     email: 'kayronny@hotmail.com',
//     password:'12345',
//     role: 'Admin'
// }

