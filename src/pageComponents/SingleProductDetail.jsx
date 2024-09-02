import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  TypographyFive,
  TypographyOne,
  TypographyTow,
} from "../components/Typography/typography.styled";
import { Button, Rating } from "@mui/material";
import { makeWishToBuy } from "../state/Slices/products/products.slice";
import { useState } from "react";
import { handleAddCards } from "../state/Slices/products/addToCard.slice";
import { getSinleProduct } from "../state/Slices/products/signalProductDetail.slice";

const SingleProductDetail = () => {
  const [wishFlag, setWishFlag] = useState(false);
  const dispatch = useDispatch();
  const getSingleItem = useSelector(getSinleProduct);
  console.log("getSingleItem :", getSingleItem);

  const handleWishToBuy = (id, flag) => {
    const userConfirmed = confirm("Are you add this product to wish list");
    if (userConfirmed) {
      dispatch(makeWishToBuy({ id, flag }));
      setWishFlag(true);
    } else {
      console.log("User cancelled the action.");
    }
  };
  const handleAddToCards = (data) => {
    dispatch(handleAddCards(data));
  };
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3  flex overflow-auto">
        {getSingleItem?.images.map((item, index) => (
          <img src={item} key={index} alt="loading..." />
        ))}
      </div>
      <div className="md:w-1/3  md:p-3 ">
        <div
          onClick={() => handleWishToBuy(getSingleItem.id, true)}
          className="md:absolute md:left-5 p-1.5 rounded-full shadow-lg w-10 "
        >
          <FavoriteIcon
            sx={{
              color: getSingleItem?.isWishToBuy || wishFlag ? "red" : "gray",
              margin: "2px",
            }}
          />
        </div>
        <TypographyOne> Heading </TypographyOne>
        <TypographyFive>{getSingleItem.description} </TypographyFive>
        <div className="flex justify-start">
          <TypographyTow> ${getSingleItem.price} </TypographyTow>
          <TypographyTow className=" ml-4">
            {getSingleItem.discountPercentage}%{" "}
          </TypographyTow>
        </div>
        <div>
          <Rating
            sx={{ color: "green", padding: 2 }}
            name="read-only"
            value={getSingleItem.rating}
            readOnly
          />
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
            onClick={() => handleAddToCards(getSingleItem)}
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
