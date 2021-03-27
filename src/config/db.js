import knex from "knex";

const builder = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: "root",
    password: "root",
    database: "aware_laptop",
    port: '3306',
    multipleStatements: true,
  },
})

export default builder;