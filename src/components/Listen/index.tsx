import React from 'react'
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <div>
      <Helmet>
        <script type='text/javascript'>
          var cstrFreePlayerUid = 587459;var cstrFreePlayerTheme = 'color';var cstrFreePlayerColor = '000000';
        </script>
        <script type='text/javascript' src='//corscdn.caster.fm/freeplayer/FreePlanPlayerEmbed.js'></script>

      </Helmet>
    </div>
  )
}

export default index