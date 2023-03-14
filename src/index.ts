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

