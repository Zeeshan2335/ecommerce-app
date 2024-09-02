import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../pageComponents/ProductCard";
import { useNavigate } from "react-router-dom";
import { TypographyThree } from "../components/Typography/typography.styled";
import { getProductItems } from "../state/Slices/products/products.slice";

const WishList = () => {
  const [wishProductList, setWishProductList] = useState([]);
  const navigate = useNavigate();
  const allProducts = useSelector(getProductItems);

  useEffect(() => {
    if (allProducts) {
      const filterProducts = allProducts.filter(
        (item) => item?.isWishToBuy === true
      );
      setWishProductList(filterProducts);
    }
  }, []);

  const handleRoute = (data) => {
    navigate("/singleproductdetail", { state: { product: data } });
  };

  const handleWishList = (id, data = allProducts) => {
    if (data) {
      const result = data.filter((item) => item.id === id);
      handleRoute(...result);
    }
  };
  return (
    <div className="flex flex-wrap  w-full justify-center gap-4">
      {wishProductList?.map((item, index) => (
        <ProductCard key={index} data={item} handleWishList={handleWishList} />
      ))}

      {wishProductList.length <=0 && <div className="min-h-screen flex justify-center items-center" >
        
        <TypographyThree> ADD ITEMS </TypographyThree>
        </div>}
    </div>
  );
};

export default WishList;
