import { keyframes, style } from '@vanilla-extract/css'
import { theme, themeUtils } from '@island.is/island-ui/theme'

export const videoContainer = style({
  position: 'relative',
  paddingBottom: '67%',
  height: 0,
  width: '100%',
})

export const player = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
})

export const image = style({
  width: '100%',
  height: 'auto',
})

export const controls = style({
  position: 'absolute',
  height: '50px',
  display: 'flex',
  alignItems: 'flex',
  gap: 18,
  cursor: 'pointer',
  pointerEvents: 'none',
  bottom: 10,
  left: 5,
  '@media': {
    [`screen and (min-width: ${theme.breakpoints.md}px)`]: {
      bottom: 32,
      left: 31,
    },
    [`screen and (min-width: ${
      theme.breakpoints.lg
    }px) and (max-width: ${1200}px)`]: {
      left: '50% !important',
      bottom: '50% !important',
      transform: 'translate(-50%, 50%)',
    },
  },
})

export const playIcon = style({
  position: 'relative',
  ':before': {
    content: '""',
    display: 'block',
    width: '50%',
    height: '50%',
    backgroundColor: `${theme.color.blue400}`,
    position: 'absolute',
    top: '25%',
    left: '25%',
    zIndex: 0,
  },
})

export const controlsText = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media': {
    [`screen and (min-width: ${
      theme.breakpoints.lg
    }px) and (max-width: ${1200}px)`]: {
      display: 'none',
    },
  },
})

export const playSvg = style({
  width: '53px',
  height: '53px',
  position: 'relative',
  zIndex: 1,
})
export const pulseAnimation = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0,
  },
})

export const liveIndicator = style({
  display: 'inline-block',
  width: '5px',
  height: '5px',
  backgroundColor: `${theme.color.red400}`,
  color: `${theme.color.red400}`,
  animation: `${pulseAnimation} 1.5s infinite steps(1)`,
  borderRadius: '50%',
  marginBottom: '.1em',
  marginRight: '0.33em',
})
