// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function App() {
  const product = [
    {
      id: 1,
      name: "Product 1",
      image: "https://picsum.photos/200/300",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://picsum.photos/200/300",
      price: 200,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {product.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
