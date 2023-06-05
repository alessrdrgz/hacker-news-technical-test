import { style } from '@vanilla-extract/css'

export const loadButton = style({
  padding: '8px 16px',
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: '#ff6600',
  ':hover': {
    backgroundColor: '#c36221'
  },
  border: 'none',
  borderRadius: '16px',
  cursor: 'pointer',
  transition: 'all .3s ease-in-out'
})
