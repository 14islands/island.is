import { style, globalStyle } from '@vanilla-extract/css'
import { themeUtils } from '@island.is/island-ui/theme'

export const imageContainerHidden = style({
  display: 'none',
  ...themeUtils.responsiveStyle({
    xl: {
      display: 'flex',
    },
  }),
  // '@media': {
  //   [`screen and (min-width: ${1200}px)`]: {
  //     display: 'flex',
  //   },
  // },
})

export const image = style({
  width: 80,
  height: 80,
  maxWidth: 'none',
})

export const icon = style({
  // minWidth: 30,
  width: 'auto',
  height: 40,
  // ...themeUtils.responsiveStyle({
  //   md: {
  //     minWidth: 40,
  //   },
  // }),
})

globalStyle(`${icon} svg`, {
  height: '100%',
})
