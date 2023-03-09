"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchaseId = exports.createPurchase = exports.purchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProducts = exports.products = exports.getAllUsers = exports.createUser = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
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
];
function createUser(id, email, password) {
    const newUser = { id, email, password };
    exports.users.push(newUser);
}
exports.createUser = createUser;
createUser('0o1', 'user0o1@gmail.com', '0o12345');
function getAllUsers() {
}
exports.getAllUsers = getAllUsers;
exports.products = [
    {
        id: '001',
        name: 'Iphone',
        price: 20000,
        category: types_1.Category.ELETRONICS
    }, {
        id: '002',
        name: 'Esmeralda',
        price: 500000,
        category: types_1.Category.ACESSORIES
    }
];
function createProducts(id, name, price, category) {
    const newProducts = { id, name, price, category };
    exports.products.push(newProducts);
    console.log('Produto criado com sucesso');
}
exports.createProducts = createProducts;
function getAllProducts() {
    console.log(exports.products);
}
exports.getAllProducts = getAllProducts;
function getProductById(id) {
    exports.products.filter((produto) => {
        if (produto.id === id) {
            return console.log(produto);
        }
    });
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    exports.products.filter((produto) => {
        if (produto.name.toLowerCase() === q.toLowerCase())
            return console.log(produto);
    });
}
exports.queryProductsByName = queryProductsByName;
exports.purchase = [
    {
        userId: '01',
        productId: '001',
        quantity: 1,
        totalPrice: 20000,
    },
    {
        userId: '02',
        productId: '002',
        quantity: 1,
        totalPrice: 500000,
    }
];
function createPurchase(userId, productId, quantity, totalPrice) {
    const newPurchase = { userId, productId, quantity, totalPrice };
    exports.purchase.push(newPurchase);
    console.log('compra realizada com sucesso');
}
exports.createPurchase = createPurchase;
function getAllPurchaseId(userIdToSearch) {
    exports.purchase.filter((purchase) => {
        if (purchase.userId === userIdToSearch) {
            return console.log(purchase);
        }
    });
}
exports.getAllPurchaseId = getAllPurchaseId;
//# sourceMappingURL=database.js.map