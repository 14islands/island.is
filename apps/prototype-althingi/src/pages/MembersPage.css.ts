import { style } from '@vanilla-extract/css'
import { themeUtils } from '@island.is/island-ui/theme'

export const memberList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '22px',
})

export const memberListItem = style({
  width: '100%',
  ...themeUtils.responsiveStyle({
    sm: {
      width: 'calc(50% - 11px)',
    },
    md: {
      width: '100%',
    },
    lg: {
      width: 'calc(50% - 11px)',
    },
  }),
})

export const searchResultItem = style({
  display: 'block',
  padding: '12px',
  borderBottom: '1px solid #ccc',
  selectors: {
    '[aria-selected="true"] &': {
      backgroundColor: '#f2f7ff',
    },
  },
})

export const searchResultItemName = style({
  fontWeight: 'bold',
})

export const searchResultItemParty = style({
  fontSize: '12px',
  color: '#666',
})
