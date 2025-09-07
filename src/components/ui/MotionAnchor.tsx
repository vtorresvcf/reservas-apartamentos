"use client";

import { motion } from "framer-motion";
import React from "react";

// Creamos un componente motion para <a> usando forwardRef
const MotionAnchor = motion(
  React.forwardRef<HTMLAnchorElement, React.ComponentProps<"a">>(
    (props, ref) => <a ref={ref} {...props} />
  )
);

export default MotionAnchor;
