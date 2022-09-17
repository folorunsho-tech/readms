import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth, setCurrUser, currUser } from "./firebase/auth";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrUser(user);
        navigate("/dashboard", { replace: false });
      } else {
        navigate("/login", { replace: false });
      }
    });
    console.log(currUser);
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
