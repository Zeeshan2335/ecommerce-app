import { createContext, useState } from "react";
import ParentOne from "./ContextComponents/ParentOne";
import { Button } from "@mui/material";

export const ContextData = createContext("");

const AppLevel = () => {
  const [userData, setUserData] = useState({
    name: "Zeeshan",
    age: 25,
    city: "Hyderabad",
  });
  console.log("userData :", userData);

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="border">
      <h1>AppLevel</h1>
      <Button variant="contained">get Data</Button>
      <ContextData.Provider value={{ userData, handleData }}>
        <ParentOne />
      </ContextData.Provider>

      <div>
        <h1> {userData.name} </h1>
        <h1> {userData.age} </h1>
        <h1> {userData.city} </h1>
      </div>
    </div>
  );
};

export default AppLevel;
