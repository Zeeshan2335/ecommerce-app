import { useEffect, useState } from "react";
import ProductCard from "../pageComponents/ProductCard";
import { productApi } from "../apis/productApi";
import { useDispatch, useSelector } from "react-redux";
import { handleProductData } from "../state/Slices/products/products.slice";
import { addSingalProduct } from "../state/Slices/products/signalProductDetail.slice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [productData, setProductData] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const apiData = useSelector((state) => state?.product?.products);

  const getData = async () => {
    const result = await productApi("https://dummyjson.com/products", "get");
    setProductData(result?.data?.products);
    dispatch(handleProductData(result?.data?.products));
  };

  const handleRoute = (data) => {
    navigate("/singleproductdetail", { state: { product: data } });
  };

  useEffect(() => {
    if (apiData.length <= 0) {
      // redux store me data nahi hai to api call hogi
      getData();
    } else {
      // store me data hai to data set karo mapping ke liye
      setProductData(apiData);
    }
  }, []);

  const handleWishList = (id) => {
    if (productData) {
      const result = productData.filter((item) => item.id === id);
      dispatch(addSingalProduct(...result));
      handleRoute(...result);
    }
  };

  return (
    <div className="">
      <h1>Home </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {productData.map((item, index) => (
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
