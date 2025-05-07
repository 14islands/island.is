import { useRef } from 'react'

import * as styles from './VideoEmbed.css'

export default function VideoEmbed() {
  const playerRef = useRef<HTMLDivElement>(null)

  function createPlayer(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    console.log('createPlayer')
    if (playerRef.current) {
      playerRef.current.innerHTML =
        '<iframe src="//vod.althingi.is/player/?type=dvr&dvrwindow=6" width="100%" height="100%" frameborder="0" scrolling="no" type="text/html" style="border:0;overflow:hidden;" allowtransparency allowfullscreen seamless allow="autoplay; fullscreen"></iframe>'
    }
  }

  return (
    <div id="video" className={styles.videoContainer}>
      <div ref={playerRef} className={styles.player}>
        <a
          className="notexternal"
          href="//vod.althingi.is/player/?type=dvr&dvrwindow=1"
          onClick={createPlayer}
          title="Bein útsending"
        >
          <img
            src="//vod.althingi.is/althingi.jpg"
            className={styles.image}
            alt="Mynd úr útsendingu"
          />
        </a>
      </div>
    </div>
  )
}
