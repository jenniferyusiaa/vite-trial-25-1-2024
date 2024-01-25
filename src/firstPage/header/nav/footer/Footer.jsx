import styles from "./footer.module.css";

const Footer = () => {
  const footerItems = [
    {
      component: "Made By: ",
      content: "Studio Lumio",
      src: "https://i.pinimg.com/564x/de/04/2e/de042ed570680d92f396ad4c30cf5558.jpg",
    },
    {
      component: "Typography: ",
      content: "Google Fonts",
      src: "https://i.pinimg.com/564x/f9/cb/5f/f9cb5f4ce77acfec0fd76f542d9ab3f1.jpg",
    },
    {
      component: "Images: ",
      content: "Pinterest, Unsplash",
      src: "https://i.pinimg.com/564x/d3/8d/da/d38dda265ef3328487ae4b2a4783f3bd.jpg",
    },
    {
      component: "Privacy Policy",
      content: "Terms & Conditions",
      src: "https://i.pinimg.com/564x/b8/ba/b0/b8bab0f358782b66e3bd6e128719f63e.jpg",
    },
  ];

  return (
    <div className={styles.footer}>
      {footerItems.map((footerItem, index) => {
        const { component, content, src } = footerItem;
        return (
          <div key={index} className={styles.tribute}>
            <span>{component}</span>
            <a href={src}>{content}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
