"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import FloatingHearts from "./FloatingHearts";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#FFF9FB] via-white to-[#F8E7ED]"
    >
      <FloatingHearts />

      {/* Blur */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#7A1F3D]/15 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#B3476B]/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-24 lg:flex-row">

        {/* ================= TEXT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex-1"
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="font-semibold tracking-widest uppercase text-[#7A1F3D]"
          >
            haiiiiiiiiii sayanggggg
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl"
          >
            akuu mauuu
            <br />

            <span className="text-[#7A1F3D]">
              kenalin
            </span>

            <br />

            seseorang...
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .7 }}
            className="mt-8 max-w-xl text-lg leading-9 text-gray-600"
          >
            Seseorang yang selalu bikin aku
            bahagia.

            <br />

            yang selalu berhasil bikin aku
            tersenyum.

            <br />

            dan seseorang yang paling aku
            banggakan.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-3xl font-bold text-gray-800"
          >
            dan orang itu adalah...
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-3 text-5xl font-extrabold text-[#7A1F3D]"
          >
            cowooo akuuu
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .95,
            }}
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="mt-12 rounded-full bg-gradient-to-r from-[#7A1F3D] to-[#B3476B] px-8 py-4 font-semibold text-white shadow-xl transition-all"
          >
            yuk kenalan
          </motion.button>

        </motion.div>


        <motion.div
          initial={{
            opacity: 0,
            scale: .8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative flex flex-1 justify-center"
        >

          <div className="absolute inset-0 rounded-full bg-[#B3476B]/20 blur-[110px]" />

          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1500}
            glareEnable
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={2000}
          >
                        <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/photos/hero.png"
                alt="My Love"
                width={470}
                height={470}
                priority
                className="floating rounded-full border-[10px] border-white object-cover shadow-[0_30px_80px_rgba(122,31,61,.35)]"
              />
            </motion.div>
          </Tilt>

        

        </motion.div>

      </div>

      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}