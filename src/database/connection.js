import sql from "mssql";

const dbSettings = {
    user: 'Nico', 
    password: '',
    server: 'localhost',
    database: 'Webstore',
    options: {
        encrypt: true,
        trustServerCertificate: true,
      }
}

export const getConnection = async () => {

    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export { sql };

