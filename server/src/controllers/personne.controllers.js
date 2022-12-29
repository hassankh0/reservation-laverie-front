const pool = require('../models/db.connection');


class personneControllers {

      static getAll = async (req,res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);
      
                  connection.query('SELECT * from personne', (err,rows) => {
                        connection.release(); // return the connection to pool
      
                        if (!err) {
                              res.json(rows)
                        } else {
                              console.log(err);
                        }
                  })
            })
      }

      static login = async (req,res) => {
            pool.getConnection((err, connection) => {
                  // Select a user with the given username and password from the user table
                  connection.query('SELECT * FROM personne WHERE login = ? AND mdp = ?', [req.body.username, req.body.password], (err, results) => {
                        connection.release();
                        if (err) {
                              console.error(err);
                              return;
                        }

                        // If the query returned a row, the login was successful
                        if (!err) {
                              res.json(results);
                        } else {
                              res.json(undefined);
                        }
                  });
            })
      }

      static getById = async (req,res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);
      
                  connection.query('SELECT * from personne WHERE id = ?', [req.params.id], (err,rows) => {
                        connection.release(); // return the connection to pool
      
                        if (!err) {
                              res.json(rows)
                        } else {
                              res.json(err)
                        }
                  })
            })
      }

      static delete = async (req,res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);
      
                  connection.query('DELETE from personne WHERE id = ?', [req.params.id], (err,rows) => {
                        connection.release(); // return the connection to pool
      
                        if (!err) {
                              res.send(`personne with the id: ${req.params.id} has been removved`);
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
      
                  connection.query('INSERT INTO personne SET ?', params, (err,rows) => {
                        connection.release(); // return the connection to pool
      
                        if (!err) {
                              res.send(`personne with the id: ${params.id} and name: ${params.nom} has been added`);
                        } else {
                              console.log(err);
                        }
                  })
       
                  console.log(req.body);
            })
      }

}

module.exports = personneControllers;