const mongoose = require('mongoose');

mongoose.connect(encodeURI( "mongodb+srv://scratch:root%40123@cluster0-1vd9s.mongodb.net/test?retryWrites=true&w=majority"
  ),
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

require('./employee.model');