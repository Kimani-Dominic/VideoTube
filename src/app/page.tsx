"use client"

// pages/index.js
import React from 'react';
import MediaPlayer from './components/MediaPlayer';
import Suggestion from './components/suggestions';
import DisplayComments from './components/DisplayComments';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-1">
      <header className="p-4 text-center bg-gray-800">
        <h1 className="text-4xl font-bold">Stream Video</h1>
      </header>
      <main className="grid md:grid-cols-3 grid-cols-1 gap-4 p-20 flex-grow">
          <div className="border-solid col-span-2 border-2 border-pink flex flex-grow">
            <MediaPlayer />
          </div>
          <div className="border-solid border-2 border-pink flex flex-grow">
            <Suggestion />
          </div>
          <div>
          <DisplayComments />
          </div>
      </main>
      <footer className="p-4 text-center bg-gray-800">
        <p className="text-sm">© 2024 VideoTube</p>
      </footer>
    </div>
  );
}