"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Letter() {
  return (
    <section
      id="letter"
      className="relative overflow-hidden bg-white py-28"
    >
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-pink-100 bg-white p-10 shadow-2xl"
        >

          <div className="mb-8 flex items-center gap-3">
            <Heart
              className="text-pink-500"
              fill="currentColor"
            />
            <h2 className="text-3xl font-bold">
              surat kecil buatt sayanggkuu 
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-gray-600">

            <p>haiiii sayang... </p>

            <p>
            klo kamu lagi baca surat ini, berarti kamu berhasil nemuin salah satu bagian paling spesial di website ini. Hehe.
            aku cuma mau bilang... maaciii ya, udah hadir di hidupku.
            mungkin aku ngga selalu pandai ngungkapin semuanya secara langsung, tapi aku harap lewat web ini kamu tau seberapa berharganya kamu buat aku.
            aku bangga banget sama kamuuu. bangga karna kamu selalu berusaha, tetap kuat walaupun capee, tetap bertanggung jawab sama pekerjaanmu, dan ngga pernah berhenti berjuang buat masa depan sayangg. mungkin buat orang lain itu hal yang biasa, tapi di mataku itu keren bangetttt.
            terima kasih karena sudah memperlakukan aku dengan penuh perhatian. terima kasih karna selalu berusaha bikin aku tersenyum, dengerinn cerita-ceritaku, sabar ngadepin sifatku, dan selalu mengusahakan hubungan ini. hal-hal kecil yang kamu lakuin mungkin terlihat sederhana, tapi buat aku semuanya terasa besar dan berartiiii.
            aku juga bersyukur banget dipertemukan sama kamu. dari sekian banyaaa nya orang di dunia ini, ternyata Allah mempertemukan aku sama seseorang yang bisa membuatku merasa nyaman, merasa dihargai, dan merasa dicintai.
            klo suatu hari nanti aku lagi banya ngambek, lagi keras kepala, atau bikin kamu cape, tolong jangan menyerah ya. aku emang belum sempurna, tapi aku selalu ingin belajar jadi pasangan yang lebih baikbuatt sayangg.
            aku juga janji akan terus berusaha nemeninn setiap proses sayangg. mau hari-harimu lagi mudahh ataupun berat, aku pengen tetep ada di samping sayangg. aku pengen jadi tempat sayangg pulang setelah hari yang melelahkan, jadi orang yang selalu percaya samasayangg ketika mungkin sayangg mulai meragukan diri sayangg sendiri.
            maaciii yaaa udah menjadi alasan kenapa aku sering senyum sendiri.
            maaciii udah bikin percaya klo dicintai dengan tulus itu benar benar ada.
            dan yang paling penting...
            terimakasiii sudah menjadi rumah yang paling nyaman untuk hatiku.
            aku ngga tau masa depan akan seperti apa, tapi selama kita masih sama-sama memilih untuk bertahan, aku akan terus memilih kamu, lagi, lagi, dan lagi.

            aku juga mau kamu ingat satu hal.

            kalau suatu hari nanti dunia terasa berat buat kamu,klo kamu lagi cape sama pekerjaan, lagi banya pikiran, lagi sedih, kecewa, ngerasa gagal, atau bahkan ngerasa sendirian... jangan dipendem sendiri ya, sayanggg.

            aku mungkin nggak selalu bisa nyelesain semua masalahmu. aku mungkin juga ngga selalu punya jawaban yang tepat. tapi aku selalu punya waktu buat dengerin cerita kamu, nemenin kamu, dan ada di samping kamu sebisa yang aku bisa.

            klo nanti kamu ngerasa semua orang pergi, ingat yaaa... masih ada aku. aku akan tetap ada buat nemenin kamu, jadi tempat kamu pulang, tempat kamu cerita, tempat kamu istirahat dari capeknya dunia.

            kamu ngga harus selalu terlihat kuat di depanku sayangg. ngga apa-apa klo kamu mau nangis, mau ngeluh, atau sekadar bilang, "aku capeee." buat aku, itu bukan tanda kamu lemah. justru itu tandaklo kamu percaya sama aku.

            aku ingin jadi orang yang tetap menggenggam tanganmu ketika keadaan lagi nggak baik-baik aja. bukan cuma saat kamu bahagia, tapi juga saat kamu sedang berjuang. Karna menurutku, cinta bukan cuma tentang tertawa bareng, tapi juga tentang tetap memilih bertahan saat hari-hari terasa berat.

            jadi apa pun yang terjadi nanti, jangan pernah merasa kamu harus menghadapi semuanya sendirian ya. selama aku masih ada, aku akan selalu berusaha ada buat kamu. sedikit atau banya, semampuku, aku akan tetap memilih untuk menemani sayangg melewati semuanya. sayangg hidup lebii lamaa l;agii yaa, kurangin rokok yaa? jujur aku ga maksa buat kurangi rokok cuma aku mau sayangg hidup lebih lama lagi yaa? 
            website ini mungkin sederhana,
            tapi setiap bagian yang ada di dalamnya
            aku buat dengan penuh rasa sayang.
            </p>

            <p>
              aku cuma pengen sayangg tau klo
              aku bangga banget punya kamu.
              makasih karena selalu ada,
              selalu berusaha,
              dan selalu jadi rumah yang nyaman buat aku.
            </p>

            <p>
              mungkin kita ngga selalu sempurna.
              kadang ada salah paham,
              kadang ada ego,
              kadang ada hari yang berat.
            </p>

            <p>
              tapi selama kita sama-sama mau bertahan,
              aku yakin kita bisa lewatin semuanya.
            </p>

            <p>
              tetap jadi diri kamu ya.
              karna alasan aku jatuh cinta
              bukan karna kamu sempurna,
              tapi karna kamu adalah kamu.
            </p>

            <p className="font-semibold text-pink-500">
              i love uuuuuu moreeee than yesterday,
              but less than tomorrow. 
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}