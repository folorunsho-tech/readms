import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Files = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard", { replace: true });
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default Files;
