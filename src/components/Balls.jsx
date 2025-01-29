import React from "react";

const Balls = ({ imageSrc, index, width = 100, position = {} }) => {
  return (
    <div
    className={` items-center justify-center rounded-full absolute opacity-75 floating-ball hidden lg:block xl:block`}
    style={{
        background: "linear-gradient(to bottom, #6441A5 0%, #1a0433 100%)",
        boxShadow:
          "0px 4px 24px rgba(159, 15, 203, 0.5), 0px 2px 12px rgba(159, 15, 203, 0.3)",
        width: `${width}px`,
        height: `${width}px`,
        animationDelay: `${index * 0.2}s`, // Stagger animation for multiple balls
        ...position,
      }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`Ball ${index}`}
          className="absolute inset-0 m-auto max-w-[80%] max-h-[80%] object-contain "
        />
      )}
      <style jsx>{`
        .floating-ball {
          animation: float 1s ease-in-out infinite alternate;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .floating-ball {
            width: ${width * 0.75}px;
            height: ${width * 0.75}px;
          }
        }

        @media (max-width: 480px) {
          .floating-ball {
            width: ${width * 0.5}px;
            height: ${width * 0.5}px;
          }
        }
      `}</style>
    </div>
  );
};

export default Balls;
