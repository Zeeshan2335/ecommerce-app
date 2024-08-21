import { TextField } from "@mui/material";
import ChildOne from "./ChildOne";
import { useContext } from "react";
import { ContextData } from "../AppLevel";

const ParentOne = () => {
  const { handleData } = useContext(ContextData);
  return (
    <div className="border">
      <TextField name="name" onChange={handleData} />
      <ChildOne />
    </div>
  );
};

export default ParentOne;
