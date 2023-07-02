import { useEffect } from "react";
import { useState } from "react";

const useScrollBar = () => {
  const [completion, setCompletion] = useState(0);

  const updateScrollCompletion = () => {
    const scrollProgress = document.documentElement.scrollTop;
    const scrolledHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (scrollProgress / scrolledHeight) * 100;
    setCompletion(scrolled);

    // const scrollProgress = window.scrollY;
    // const scrolledHeight = document.body.scrollHeight - window.innerHeight;
    // if (scrolledHeight) {
    //   setCompletion(Number((scrollProgress / scrolledHeight).toFixed(2)) * 100);

    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);
  return completion;
};

export default useScrollBar;
