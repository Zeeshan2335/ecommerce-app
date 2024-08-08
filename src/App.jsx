import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StyButton } from "./components/Button/button.styled";
import {
  TypographyOne,
  TypographyThree,
} from "./components/Typography/Typography";
import { Input } from "./components/Input/Input.styled";
import { Option, Select } from "./components/Select/Select.styled";

function App() {
  return (
    <div>
      <h1 className="w-2/4" >app.jsx</h1>
    <Select>
      <Option>A</Option>
      <Option>A</Option>
      <Option>A</Option>
    </Select><br />
      <Input  className="w-2/4" placeholder="Search..." />
      <StyButton>Demo</StyButton>
      <StyButton variant="outlined">Demo</StyButton>
      <TypographyOne>abc DGASD</TypographyOne>
      <TypographyOne>p DGASD</TypographyOne>
      <TypographyOne>abc DGASD</TypographyOne>
      <TypographyThree>sdfasf</TypographyThree>

      <Router>
        <div className="bg-red-600">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
export default App;
