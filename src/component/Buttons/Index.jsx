import React from 'react'
import Button from 'react-bootstrap/Button';
import './buttons.css'

const Buttons = ({text}) => (
<Button className='style-button' variant="outline-secondary">{text}</Button>
)
export default Buttons