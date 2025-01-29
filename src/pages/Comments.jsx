import React from "react";
import { motion } from "framer-motion";
import backIMg from "../images/background/withCir.png";
import quoteImg from "../images/pngs/quote.png";

const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const testimonials = [
  {
    name: "Dhivya Suryadevara",
    title: "Barra Broadens Diversity",
    image:
      "https://www.inclusiontimes.com/content/images/2020/08/GMDhivyaSuryadevara05-Mar-2016.jpg", // Replace with actual image URL
    quote: "This is the best service I have ever used. Highly recommend!",
  },
  {
    name: "Leena Nair",
    title: "Luxury Brand Chanel",
    image:
      "https://indianbusinesstimes.com/wp-content/uploads/2021/12/1639653960_whatsapp-image-2021-12-16-at-16-28-30.jpeg",
    quote: "This is the best service I have ever used. Highly recommend!",
  },
  {
    name: "Amy Golding",
    title: "Consultancy Opus",
    image:
      "https://elitebusinessmagazine.co.uk/wp-content/uploads/2022/09/AmyGolding-1.webp",
    quote: "This is the best service I have ever used. Highly recommend!",
  },
  {
    name: "Leena Nair",
    title: "Luxury Brand Chanel",
    image:
      "https://indianbusinesstimes.com/wp-content/uploads/2021/12/1639653960_whatsapp-image-2021-12-16-at-16-28-30.jpeg",
    quote: "This is the best service I have ever used. Highly recommend!",
  },
  {
    name: "Amy Golding",
    title: "Consultancy Opus",
    image:
      "https://elitebusinessmagazine.co.uk/wp-content/uploads/2022/09/AmyGolding-1.webp",
    quote: "This is the best service I have ever used. Highly recommend!",
  },
  {
    name: "Dhivya Suryadevara",
    title: "Barra Broadens Diversity",
    image:
      "https://www.inclusiontimes.com/content/images/2020/08/GMDhivyaSuryadevara05-Mar-2016.jpg", // Replace with actual image URL
    quote: "This is the best service I have ever used. Highly recommend!",
  },
];

const Comments = () => {
  return (
    <div
      id="comments"
      className="relative w-full py-16 px-6 text-white text-center"
    >
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
        className="absolute inset-0 bg-blue-950 rounded-[50px] -z-10"
        style={{
          backgroundImage: `url(${backIMg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      /> */}
      <div className="z-10">
        <h2 className="text-4xl font-bold mb-5 mt-20">What Our Clients Say</h2>
        <p className="text-lg mb-8">Hear from some of our satisfied clients.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#2A0E41] p-6 rounded-2xl border border-purple-700 shadow-lg flex flex-col items-center text-center"
            >
              <div className=" w-full ">
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-25 h-25 rounded-full mb-4 border-2 border-purple-500 object-cover"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold">
                        {testimonial.name}
                      </h1>
                      <p className="text-sm text-purple-400 ml-5">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={quoteImg}
                      alt="quote"
                      className="w-16 h-16  mb-4  rotate-180"
                    />
                  </div>
                </div>
                <div className="border-t-3   border-purple-500 ml-5 mr-5">
                  <p className="mt-4 italic text-gray-300">
                    “{testimonial.quote}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
