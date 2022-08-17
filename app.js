const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan  = require('morgan');
const logger = require('./logger')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   console.log(res);
//   res.render('error');
// });

const _errorHandler = (err, req, res, next) => {
  const  _message = err.message;
  logger.error(`${req.method} ${req.originalUrl} ${_message}`);
  res.status(err.status || 500).json({
    code: -1,
    success: false,
    message: _message,
    data: {}
  })
};
app.use(_errorHandler);

module.exports = app;
