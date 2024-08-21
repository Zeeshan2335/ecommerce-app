import { useContext } from "react";
import { ContextData } from "../AppLevel";
import { TextField } from "@mui/material";
import GrandChildOne from "./GrandChildOne";

const ChildOne = () => {
  const { handleData } = useContext(ContextData);
  //   console.log("data :", data);

  return (
    <div className="border">
      <TextField name="age" onChange={handleData} />
      <GrandChildOne />
    </div>
  );
};

export default ChildOne;
