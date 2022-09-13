import React from "react";
import { useParams } from "react-router-dom";
import Editor from "../components/Editor";
import SingleNav from "../components/SingleNav";
const File = () => {
  // let { id } = useParams();

  return (
    <SingleNav>
      <Editor />
    </SingleNav>
  );
};

export default File;
