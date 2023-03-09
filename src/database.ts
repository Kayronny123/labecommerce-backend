import { Category, Product, Purchase, User } from "./types";




export const users: User[] = [
   {
      id: '01',
      password: '12345',
      email: 'kayronny@gmail.com',
   },
   {
      id: '02',
      password: '54321',
      email: 'lucas@gmail.com'
   }

]
// função que adiciona novos usuarios apartir do array
export function createUser(id: string, email: string, password: string){
   const newUser = {id, email, password}
   users.push(newUser)
   // console.log('Cadastro realizado com sucesso');
   
   
}
createUser('0o1', 'user0o1@gmail.com', '0o12345')
//  função de lista usuarios
export function getAllUsers(){
// console.log(users)
}

export const products: Product[] =[
   {
   id: '001',
   name: 'Iphone',
   price: 20000,
   category: Category.ELETRONICS
   },{
      id: '002',
      name: 'Esmeralda',
      price: 500000,
      category: Category.ACESSORIES
   }
]
// função para criar novos produtos
export function createProducts(id: string, name:string, price:number, category:Category){
const newProducts: Product = {id, name, price, category}
products.push(newProducts)
console.log('Produto criado com sucesso')
}
export function getAllProducts() : void {
   console.log(products)
}
export function getProductById(id: string){
   products.filter((produto)=>{
       if(produto.id === id){
        return console.log(produto)
       }
   })
}
export function queryProductsByName(q:string){
   products.filter((produto)=>{
      if(produto.name.toLowerCase() === q.toLowerCase())
      return console.log(produto)

   })
}
export const purchase: Purchase[] =[
   {
      userId:'01',
      productId: '001',
      quantity: 1,
      totalPrice: 20000,
   },
   {
      userId:'02',
      productId: '002',
      quantity: 1,
      totalPrice: 500000,
   }
]

export function createPurchase( userId: string, productId: string, quantity:number, totalPrice:number){
   const newPurchase: Purchase={userId, productId, quantity, totalPrice}
   purchase.push(newPurchase)
   console.log('compra realizada com sucesso');
   
}
export function getAllPurchaseId(userIdToSearch: string){
purchase.filter((purchase)=>{
   if(purchase.userId === userIdToSearch){
      return console.log(purchase)
   }
})

}