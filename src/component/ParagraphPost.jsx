import React from 'react'
import '../index.css'
import { Typography } from 'antd'
import { useState } from 'react'
const { Paragraph } = Typography

const ParagraphPost = ({content}) => {

  const [ellipsis, setEllipsis] = useState(true);
  const paragraphStyle = {
    color: '#766f6f'
  }
  return (
    <>
      <Paragraph
      style={paragraphStyle}
        ellipsis={
          ellipsis
            ? {
              rows: 2,
              expandable: true,
              symbol: 'más',
            }
            : false
        }
      >
        {content}
      </Paragraph>
      </>
  )
}
export default ParagraphPost