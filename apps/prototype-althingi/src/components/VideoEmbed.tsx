import { useRef, useState } from 'react'

import { Icon, Text } from '@island.is/island-ui/core'

import * as styles from './VideoEmbed.css'

export default function VideoEmbed({
  posterSrc = '//vod.althingi.is/althingi.jpg',
}: {
  posterSrc?: string
}) {
  const playerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // eslint-disable-next-line func-style
  function createPlayer(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setIsPlaying(true)
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
            src={posterSrc}
            className={styles.image}
            alt="Mynd úr útsendingu"
          />
        </a>
      </div>
      {!isPlaying && (
        <div className={styles.controls}>
          <div className={styles.playIcon}>
            <Icon icon="playCircle" color="white" className={styles.playSvg} />
          </div>
          <div className={styles.controlsText}>
            <Text variant="eyebrow" color="yellow100">
              <div className={styles.liveIndicator}></div>WATCH LIVE · BROADCAST
            </Text>
            <Text variant="small" color="yellow100">
              Parliamentary session, MAY 14 AT 3:00 PM
            </Text>
          </div>
        </div>
      )}
    </div>
  )
}
