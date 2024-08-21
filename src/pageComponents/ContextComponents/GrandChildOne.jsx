import { TextField } from "@mui/material";
import { useContext } from "react";
import { ContextData } from "../AppLevel";

const GrandChildOne = () => {
    const {handleData}=useContext(ContextData)
    return (
        <div>
             <TextField name="city" onChange={handleData} />
        </div>
    );
};

export default GrandChildOne;