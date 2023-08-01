// import React from 'react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination } from 'swiper/modules';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// export const ArrivalSlider = () => {
//     const CatDetails = [
//         {
//             cat: "Men's T-shirt",
//             item: "Nike Dri-FIT",
//             price: "30",
//             img: "./img/cat1.jfif",
//         },
//         {
//             cat: "Men's Sneakers",
//             item: "Nike Boot",
//             price: "130",
//             img: "./img/cat2.jfif",
//         },
//         {
//             cat: "Men's Sneakers",
//             item: "Nike Max Air",
//             price: "260",
//             img: "./img/cat3.jfif",
//         },
//         {
//             cat: "Men's T-shirt",
//             item: "Nike Tees",
//             price: "27",
//             img: "./img/cat4.jfif",
//         },
//         {
//             cat: "Men's T-shirt",
//             item: "Nike Tees",
//             price: "34",
//             img: "./img/cat5.jfif",
//         },
//     ]

//   return (
//     <Swiper
//       slidesPerView={3.2}
//       spaceBetween={30}
//       freeMode={true}
//       pagination={false} // Remove the pagination dots
//       modules={[FreeMode, Pagination]}
//       className="mySwiper w-full h-full "
//     >
//       {/* Iterate through each item in CatDetails */}
//       {CatDetails.map((item, index) => (
//         <SwiperSlide key={index} className="bg-transparentflex justify-center items-center">
//           <div
//             className="max-w-xs m-1 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300"
//             style={{ scrollSnapAlign: 'center' }}
//           >
//             {/* Top of the card with the pill div */}
//             <div className="relative">
//               <div className="bg-white opacity-75 text-sm text-black font-bold rounded-full px-4 py-2 absolute top-4 right-4">
//                 {item.cat}
//               </div>
//               <img
//                 src={item.img}
//                 alt="Person"
//                 className="w-full h-72 object-cover" // Updated image width class
//               />
//             </div>

//             {/* Bottom of the card */}
//             <div className="px-4 py-3 flex flex-row">
//               <div className="w-1/2">
//                 <div className="text-lg font-bold text-gray-800 mb-auto">
//                   {item.item}
//                 </div>
//                 <div className="text-lg font-bold text-gray-800 mb-auto">
//                   ${item.price}
//                 </div>
//               </div>

//               {/* Black button with Font Awesome arrow */}
//               <div className="w-1/2 flex items-end justify-end">
//                 <button className="bg-black text-white px-5 py-3 rounded-3xl flex items-center">
//                   <FontAwesomeIcon
//                     className="font-custom text-xl"
//                     icon={faArrowRight}
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

//Not used