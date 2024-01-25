import styles from "./nav.module.css";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Images from "./images/Images";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../animation";

const Nav = () => {
  const navItems = [
    {
      title: "Home",
      src: "https://i.pinimg.com/564x/45/20/08/45200850c67a7fed7bf202c68628de3c.jpg",
    },
    {
      title: "Shop",
      src: "https://i.pinimg.com/564x/37/d9/9b/37d99b552e200a588da43aaa2db5465d.jpg",
    },
    {
      title: "About Us",
      src: "https://i.pinimg.com/564x/5c/93/b5/5c93b5ccbffe75aa80ee1db3ea6d3254.jpg",
    },
    {
      title: "Lookbook",
      src: "https://i.pinimg.com/564x/fa/f7/96/faf7960bc381dacf5c03646cab819f86.jpg",
    },
    {
      title: "Contact",
      src: "https://i.pinimg.com/564x/ea/df/5e/eadf5e7da477acf55b2f398d3ae0fe12.jpg",
    },
  ];

  const [isSelectedLink, setIsSelectedLink] = useState({
    isHover: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <Body
          navItems={navItems}
          isSelectedLink={isSelectedLink}
          setIsSelectedLink={setIsSelectedLink}
        />
        <Footer />
      </div>
      <div className={styles.imageContainer}>
        <Images
          src={navItems[isSelectedLink.index].src}
          isSelectedLink={isSelectedLink}
        />
      </div>
    </motion.div>
  );
};

export default Nav;
