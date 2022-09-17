import app from ".";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  // verifyBeforeUpdateEmail,
} from "firebase/auth";
// import Cookies from "js-cookie";
export const auth = getAuth(app);
// const maxDate = 30;
export let currUser = {};
export let loading = false;
export const setCurrUser = (user) => {
  currUser = user;
};
export const AddUser = async ({ email, password, username }) => {
  loading = true;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: "..",
      });
      loading = false;
    })
    .then(() => {
      console.log(auth.currentUser);
      setCurrUser(auth.currentUser);
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
export const Login = async ({ email, password }) => {
  loading = true;
  signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
    console.log(userCredentials);
    loading = false;

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
