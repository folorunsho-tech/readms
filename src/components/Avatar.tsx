import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  url: string;
  username: string;
}
const Avatar = ({ url, username }: Props) => {
  if (url) {
    return <img src={url} alt="User Avatar" />;
  }
  if (username) {
    return <p>{username}</p>;
  }
};

export default Avatar;
