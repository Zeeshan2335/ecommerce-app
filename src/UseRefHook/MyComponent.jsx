import { useRef } from "react";
import { TypographyOne } from "../components/Typography/typography.styled";

function MyComponent() {
  const myRef = useRef(null);

  const handleButtonClick = () => {
    console.log("myRef :", myRef.current);
    // Modifying the current property doesn't trigger a re-render
    myRef.current.textContent = "Button Clicked";
    myRef.current.style.backgroundColor = "red";
    myRef.current.style.width = "200px";
  };
  const containerRef = useRef(null);

  const handleClick = () => {
    if (containerRef.current) {
      const newDiv = document.createElement("div");
      newDiv.style.width = "200px";
      newDiv.style.height = "200px";
      newDiv.style.backgroundColor = "yellow";
      newDiv.style.margin = "20px";
      newDiv.textContent = "This is a new yellow box!";
      containerRef.current.appendChild(newDiv);
    }
  };

  return (
    <div>
      <TypographyOne>Use Ref Examples</TypographyOne>
      <button onClick={handleButtonClick}>Click Me</button>
      <p ref={myRef} style={{ background: "yel" }}>
        Initial Text
      </p>
      <hr />
      <button onClick={handleClick}>Add New Box</button>
      <div>
        <div
          className="flex flex-wrap"
          ref={containerRef}
          style={{ margin: "20px" }}
        >
          {/* New divs will be added here */}
        </div>
      </div>
    </div>
  );
}
export default MyComponent;
