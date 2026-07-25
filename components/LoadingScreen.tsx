"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 800);

          return 100;
        }

        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FFF9FB]"
      >
        <div className="w-full max-w-md px-8 text-center">

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: .6,
              type: "spring",
            }}
            className="mb-8 text-7xl"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            className="text-4xl font-bold text-[#7A1F3D]"
          >
            a little gift
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-3 text-lg text-gray-600"
          >
            for someone special
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .9 }}
            className="mt-10 text-sm tracking-[6px] uppercase text-[#B3476B]"
          >
            Loading...
          </motion.p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#F4DDE5]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#7A1F3D] to-[#B3476B]"
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                ease: "linear",
              }}
            />
          </div>

          <p className="mt-4 text-sm font-medium text-[#7A1F3D]">
            {progress}%
          </p>
          {progress >= 100 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-lg font-semibold text-[#7A1F3D]"
            >
              selamat datang...
            </motion.p>
          )}

          {progress >= 100 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-gray-600"
            >
              di tempat yang isinya cuma tentang kamu. 
            </motion.p>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}