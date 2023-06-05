import { globalStyle, style } from '@vanilla-extract/css'

export const commentTitle = style({
  color: '#828282'
})

export const commentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '16px'
})

export const commentText = style({
  margin: '0',
  textAlign: 'justify',
  lineHeight: '1'
})

globalStyle(`${commentText} > p`, {
  margin: '0'
})

export const commentsList = style({
  listStyle: 'none'
})
