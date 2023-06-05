import { style } from '@vanilla-extract/css'

export const header = style({
  backgroundColor: '#ff6600',
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  flexDirection: 'row',
  padding: '4px',
  gap: '12px',
  borderRadius: '8px 8px 0 0',
  height: '20px'
})

export const headerLogo = style({
  border: 'solid 1px white',
  width: '18px',
  height: '18px',
  marginLeft: '8px',
  cursor: 'pointer'
})

export const headerTitle = style({
  fontSize: '18px'
})
