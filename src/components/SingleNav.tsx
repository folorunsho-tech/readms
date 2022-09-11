import React from "react";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const SingleNav = ({ children }: Props) => {
  return (
    <div>
      <h1>Single</h1>
      {children}
    </div>
  );
};

export default SingleNav;
