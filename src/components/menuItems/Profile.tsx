import { useState } from "react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  children?: ReactNode;
  username: string;
  email: string;
  // any props that come into the component
}
const Profile = ({ username, email }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const avatar = username.substring(0, 1);
  return (
    <>
      <button className="profile-button" onClick={() => setShowMenu(!showMenu)}>
        <span>{avatar}</span>
      </button>
      <div className="profile-container">
        <h3>{email}</h3>
        <hr />
        <Link to="/settings">
          <p>Settings</p>
        </Link>
        <p className="profile-logout">Log Out</p>
      </div>
    </>
  );
};

export default Profile;
