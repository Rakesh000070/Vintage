import { motion } from "motion/react";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { buttonHoverVariant } from "../animations";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  icon,
  iconPosition = "right",
}) => {
  const baseStyles = "font-body tracking-wider uppercase text-xs transition-all duration-300 ease-out rounded-none flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-charcoal text-white hover:bg-deep-charcoal",
    secondary: "bg-soft-ivory text-charcoal hover:bg-warm-greige",
    outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    ghost: "text-charcoal hover:text-dusty-mauve",
  };

  const sizes = {
    sm: "px-6 py-3",
    md: "px-8 py-4",
    lg: "px-10 py-5",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <motion.a
          href={href}
          variants={buttonHoverVariant}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className={combinedStyles}
          onClick={onClick}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link to={href} className="contents">
        <motion.button
          variants={buttonHoverVariant}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className={combinedStyles}
          onClick={onClick}
        >
          {content}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      variants={buttonHoverVariant}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={combinedStyles}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
};
