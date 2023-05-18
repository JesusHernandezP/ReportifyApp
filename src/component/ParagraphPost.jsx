import React, { useState } from 'react'

import { Typography } from 'antd'
import '../index.css'
import Link from 'antd/es/typography/Link'

const { Paragraph } = Typography;

const ParagraphPost = ({ content }) => {
  const [ellipsis, setEllipsis] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const paragraphStyle = {
    color: '#766f6f',
  };

  const handleExpandChange = (expanded) => {
    setExpanded(expanded);
    if (expanded) {
      setEllipsis(false);
    } else {
      setEllipsis({ rows: 2, expandable: true, symbol: ' ' })
    }
  }

  return (
    <>
      <Paragraph
        style={paragraphStyle}
        ellipsis={ellipsis}
        onExpand={handleExpandChange}
      >
        {content}
      </Paragraph>
      <Link type="link" onClick={() => handleExpandChange(!expanded)}>
        {expanded ? '...menos' : '...más'}
      </Link>
    </>
  )
}

export default ParagraphPost;