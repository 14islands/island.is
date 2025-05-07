import { style } from '@vanilla-extract/css'

export const videoContainer = style({
  backgroundColor: 'red',
  position: 'relative',
  paddingBottom: '56.25%',
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
