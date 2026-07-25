"use client";

import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Music,
} from "lucide-react";

const songs = [
  {
    title: "About You",
    artist: "The 1975",
    src: "/music/you.mp3",
  },
  {
    title: "My Love",
    artist: "Westlife",
    src: "/music/love.mp3",
  },
  {
    title: "Monolog",
    artist: "Pamungkas",
    src: "/music/monolog.mp3",
  },
  {
    title: "Takkan Terganti",
    artist: "Marcell",
    src: "/music/takan.mp3",
  },
  {
    title: "Terpukau",
    artist: "Astrid",
    src: "/music/terpukau.mp3",
  },
  {
    title: "Ceritanya Jatuh Cinta",
    artist: "Jeje",
    src: "/music/cinta.mp3",
  },
];


export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentSong, setCurrentSong] = useState(0);
  const [playing, setPlaying] = useState(false);


  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = songs[currentSong].src;
    audioRef.current.load();

    if (playing) {
      audioRef.current
        .play()
        .catch((error) => console.log(error));
    }

  }, [currentSong]);


  const toggleMusic = async () => {
    if (!audioRef.current) return;


    if (playing) {
      audioRef.current.pause();
      setPlaying(false);

    } else {

      try {
        await audioRef.current.play();
        setPlaying(true);

      } catch (error) {
        console.log("music error:", error);
      }

    }
  };


  const selectSong = async (index:number) => {

    setCurrentSong(index);

    setTimeout(async () => {

      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        setPlaying(true);

      } catch(error) {
        console.log(error);
      }

    },100);

  };


  const nextSong = () => {

    setCurrentSong((prev) =>
      prev === songs.length - 1
        ? 0
        : prev + 1
    );

  };


  const prevSong = () => {

    setCurrentSong((prev) =>
      prev === 0
        ? songs.length - 1
        : prev - 1
    );

  };


  return (

    <div className="mt-10 flex justify-center">


      <audio
        ref={audioRef}
        onEnded={nextSong}
        onError={() =>
          console.log(
            "file musik tidak ditemukan"
          )
        }
      />


      <div
        className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-[#B3476B]/20
        bg-white/90
        p-5
        shadow-xl
        backdrop-blur-xl
        "
      >


        <div className="mb-5 flex items-center gap-3">


          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#7A1F3D]
            text-white
            "
          >

            <Music size={22}/>

          </div>


          <div>

            <p className="text-sm text-gray-500">
              now playing
            </p>


            <h2 className="font-bold text-[#7A1F3D]">
              {songs[currentSong].title}
            </h2>


            <p className="text-sm text-gray-500">
              {songs[currentSong].artist}
            </p>


          </div>


        </div>



        <div className="mb-5 flex justify-center gap-6">


          <button
            onClick={prevSong}
            className="
            text-[#7A1F3D]
            transition
            hover:scale-110
            "
          >
            <SkipBack/>
          </button>



          <button
            onClick={toggleMusic}
            className="
            rounded-full
            bg-[#7A1F3D]
            p-4
            text-white
            shadow-lg
            transition
            hover:scale-110
            "
          >

            {
              playing
              ? <Pause/>
              : <Play/>
            }

          </button>



          <button
            onClick={nextSong}
            className="
            text-[#7A1F3D]
            transition
            hover:scale-110
            "
          >

            <SkipForward/>

          </button>


        </div>




        <div className="space-y-2">


          {
            songs.map((song,index)=>(

              <button
                key={index}
                onClick={() => selectSong(index)}
                className={`
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                transition

                ${
                  currentSong === index
                  ? "bg-[#7A1F3D] text-white"
                  : "bg-[#FFF7F9] text-gray-700 hover:bg-[#F8E7ED]"
                }
                `}
              >


                <div className="text-left">


                  <p className="font-semibold">
                    {song.title}
                  </p>


                  <p
                    className={`
                    text-sm
                    ${
                      currentSong === index
                      ? "text-white/80"
                      : "text-gray-500"
                    }
                    `}
                  >
                    {song.artist}
                  </p>


                </div>



                {
                  currentSong === index && (

                    <div
                      className="
                      h-2
                      w-2
                      rounded-full
                      bg-white
                      animate-pulse
                      "
                    />

                  )
                }


              </button>


            ))
          }


        </div>


      </div>


    </div>

  );

}