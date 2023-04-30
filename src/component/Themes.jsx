import React, { useState } from 'react'
import { Tag } from 'antd'

import './Themes.css'

const { CheckableTag } = Tag

const themes = ['sports', 'politics', 'economy', 'education', 'society', 'technology', 'culture', 'science', 'gaming', 'medicine']

const Themes = ({ onClickTheme }) => {
  
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  }
  return (
      <div className="themes">
      {themes.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
      </div>
  )
}
export default Themes
