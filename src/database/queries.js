export const queries = {
    getAllProducts : 'SELECT * FROM products',
    addNewProduct : 'INSERT INTO products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductById: 'SELECT * FROM products where id = @id',
    deleteProduct: 'DELETE FROM products where id = @id',
    getTotalProducts : 'SELECT COUNT (*) FROM products',
    updateProductsById: 'UPDATE products SET name = @name, description = @description, quantity = @quantity WHERE id = @id',
}