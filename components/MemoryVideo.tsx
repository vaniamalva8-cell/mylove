"use client";

export default function MemoryVideo() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl shadow-xl">
        <video
          src="/vidio/ijal.mp4"
          controls
          className="h-[420px] w-full object-cover"
        />
      </div>
    </section>
  );
}