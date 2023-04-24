import { Button, Space } from 'antd';
const contentStyle = {
  marginLeft: '120px',  
  margin: '10px',

};

const ThemeButton = () => (
  <Space wrap>
    <Button type="primary"  style={contentStyle} >
      Primary
    </Button>
    <Button type="primary" style={contentStyle} >
      Primary
    </Button>
    <Button type="primary" style={contentStyle} >
      Primary
    </Button>
    <Button type="primary" style={contentStyle} >
      Primary
    </Button>
    <Button type="primary" style={contentStyle} >
      Primary
    </Button>
    <Button type="primary" style={contentStyle} >
      Primary
    </Button>
    
  </Space>
);
export default ThemeButton;