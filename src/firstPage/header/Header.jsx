import styles from "./header.module.css";
import Nav from "./nav/Nav";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  heightBackground,
  opacity,
  translateHeaderMainRight,
  translateLogo,
} from "./animation";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.headerMainLeft}>
          <AnimatePresence>
            {!isNavOpen && (
              <motion.div
                variants={translateLogo}
                initial="initial"
                animate="enter"
                exit="exit"
                className={styles.logo}
              >
                <a href="https://i.pinimg.com/564x/cb/e2/4e/cbe24e4a1e9f3b87b280ec0f1285b95e.jpg">
                  jenn.
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                variants={translateLogo}
                initial="initial"
                animate="enter"
                exit="exit"
                className={styles.logo}
              >
                <a href="https://i.pinimg.com/564x/cb/e2/4e/cbe24e4a1e9f3b87b280ec0f1285b95e.jpg">
                  arilhisyam.
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={styles.headerMainMiddle}
          onMouseDown={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <div className={styles.hamburgerIcon}>
            <span className={isNavOpen && styles.spanCrossed}></span>
            <span className={isNavOpen && styles.spanCrossed}></span>
          </div>
          <div className={styles.hamburgerLabel}>
            <span>Menu</span>
            <motion.span variants={opacity} initial="initial">
              Close
            </motion.span>
          </div>
        </div>

        <motion.div
          variants={translateHeaderMainRight}
          initial="initial"
          animate={isNavOpen ? "close" : "open"}
          className={styles.headerMainRight}
        >
          <div className={styles.shopLabel}>
            <a href="https://i.pinimg.com/564x/82/b0/aa/82b0aa636f42cc4f69808a0856074430.jpg">
              Shop
            </a>
          </div>
          <div className={styles.cartWrapper}>
            <div className={styles.cart}>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z"
                  stroke="#4D3D30"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className={styles.cartLabel}>
              <span>{`Cart (${0})`}</span>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isNavOpen && (
          <>
            <Nav />
            <motion.div
              variants={heightBackground}
              initial="initial"
              animate="enter"
              exit="exit"
              className={styles.background}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
