import { style } from '@vanilla-extract/css'

export const demoGrid = style({
  margin: '2rem 0',
})

export const demo = style({
  backgroundColor: '#eee',
})

export const demoBox = style({
  paddingTop: '12px',
  paddingBottom: '12px',
  marginTop: '12px',
  marginBottom: '12px',
  textAlign: 'center',
  background: '#99c0ff',
  width: '100%',
})

export const searchResultItem = style({
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

export const meetingsBox = style({
  backgroundColor: '#F6F6FD',
  padding: '32px 24px 28px 32px',
  borderRadius: '8px',
})
