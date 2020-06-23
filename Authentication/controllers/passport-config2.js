import {passport} from 'passport';
import passportCustom from 'passport-custom';
import {bcrypt} from 'bcrypt';
import {adminModel} from '@hosam093/qurba-package';

const CustomStrategy = passportCustom.Strategy;

passport.use('custom',new CustomStrategy( verify ));

async function verify(req, done) {
  // When a user tries to sign in this code runs
  let dbUser;
  if(req.body.email) {
    dbUser = await adminModel.admin.findOne({email : req.body.email});
    if (!dbUser) {
      return done(null, false, {
        message: "Incorrect email."
      });
    }
    
    // If there is a user with the given email, but the password the user gives us is incorrect
    else if (!bcrypt.compareSync(req.body.password, dbUser.password)) {
      return done(null, false, {
        message: "Incorrect password."
      });
    }
  } else if(req.body.phone){
    dbUser = await adminModel.admin.findOne({phone : req.body.phone});
  } else if(req.body.fb_id){
    dbUser = await adminModel.admin.findOne({fb_id : req.body.fb_id});
  }
  
  // If none of the above, return the user
  return done(null, dbUser);
}

passport.serializeUser(async (user, done) => {
  try {
    done(null, user);
  } catch (e) {
    done(e);
  }
});

passport.deserializeUser(async (user, done) => {
  try {
    done(null, user);
  } catch (e) {
    done(e);
  }
});

export default passport;