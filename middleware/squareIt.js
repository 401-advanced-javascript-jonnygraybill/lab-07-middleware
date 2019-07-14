'use stict';

const squared = (number) => (req, res, next) => {
  req.number = number * number;
  next();
};
module.exports = squared;