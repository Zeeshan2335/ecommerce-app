import { Rating } from "@mui/material";

import {
  TypographyFour,
  TypographyThree,
  TypographyTow,
} from "../components/Typography/typography.styled";

const ProductCard = (props) => {
  const img = props.data.images[0];
  const id = props.data.id;
  const description = props?.data?.description;
  const title = props?.data?.title;
  const rating = props?.data?.rating;
  return (
    <div
      onClick={() => props?.handleWishList(id)}
      className="shadow-2xl w-1/5 rounded-md m-2 p-2 "
    >
      <div className="flex justify-center items-center flex-col">
        <img className="h-64" src={img} alt="" width={200} height={200} />

        <TypographyTow>{title.slice(0, 10)} </TypographyTow>
        <TypographyFour>
          {description.length > 30
            ? description.slice(0, 30) + "..."
            : description}
        </TypographyFour>

        <div className="w-full  flex justify-center items-center">
          <TypographyTow>{props?.data?.price}</TypographyTow>
          <TypographyFour className="text-red-600 pl-4">
            {props?.data?.discountPercentage} % off
          </TypographyFour>
        </div>

        <Rating
          sx={{ color: "green" }}
          name="read-only"
          value={rating}
          readOnly
        />
      </div>
    </div>
  );
};

export default ProductCard;
