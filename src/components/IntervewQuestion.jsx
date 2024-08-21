import { Button } from "@mui/material";
import { useState } from "react";
import { TypographyOne } from "./Typography/typography.styled";

const TypeButton = (props) => (
  <Button onClick={() => props?.handleClicked(props.text)} variant="outlined">
    {props.text}
  </Button>
);

const IntervewQuestion = () => {
  const [data, setData] = useState("");
  // if  "aaa" continue aya to "_" batana hai
  // if "CCC" continue clicked hua to ? batana hai e.g user clicked abccca => ab?a
  const handleClicked = (text) => {
    let str = data + text.toUpperCase();
    let modifiedStr = str.replace(/AAA|CCC/g, (match) => {
      if (match === "AAA") {
        return "?";
      } else if (match === "CCC") {
        return "_";
      }
    });
    setData(modifiedStr);
  };

  return (
    <div>
      <TypographyOne> interviw Question</TypographyOne>
      <p>
        write a code , when I clicked 'A' for 3 times continues like 'AAA'= '?'
        if I clicked "CCC" so show it "-"
      </p>
      <div className="flex gap-4">
        <TypeButton text="A" handleClicked={handleClicked} />
        <TypeButton text="B" handleClicked={handleClicked} />
        <TypeButton text="C" handleClicked={handleClicked} />
      </div>
      <TypographyOne> {data} </TypographyOne>
    </div>
  );
};

export default IntervewQuestion;
