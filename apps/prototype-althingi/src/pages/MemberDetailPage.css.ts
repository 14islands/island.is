import { style } from '@vanilla-extract/css'
import { theme } from '@island.is/island-ui/theme'

export const card = style({
  borderRadius: '8px',
  border: `1px solid ${theme.color.blue200}`,
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const cardHeader = style({
  backgroundColor: `${theme.color.blue100}`,
  // @ts-ignore
  '> h2': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
})

/* secondary / blueberry / 300 */

export const cardHeightWrapper = style({
  height: '100%',
  // @ts-ignore
  '> div': {
    height: '100%',
  },
})

export const cardContent = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
})

export const cardImage = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})
