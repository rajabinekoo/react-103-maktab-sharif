import { useCallback } from "react";
import ShippingForm from "./ShippingForm";

export default function ProductPage({ productId, referrer, theme }: any) {
  const handleSubmit = useCallback(
    (orderDetails: any) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  //   bad idea because initialize per any renderings
  //   const handleSubmit = (orderDetails: any) => {
  //     post("/product/" + productId + "/buy", {
  //       referrer,
  //       orderDetails,
  //     });
  //   };

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url: any, data: any) {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
}
