import {users, products, purchase, getAllUsers, createProducts, getAllProducts, getProductById, queryProductsByName, getAllPurchaseId, createPurchase} from './database'
import { Category } from './types'

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

