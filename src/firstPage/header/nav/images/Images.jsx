import styles from "./images.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { opacity } from "../../animation";
import PropTypes from "prop-types";

const Images = ({ src, isSelectedLink }) => {
  return (
    <motion.div className={styles.images}>
      <AnimatePresence>
        {isSelectedLink.isHover && (
          <motion.img
            variants={opacity}
            initial="initial"
            animate="open"
            exit="close"
            src={src}
            alt="hoveringImage"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

Images.propTypes = {
  src: PropTypes.string.isRequired,
  isSelectedLink: PropTypes.shape({
    isHover: PropTypes.bool.isRequired,
  }),
};

export default Images;
