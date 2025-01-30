import { useEffect, useState } from "react";
import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";

export const Button = ({ children, link }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3 }}
      href={link}
      className="drop-shadow-[0_5px_1px_rgba(0,0,0,0.5)] bg-OrangeBG p-[3%_5%] rounded-[20px] shadow-none-hover duration-150 ease-in btn-active"
    >
      <span className="drop-shadow-outline text-TextColor text-[2rem]">
        {children}
      </span>
    </motion.a>
  );
};

const Hero = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="h-screen w-full bg-OrangeBG flex flex-col justify-center items-center">
      <AnimatePresence>
        {showImage && (
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: easeInOut,
            }}
            className="fixed z-10 h-[50%] drop-shadow-[4px_4px_3px_rgba(0,0,0,0.5)]"
            src="./images/uniat-logo-directorio.png"
            alt="Logo Uniat"
          />
        )}
      </AnimatePresence>
      <motion.h1
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: easeOut, delay: 1.7 }}
        className="text-TextColor text-[7rem] drop-shadow-outline"
      >
        Agenda UNIAT
      </motion.h1>
      <div className="flex justify-center items-center w-[40%] h-[20%] gap-[4rem]">
        <Button link={"#GreenRoom"}>Green Room</Button>
        <Button link={"#AudioRoom"}>Audio Room</Button>
      </div>
    </section>
  );
};

export default Hero;
