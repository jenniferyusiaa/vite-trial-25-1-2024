import styles from "./body.module.css";
import { motion } from "framer-motion";
import { blur, translateNavLinks } from "../../animation";
import PropTypes from "prop-types";

const Body = ({ navItems, isSelectedLink, setIsSelectedLink }) => {
  const getChars = (word) => {
    const chars = [];
    word.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          custom={[index * 0.03, (word.length - index) * 0.01]}
          variants={translateNavLinks}
          initial="initial"
          animate="enter"
          exit="exit"
          key={index}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {navItems.map((navItem, index) => {
        const { title, src } = navItem;
        return (
          <div key={index} className={styles.navLink}>
            <motion.a
              onMouseOver={() => {
                setIsSelectedLink({
                  isHover: true,
                  index: index,
                });
              }}
              onMouseLeave={() => {
                setIsSelectedLink({
                  isHover: false,
                  index: index,
                });
              }}
              variants={blur}
              initial="open"
              animate={
                isSelectedLink.isHover === true &&
                isSelectedLink.index !== index
                  ? "open"
                  : "close"
              }
              href={src}
            >
              {title === "Home" ? <i>{getChars(title)}</i> : getChars(title)}
            </motion.a>
          </div>
        );
      })}
    </div>
  );
};

Body.propTypes = {
  navItems: PropTypes.array.isRequired,
  isSelectedLink: PropTypes.shape({
    isHover: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  setIsSelectedLink: PropTypes.func.isRequired,
};

export default Body;
