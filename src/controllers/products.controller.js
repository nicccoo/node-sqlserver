import { getConnection, sql } from '../database';
import { queries } from '../database';

export const getProducts = async (req, res) => {

    try {
        const pool  = await getConnection();
        const result = await pool.request().query(queries.getAllProducts)
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
};

export const createNewProduct = async (req, res) => {

    const {name, description, quantity } = req.body;

    if (name == null || description == null) {
        return res.status(400).json({msg: 'Bad Request'});
    }
    
    try {
        const pool = await getConnection();

    await pool.request()
            .input('name', sql.VarChar, name)
            .input('description', sql.VarChar, description)
            .input('quantity', sql.Int, quantity)
            .query(queries.addNewProduct)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

    res.json({name, description, quantity});
};

export const getProductById = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool.request()
    .input('id', id)
    .query(queries.getProductById);
    
    console.log(result)

    res.send(result.recordset[0]);
}


export const deleteProduct = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query(queries.deleteProduct);

    console.log(result);

    res.sendStatus(204);
}

export const getTotalProducts = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries.getTotalProducts);

    res.json(result.recordset[0][''])
}

export const updateProductsById = async (req, res) => {

    const { id } = req.params;
    const { name, description, quantity } = req.body

    if (name == null || description == null || quantity === null) {
        return res.status(400).json({msg: 'Bad Request'});
    }

    const pool = await getConnection();
    const result = await pool
    .request()
    .input('name', sql.VarChar, name)
    .input('description', sql.VarChar, description)
    .input('quantity', sql.Int, quantity)
    .input('id', sql.Int, id)
    .query(queries.updateProductsById);

    console.log(result);

    res.json({name, description, quantity});
}