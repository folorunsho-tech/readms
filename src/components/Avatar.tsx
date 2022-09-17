import { ReactNode } from "react";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  children?: ReactNode;
  url?: string;
  username?: string | null | undefined;
}
const Avatar = ({ url, username = "" }: Props) => {
  return (
    <div className="avatar">
      {url !== ".." ? (
        <img src={url} alt="user avatar" className="avatar-img" />
      ) : (
        <FaUserCircle className="user-icon" />
      )}
      <span>{username}</span>
    </div>
  );
};

export default Avatar;
