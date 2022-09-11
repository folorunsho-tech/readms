import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const HomeNav = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default HomeNav;
