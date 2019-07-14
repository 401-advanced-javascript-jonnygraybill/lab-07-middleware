'use strict';

module.exports = (req,res,next) => {
  let d = Date();
  req.requestTime = d.toString();
  next();
};