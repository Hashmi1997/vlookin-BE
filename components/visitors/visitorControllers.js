var visitorModel = require("./visitorModel");
const moment = require ('moment')

async function createVisit(req, res) {
  try {
    let {
      visitorName,
      email,
      contact,
      date,
      buildingName,
      flatNo,
      maxRooms,
      comments,
      status,
    } = req.body;

    let visitDate = moment(date)
    let newVisit = await visitorModel.createVisit({
      visitorName,
      email,
      contact,
      visitDate,
      buildingName,
      flatNo,
      maxRooms,
      comments,
      status,
    });
    res.send({
      status: 200,
      message: "Visit Created Successfully",
      data: newVisit,
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message,
    });
  }
}

async function getVisit(req, res) {
  try {
    let { id, visitorName } = req.query;
    let fetchVisits = await visitorModel.getVisit({ id, visitorName });
    console.log(fetchVisits);
    res.send({
      status: 200,
      message: "data fetched successfully",
      data: fetchVisits,
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
}

module.exports = {
  createVisit,
  getVisit,
};
