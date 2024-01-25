import dynamic from 'next/dynamic'
import React from "react";


const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


export default function MediaPlayer() {


  return (<ReactPlayer
    url={"https://skillcaptain-public.s3.ap-south-1.amazonaws.com/videos/database_index_without_music.mp4"}
    width="100%"
    height="100%"
    controls={true} />)
} 