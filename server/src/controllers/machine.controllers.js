const pool = require('../models/db.connection');


class machineControllers {

      static getAll = async (req,res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);
      
                  connection.query('SELECT * from machine', (err,rows) => {
                        connection.release(); // return the connection to pool
      
                        if (!err) {
                              res.json(rows)
                        } else {
                              console.log(err);
                        }
                  })
            })
      }

      static getById = async (req,res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);
      
                  connection.query('SELECT * from machine WHERE id_machine = ?', [req.params.id], (err,rows) => {
                        connection.release(); // return the connection to pool
      
                        if (!err) {
                              res.json(rows)
                        } else {
                              console.log(err);
                        }
                  })
            })
      }

      static delete = async (req,res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);
      
                  connection.query('DELETE from machine WHERE id_machine = ?', [req.params.id], (err,rows) => {
                        connection.release(); // return the connection to pool
      
                        if (!err) {
                              res.send(`machine with the id: ${req.params.id} has been removved`);
                        } else {
                              console.log(err);
                        }
                  })
            })
      }

      static add = async (req,res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);
      
                  const params = req.body;
      
                  connection.query('INSERT INTO machine SET ?', params, (err,rows) => {
                        connection.release(); // return the connection to pool
      
                        if (!err) {
                              res.send(`machine with the id: ${params.id} from laverie: ${params.id_laverie} has been added`);
                        } else {
                              console.log(err);
                        }
                  })
       
                  console.log(req.body);
            })
      }
}

module.exports = machineControllers;