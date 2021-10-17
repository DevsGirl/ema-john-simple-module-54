import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;
/* 
Steps for authentication
---------------------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method
---------------------
Step-2:setup component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
---------------------------
Step 3:set auth system
1. set up sign in method
2. set up sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
--------------------------
Steps 4:create auth context hook (useAuth)
1. Create a auth context in src
2. Create context provider
3. set context provider context value
4. use Auth Provider
5. create useAuth Hook
-----------------------
Step-5: create private route
1. create private Route
2.Set private route
----------------
Step-6: Redirect after login
1. after login rdirect user to their desired destination

 */