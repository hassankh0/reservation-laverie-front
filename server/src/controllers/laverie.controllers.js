// import {pool} from "../models/db";
const pool = require('../models/db.connection');


class laverieControllers {

      static getAll = async (req, res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);

                  connection.query('SELECT * from laverie', (err, rows) => {
                        connection.release(); // return the connection to pool

                        console.log("rows :", rows);
                        if (!err) {
                              res.json(rows)
                        } else {
                              console.log(err);
                        }
                  })
            })
      };

      static getById = async (req, res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);

                  connection.query('SELECT * from laverie WHERE id_laverie = ?', [req.params.id], (err, rows) => {
                        connection.release(); // return the connection to pool

                        if (!err) {
                              res.json(rows)
                        } else {
                              console.log(err);
                        }
                  })
            })
      };

      static delete = async (req, res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);

                  connection.query('DELETE from laverie WHERE id_laverie = ?', [req.params.id], (err, rows) => {
                        connection.release(); // return the connection to pool

                        if (!err) {
                              res.send(`laverie with the id: ${req.params.id} has been removved`);
                        } else {
                              console.log(err);
                        }
                  })
            })
      }

      static add = async (req, res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);

                  const params = req.body;

                  connection.query('INSERT INTO laverie SET ?', params, (err, rows) => {
                        connection.release(); // return the connection to pool

                        if (!err) {
                              res.send(`laverie with the id: ${params.id_laverie} and name: ${params.nom} has been added`);
                        } else {
                              console.log(err);
                        }
                  })

                  console.log(req.body);
            })
      }

}

module.exports = laverieControllers;