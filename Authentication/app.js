import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import cors from 'cors';

import index from './routes/index';
import admins from './routes/admins';
import { passportAuthentication } from "@hosam093/qurba-package";
// import passport from '../controllers/passport-config2';
import config from './config';


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: config.getSecretKey(), resave: true, saveUninitialized: true }));
app.use(passportAuthentication.passport.initialize());

app.use('/', index);
app.use('/authentication', admins);

// catch 404 and forward to error handler
app.use(async function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(async function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
console.log('Server is running on port 3000')

module.exports = app;