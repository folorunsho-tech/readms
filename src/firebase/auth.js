import app from ".";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  // verifyBeforeUpdateEmail,
} from "firebase/auth";
import Cookies from "js-cookie";
const auth = getAuth(app);
const maxDate = 30;

export const SignUp = async (email, password, username) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() =>
      updateProfile(auth.currentUser, {
        displayName: username,
      })
    )
    .then(() => {
      console.log(auth.currentUser);
      // const user = auth.currentUser;
      // Cookies.set("userName", user.displayName, { expires: maxDate });
      // Cookies.set("userId", user.uid, { expires: maxDate });
      // Cookies.set("userEmail", user.email, { expires: maxDate });
      // Cookies.set("userProfile", user.photoURL, { expires: maxDate });
    })
    .catch((error) => {
      // An error occurred
      console.log(error);
    });
};
export const Login = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password).then(() => {
    // Cookies.set("userName", user.displayName, { expires: maxDate });
    // Cookies.set("userId", user.uid, { expires: maxDate });
    // Cookies.set("userEmail", user.email, { expires: maxDate });
    // Cookies.set("userProfile", user.photoURL, { expires: maxDate });
  });
};
export const LogOut = async () => {
  await signOut(auth);
  // Cookies.remove("userName");
  // Cookies.remove("userId");
  // Cookies.remove("userEmail");
  // Cookies.remove("userProfile");
};
