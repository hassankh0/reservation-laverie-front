const pool = require('../models/db.connection');


class machineControllers {

      static getAll = async (req, res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);

                  connection.query('SELECT * from machine', (err, rows) => {
                        connection.release(); // return the connection to pool

                        if (!err) {
                              res.json(rows)
                        } else {
                              console.log(err);
                        }
                  })
            })
      }

      static getById = async (req, res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);

                  connection.query('SELECT * from machine WHERE id_machine = ?', [req.params.id], (err, rows) => {
                        connection.release(); // return the connection to pool

                        if (!err) {
                              res.json(rows)
                        } else {
                              console.log(err);
                        }
                  })
            })
      }

      static delete = async (req, res) => {
            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);

                  connection.query('DELETE from machine WHERE id_machine = ?', [req.params.id], (err, rows) => {
                        connection.release(); // return the connection to pool

                        if (!err) {
                              res.send(`machine with the id: ${req.params.id} has been removved`);
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

                  connection.query('INSERT INTO machine SET ?', params, (err, rows) => {
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

      static available = async (req, res) => {

            pool.getConnection((err, connection) => {
                  if (err) throw err;
                  console.log(`connected as id ${connection.threadId}`);
                  console.log(req.query)
                  connection.query(`SELECT * FROM reservation, machine
                                    WHERE idMachine = id_machine And id_laverie = ?
                                    AND NOT ((hDebut > ? AND hFin < ?)
                                    Or(hDebut > ? AND hFin > ? AND hDebut < ?)
                                    OR(hDebut < ? AND hFin > ? AND hDebut < ? AND hFin > ?)
                                    OR(hDebut < ? AND hFin > ?  AND hFin < ?)); `,
                                    [req.query.idLaverie,
                                          req.query.hDebut, req.query.hFin,
                                           req.query.hDebut, req.query.hFin, req.query.hFin,
                                            req.query.hDebut, req.query.hDebut, req.query.hFin, req.query.hFin,
                                             req.query.hDebut, req.query.hDebut, req.query.hFin], (err, rows) => {
                        connection.release(); // return the connection to pool
                        if (!err) {
                              res.json(rows)
                        } else {
                              console.log(err);
                        }
                  })
            })
      }
}

module.exports = machineControllers;