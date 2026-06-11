const mongoose = require('mongoose');

function connectToDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('Server is connected To DB.');
    })
    .catch((err) => {
      console.log('Server is failed to connect with DB.', err);
    });
}

module.exports = connectToDB;
