import { useInView, UseInViewOptions } from "motion/react";
import { RefObject } from "react";

export const useScrollAnimation = (
  ref: RefObject<Element>, 
  options: UseInViewOptions = { amount: 0.2, once: true }
) => {
  const isInView = useInView(ref, options);
  
  return isInView;
};
