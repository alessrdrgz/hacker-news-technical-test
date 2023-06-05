import { style } from '@vanilla-extract/css'

export const post = style({
  color: '#374151',
  marginBottom: '16px'
})

export const postTitle = style({
  textDecoration: 'none',
  color: '#111',
  fontSize: '18px'
})

export const postHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '2px',
  lineHeight: '16px'
})

export const postFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  lineHeight: '16px',
  fontSize: '12px',
  marginLeft: '16px'
})

export const postLink = style({
  color: '#888',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
})

export const postUsername = style({
  fontWeight: 'bold'
})
