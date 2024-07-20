'use client';
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import ImageWithFallback from "./image-with-fallback";
import { IoCloseSharp } from "react-icons/io5";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  bgcolor: "background.paper",
  boxShadow: 4,
};

interface SlickSliderProps {
  news?:any
}

const SlickSlider = (props:SlickSliderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();

    if (lastVisit !== today) {
      setIsModalOpen(true);
      localStorage.setItem('lastVisit', today);
    }
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div>
        {/* <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={isModalOpen}
          onClose={handleCloseModal}
          closeAfterTransition
        >
          <Fade in={isModalOpen}>
            <Box sx={style} className="!rounded-xl !h-[500px]">
                    <div className="absolute top-3 right-3 z-10 bg-white rounded-full" onClick={handleCloseModal}>
                    <IoCloseSharp size={20} color="black"/>
                    </div>
              <Slider {...settings} >
                {props?.news?.map((cur:any, index:number) => { 
                  return (
                  
                  <div
                    key={cur.key}
                    className="relative flex flex-col !h-[500px] w-full !rounded-xl !bg-transparent"
                  >
                     <ImageWithFallback
                     key={cur.key}
                  alt={`article-placeholder-${index}`}
                  src={cur?.featureImage}
                  className="w-full !h-full rounded-xl object-cover bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:rounded-xl"
                ></ImageWithFallback>
                     <Typography
                      id="transition-modal-description"
                      sx={{ mt: 3 }}
                      className="absolute bottom-0 left-0 w-full bg-black text-[15px] text-white p-2 rounded-b-xl">
                      <div className="text-[18px] sm:text-[22px] text-center text-blue-300">{cur?.title}</div>
                      {cur?.description}
                    </Typography> 
                   </div>
                )})}
              </Slider>
            </Box>
          </Fade>
        </Modal> */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <Box sx={style} className="!rounded-xl !h-[500px] relative bg-white">
              <div className="absolute top-3 right-3 z-10 bg-white rounded-full cursor-pointer" onClick={handleCloseModal}>
                <IoCloseSharp size={20} color="black" />
              </div>
              <Slider {...settings}>
                {props?.news?.map((cur: any, index: number) => {
                  return (
                    <div
                      key={cur.key}
                      className="relative flex flex-col !h-[500px] w-full !rounded-xl !bg-transparent"
                    >
                      <ImageWithFallback
                        key={cur.key}
                        alt={`article-placeholder-${index}`}
                        src={cur?.featureImage}
                        className="w-full !h-full rounded-xl object-cover bg-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:rounded-xl"
                      ></ImageWithFallback>
                      <Typography
                        sx={{ mt: 3 }}
                        className="absolute bottom-0 left-0 w-full bg-black p-2 rounded-b-xl"
                      >
                        <div className="text-[18px] sm:text-[22px] text-center text-blue-300 text-ellipsis line-clamp-2">{cur?.title}</div>
                        <div className="text-[14px] sm:text-[16px] text-white text-ellipsis line-clamp-2 sm:line-clamp-3">{cur?.description}</div>
                      </Typography>
                    </div>
                  );
                })}
              </Slider>
            </Box>
          </div>
        )}
      </div>
    </>
  );
};

export default SlickSlider;