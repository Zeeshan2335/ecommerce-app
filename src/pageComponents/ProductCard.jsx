import { Rating } from "@mui/material";
import Slider from "../components/Slider";
import {
  TypographyFour,
  TypographyTow,
} from "../components/Typography/typography.styled";

const ProductCard = (props) => {
  return (
    <div className="shadow-2xl w-1/5 rounded-md m-2 p-2 ">
      <div className="flex justify-center items-center flex-col">
        <img
        className="h-64"
          src={props?.data?.images[0]}
          alt=""
          width={200}
          height={200}
        />
        {/* <Slider imgs={props} /> */}
        <TypographyTow>{props?.data?.title.slice(0,10)} </TypographyTow>
        <TypographyFour>
         {props?.data?.description.length>30? props?.data?.description.slice(0,50) + "...":props?.data?.description}
        </TypographyFour>
        <Rating name="read-only" value={props?.data?.rating} readOnly />
      </div>
    </div>
  );
};

export default ProductCard;
