const db=require("../models");
const Vans=db.vans;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Journal
    const vans = new Vans({
        id:req.query.id,
        manufacture:req.query.manufacture,
        model:req.query.model,
        colour:req.query.colour,
        seats:req.query.seats
    });
  
    // Store a Journal in the database
    vans
      .save(vans)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Journal."
        });
      });
  };
  
  // Retrieve all journals from the database.
  exports.findAll = (req, res) => {
   
    Journal.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving journals."
        });
      });
  };
  