"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  {
    src: "/photos/first.jpeg",
    title: "pertama kali kenall ",
    date: "18 Januari 2025",
    description:
      "hari dimana yang ngga aku sangka klo bisa sampe sini.",
  },
  {
    src: "/photos/ketawa.jpeg",
    title: "senyum favoritku ",
    date: "25 Januari 2025",
    description:
      "gatau ya kenapa aku selalu senyum sendiri setiap lihat foto ini. mungkin karna ada senyum paling favoritku di dunia hehe.",
  },
  {
    src: "/photos/sleep.jpeg",
    title: "sleepcall ",
    date: "14 Februari 2025",
    description:
      "ngga peduli sesibuk apapun kita pasti call sama vc wkwk, yang penting ada kamu di samping aku. Sesederhana itu udah bikin aku bahagia.",
  },
  {
    src: "/photos/lawak.jpeg",
    title: "pas sayang ngelawak",
    date: "20 Maret 2025",
    description:
      "aku berharap nanti akan ada lebih banyak lagi momen seperti ini. lebih banyak cerita, tawa, dan kenangan yang kita buat bersama.",
  },
  {
    src: "/photos/cowo.jpeg",
    title: "cowok kesayanganku ",
    date: "10 April 2025",
    description:
      "klo disuruh milih foto favorit, jujur aku bakal bingung. soalnya semua foto kamu selalu kelihatan ganteng pluss maniss di mataku.",
  },
  {
    src: "/photos/semoga.jpeg",
    title: "semoga selalu bersama ",
    date: "forever",
    description:
      "semoga ini bukan akhir dari album kita. aku berharap masih banyak halaman-halaman baru yang bisa kita isi bersama.",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 bg-gradient-to-b from-pink-50 via-white to-pink-50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-semibold text-pink-500">
            our memories 
          </p>

          <h2 className="mt-3 text-5xl font-extrabold">
            album kenangan kita
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            setiap foto punya cerita.
            dan semua cerita itu selalu membuat aku bersyukur karna ada kamu.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl border border-pink-100"
            >
              <div className="overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={500}
                  height={600}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {photo.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-pink-500">
                   {photo.date}
                </p>

                <div className="mt-4 rounded-2xl bg-pink-50 p-4">
                  <p className="leading-7 text-gray-600">
                    {photo.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="rounded-full bg-pink-100 px-3 py-1 text-pink-600">
                    favorite moment
                  </span>

                  <span className="text-gray-400">
                    #{index + 1}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}