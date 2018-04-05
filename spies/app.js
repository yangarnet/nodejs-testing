
import saveUser from './db';

const handleSignUp = (email, pwd) => {
    // to test the code, we need to mock db
    saveUser({email, pwd});
};

export default handleSignUp;
