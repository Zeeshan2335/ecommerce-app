import { useEffect, useState } from "react";
import ProductCard from "../pageComponents/ProductCard";
import { productApi } from "../apis/productApi";
import { useDispatch } from "react-redux";
import { handleProductData } from "../state/Slices/products/products.slice";
import Slider from "../components/Slider";

const Home = () => {
  const [productData, setProductData] = useState([]);
  console.log("productData :", productData);

  const dispatch = useDispatch();
  const getData = async () => {
    const result = await productApi("https://dummyjson.com/products", "get");
    setProductData(result?.data?.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <h1>Home </h1>

      <div  className="flex flex-wrap justify-center gap-4">
        {productData.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
