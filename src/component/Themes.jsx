import React from 'react'
import Buttons from './Buttons/index'

const themes = ['Deportes', 'Tecnología', 'Música']

const renderButtons = onClickTheme => {

  const renderButton = theme => (
      <Buttons
          key={theme}
          text={theme.toString()}
          clickHandler={onClickTheme} />
  )
  return themes.map(renderButton)
}

const Themes = ({ onClickTheme }) => (
  <section className="themes">
      {
          renderButtons(onClickTheme)
      }
  </section>
)



export default Themes
