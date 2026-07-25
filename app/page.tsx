"use client";

import { useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutHim from "@/components/AboutHim";
import Reasons from "@/components/Reasons";
import Gallery from "@/components/Gallery";
import Letter from "@/components/Letter";
import Ending from "@/components/Ending";
import MusicPlayer from "@/components/MusicPlayer";
import MemoryVideo from "@/components/MemoryVideo";


export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <AboutHim />
      <Reasons />
      <Gallery />
      <Letter />
      <MusicPlayer />
      <MemoryVideo />
      <Ending />
    </>
  );
}