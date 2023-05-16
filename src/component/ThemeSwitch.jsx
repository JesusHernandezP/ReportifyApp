import { Switch } from 'antd'

function ThemeSwitch({onChange=()=>{}}) {

  return (
    <Switch checkedChildren="🌙" unCheckedChildren="🌞" onChange={onChange} />
  )
}

export default ThemeSwitch