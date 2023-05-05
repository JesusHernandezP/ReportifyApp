import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import './Themes.css'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Temas', 'sub2', <AppstoreOutlined />, [
    getItem('Sports', '1'),
    getItem('Politics ', '2'),
    getItem('Economy', '3'),
    getItem('Education', '4'),
    getItem('Society', '5'),
    getItem('Techonology', '6'),
    getItem('Culture', '7'),
    getItem('Sciencie', '8'),
    getItem('Gaming', '9'),
    getItem('Medicine', '10'),
  ]),
]

// submenu keys of first level
const rootSubmenuKeys = ['sub1'];
const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className='switch'>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 145,
          backgroundColor: 'white',
        }}
        items={items}
      />
    </div>
  );

};
export default App;