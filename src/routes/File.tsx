import React from "react";
import { useParams } from "react-router-dom";
import SingleNav from "../components/SingleNav";
const File = () => {
  let { id } = useParams();

  return (
    <SingleNav>
      <div>File : {id}</div>
    </SingleNav>
  );
};

export default File;
