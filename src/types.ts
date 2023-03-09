// projeto typescript exercicio1
export type User ={
    id: string,
    email: string,
    password: string,
}

export enum Category {
    ELETRONICS = 'Cell Phone',
    ACESSORIES = 'Jewel',
    CLOTHES_AND_SHOES = 'Clothing'
}
export type Product = {
    id: string,
    name: string,
    price: number,
    category: Category,
}
export type Purchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number,
}