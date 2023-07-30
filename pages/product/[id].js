import ProductDetail from "../../components/productDetail/ProductDetail";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <ProductDetail id={id}/>
  );
};

export default ProductDetails;
