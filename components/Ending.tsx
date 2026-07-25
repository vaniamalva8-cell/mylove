"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function Ending() {
  const [clicked, setClicked] = useState(false);

  return (
    <section
      id="ending"
      className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-pink-100 py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl"></div>
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-rose-300/20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold"
        >
          the end...? 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-8 text-lg leading-9 text-gray-600"
        >
          sebenernya ini bukan akhir.
          <br />
          aku berharap ini cuma salah satu halaman
          dari perjalanan panjang kita.
          <br />
          makasiii yaaa sayangg karna sudah hadir
          dan menjadi alasan aku tersenyum setiap hari.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={() => setClicked(true)}
          className="mt-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-10 py-4 font-semibold text-white shadow-xl"
        >
          klik klo sayang akuuuu 
        </motion.button>

        {clicked && (
          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12"
          >
            <Heart
              fill="currentColor"
              className="mx-auto text-pink-500"
              size={60}
            />

            <h3 className="mt-5 text-3xl font-bold text-pink-500">
              i love uuuuuuuuuuuuuu
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              maaciii udah klik tombol ini.
              <br />
              semoga kita selalu saling memilih,
              saling mengerti,
              dan terus bersama.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}