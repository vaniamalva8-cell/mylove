"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Smile,
  Shield,
  Sparkles,
  HandHeart,
  Trophy,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "penyayang",
    desc: "dia selalu bikin aku ngerasa disayang dan dihargai. meskipun kadang ngeselin tapi ada sisi dimana kaya eh ternyata dia juga sayang ya sama aku.",
  },
  {
    icon: Smile,
    title: "humoris",
    desc: "ketawanya nular, candanya receh tapi bikin happy. selalu berhasil ngehibur aku meskipun diri nya sendiri lagi ngga baik baik aja huhu, maaff ya sayangg aku belum bisa ngertiin.",
  },
  {
    icon: Shield,
    title: "pekerja keras",
    desc: "huhu kadang sedii ngeliat sayang klo kerja tu terlalu ngoyohh, jangann terlalu keras sama diri sendiri yaa sayangg.",
  },
  {
    icon: Sparkles,
    title: "spesial",
    desc: "dia punya cara sendiri yang bikin aku jatuh hati, sikap nya, cara memeperlakukan aku. semua yang sayangg lakuin bikin aku jatuh hatii hhihi",
  },
  {
    icon: HandHeart,
    title: "perhatian",
    desc: "hal-hal kecil yang dia lakuin selalu berarti buat aku apalagi selalu tau hal yang aku suka dan hal yang aku selalu lakuin, kebiasaan trs hal yang ga kusuka semua sayangg tau hampir si tapi aku bener benerr happyy.",
  },
  {
    icon: Trophy,
    title: "aku bangga",
    desc: "karena dia selalu berusaha jadi versi terbaik dirinya, selalu mau belajar hal baru apalagi ada hal yang ngga aku suka dia selalu berusaha buat lebih baik lagi.",
  },
];

export default function Reasons() {
  return (
    <section
      id="reasons"
      className="py-28 bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-pink-500 font-semibold">
            alasan
          </p>

          <h2 className="text-4xl font-bold mt-2">
            kenapa aku bangga sama dia? 
          </h2>

          <p className="text-gray-500 mt-4">
            sebenernya alasannya banyaaaa...
            tapi ini beberapa di antaranya.

            kenapaa aku bangga sama sayangg?karna di mataku, sayangg adalah seseorang yang selalu berusaha. aku bangga melihat sayangg tetap semangat bekerja, bertanggung jawab, dan ngga pernah menyerah walaupun hari-hari nya sering melelahkan.

aku juga bangga karna sayangg selalu mau belajar jadi lebih baik. sayangg mau introspeksi diri, memperbaiki kesalahan, dan berusaha menjaga hubungan kita. buatku, itu adalah hal yang sangat berharga.

terima kasih sudah menjadi seseorang yang selalu membuatku merasa disayang, dihargai, dan diperhatikan lewat hal-hal sederhana.

kklo suatu hari nanti kamu mulai meragukan diri sayangg sendiri, ingat ya... akan selalu ada satu orang yang percaya dan bangga sama sayangg, yaitu aku. aku bangga bukan cuma karna hasil yang sayangg capai, tapi juga karna semua proses dan perjuangan yang sayangg lewati.

dan itu adalah salah satu alasan kenapa aku merasa sangat beruntung punyaa sayangg.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl bg-white p-8 shadow-lg border border-pink-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-6">
                  <Icon
                    className="text-pink-500"
                    size={28}
                  />
                </div>

                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}