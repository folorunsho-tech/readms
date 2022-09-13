import { ReactNode } from "react";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  children?: ReactNode;
  url?: string;
  username?: string;
}
const Avatar = ({ url, username = "" }: Props) => {
  return (
    <div className="avatar">
      {url ? (
        <img src={url} alt={username} className="avatar-img" />
      ) : (
        <FaUserCircle className="user-icon" />
      )}
      <span>{username}</span>
    </div>
  );
};

export default Avatar;
