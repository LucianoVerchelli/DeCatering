import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

import "../styles/ScrollTopButton.css";

function ScrollTopButton() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  return (

    <button
      className={
        visible
          ? "scroll-top-btn active"
          : "scroll-top-btn"
      }
      onClick={scrollToTop}
    >
      <HiArrowUp />
    </button>

  );
}

export default ScrollTopButton;