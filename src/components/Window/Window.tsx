import "./Window.css";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export default function Window({
  title,
  children,
  onClose,
}: Props) {
  return (
    
      <motion.div
        className="window98"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
      >
        <div className="titlebar">
          <span>{title}</span>

          <button onClick={onClose}>X</button>
        </div>

        <div className="content">
          {children}
        </div>

        <div className="statusbar">
          Done
        </div>
      </motion.div>
  
  );
}