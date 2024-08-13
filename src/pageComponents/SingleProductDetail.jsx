import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  TypographyFive,
  TypographyFour,
  TypographyOne,
  TypographyThree,
  TypographyTow,
} from "../components/Typography/typography.styled";
import { Button } from "@mui/material";

const SingleProductDetail = () => {
  const location = useLocation(); // get data from the rout
  const { product } = location.state || {};
  console.log("product :", product.images);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3  flex overflow-auto">
        {product.images.map((item, index) => (
          <img src={item} key={index} alt="loading..."  />
        ))}
      </div>
      <div className="md:w-1/3  md:p-3 ">
        <div className="md:absolute md:left-5 p-1.5 rounded-full shadow-lg" >
          <FavoriteIcon sx={{ color: "gray", margin: "2px" }} />
        </div>
        <TypographyOne> Heading </TypographyOne>
        <TypographyFive>{product.description} </TypographyFive>
        <div className="flex justify-start">
          <TypographyTow> ${product.price} </TypographyTow>
          <TypographyTow className=" ml-4">
            {" "}
            {product.discountPercentage}%{" "}
          </TypographyTow>
        </div>
        <div className="flex justify-start ">
          <Button
            className="w-1/3 "
            sx={{
              bgcolor: "red",
              marginRight: "5px",
              "&:hover": {
                backgroundColor: "#b80202", // Background color on hover
                color: "#e0e0e0", // Text color on hover
              },
            }}
            variant="contained"
          >
            Add to Card
          </Button>
          <Button className="w-1/3" variant="contained">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
