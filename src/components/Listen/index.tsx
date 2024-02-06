"use client";
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";



const page = () => {

  const [playing, setPlaying] = React.useState(false);

  return (
    <div className='flex justify-center flex-col gap-3 items-center'>
      <script type='text/javascript'>
        var cstrFreePlayerUid = 587459;
        var cstrFreePlayerTheme = 'color';
        var cstrFreePlayerColor = '000000';
      </script>
      <script type='text/javascript' src='//corscdn.caster.fm/freeplayer/FreePlanPlayerEmbed.js'></script>
      {/* DO NOT REMOVE THE LINKS BELOW, THEY WILL BE HIDDEN (AND WILL HELP US A LOT) */}
      <a id='cstrFreePlayerBL1' href='//www.caster.fm/'>Free Shoutcast Hosting</a>
      <a id='cstrFreePlayerBL2' href='//www.caster.fm/'>Radio Stream Hosting</a>
      <div id='cstrFreePlayerDiv'></div>

    </div>
  )
}

export default page
