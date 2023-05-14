'use client'

import React, { useRef, useState } from 'react';

export function AudioPlayer(props: { audioFilePath: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleAudio() {
    const audio = audioRef.current;

    if (!audio) {
      return
    }

    if (isPlaying) {
      audio.pause();
      audioRef.current.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
        <source src={props.audioFilePath} type="audio/mpeg" />
      </audio>
      <button onClick={toggleAudio}>
        {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
          </svg>
        }
      </button>
    </div>
  );
}
