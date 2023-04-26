import React from 'react';
import { Button, Space } from 'antd';

const ThemeButton = () => (
  <Space size={[8, 16]} wrap style={{ width: '100%', textAlign: 'center' }}>
    {new Array(10).fill(null).map((_, index) => (
      <Button
        key={index}
        style={{ width: 'auto', minWidth: '8em', padding: '0.5em 1em' }}
      >
        Button
      </Button>
    ))}
  </Space>
);

export default ThemeButton;
