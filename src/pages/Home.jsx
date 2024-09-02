import ProductCard from "../pageComponents/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import {
  getLoadingFlag,
  getProductItems,
} from "../state/Slices/products/products.slice";
import {
  addSingalProduct,
  fetchSigleItem,
} from "../state/Slices/products/signalProductDetail.slice";
import { useNavigate } from "react-router-dom";
import { TypographyTow } from "../components/Typography/typography.styled";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const apiData = useSelector(getProductItems);
  const loadingFlag = useSelector(getLoadingFlag);

  const handleRoute = () => {
    navigate("/singleproductdetail");
  };

  const handleWishList = (id) => {
 

      dispatch(fetchSigleItem(id)) &&
        setTimeout(() => {
          handleRoute();
        }, 1000);
  
    
  };

  return (
    <div className="">
      {loadingFlag && (
        <div className="min-h-screen flex justify-center items-center">
          <TypographyTow>Loading... </TypographyTow>
        </div>
      )}

      <div className="flex flex-wrap  w-full justify-center gap-4">
        {apiData?.map((item, index) => (
          <ProductCard
            key={index}
            data={item}
            handleWishList={handleWishList}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
