import { useDispatch, useSelector } from "react-redux";
import {
  TypographyFive,
  TypographyTow,
  TypographyThree,
} from "../components/Typography/typography.styled";

import { Button, Card, CardContent, Grid, Rating } from "@mui/material";
import { addToCardItems, handleRemoveCards } from "../state/Slices/products/addToCard.slice";

const AddToCardContain = (props) => {
  const {
    title,
    id,
    description,
    price,
    discountPercentage,
    rating,
    images,
    brand,
  } = props?.item;

  const handleTextLength = (text, num) => {
    return text.length > num ? text.slice(0, num) + `...` : text.slice(0, num);
  };

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <div>
              <img className="md:h-64" src={images[0]} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TypographyTow>{title}</TypographyTow>
            <TypographyThree> brand : {brand}</TypographyThree>
            <TypographyFive>
              {handleTextLength(description, 100)}
            </TypographyFive>
            <div className="flex gap-3">
              <TypographyTow> ${price}</TypographyTow>
              <TypographyTow> {discountPercentage}%</TypographyTow>
            </div>
            <Rating value={rating} sx={{ color: "green" }} />
          </Grid>
          <Grid
            fullWidth
            container
            gap={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={5.5}>
              <Button
                onClick={() => props?.removeFromAddToCard(id)}
                fullWidth
                variant="contained"
              >
                Remove
              </Button>
            </Grid>
            <Grid item xs={5.5}>
              <Button fullWidth variant="contained">
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const AddToCard = () => {
  const data = useSelector(addToCardItems);
  const dispatch = useDispatch();
  const removeFromAddToCard = (id) => {
    console.log(id);

    dispatch(handleRemoveCards(id));
  };
  return (
    <div>
      {data.length <= 0 && (
        <div className="min-h-screen flex justify-center items-center">
          <TypographyTow> ADD ITEMS </TypographyTow>
        </div>
      )}
      {data &&
        data.map((item) => (
          <AddToCardContain
            item={item}
            removeFromAddToCard={removeFromAddToCard}
          />
        ))}
    </div>
  );
};

export default AddToCard;
