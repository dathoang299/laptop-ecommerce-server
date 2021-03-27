import express from 'express';
import cors from 'cors';
import builder from './config/db.js';

// create express app
const app = express();
app.use(cors())
const port = process.env.PORT || 5000;

// Init database instance
// const mysqlInstance = MysqlClient.getInstance();
// mysqlInstance.connectDb();

// const connection = mysql.createConnection({
//   client: "mysql2",
//   connection: {
//       host: 'localhost',
//       user: "root",
//       password: "root",
//       database: "laptop_ecommerce",
//       port: '3306',
//       multipleStatements: true,
//   }
// });
// connection.connect((error) => {
//     if (!error) {
//         // console.log('Connect database succeeded')
//     } else
//         console.log('Connect database failed', error)
// });

app.get('/category', async (req, res) => {
  const category = await builder.select('*').from('category');
  return res.status(200).json(category);
})

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
