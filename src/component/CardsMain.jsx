import { Card, Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar} from 'antd';
import ModalButtonComments from '../component/ModalButtonComments.jsx'


const { Meta } = Card;

const CardsMain = () => (
  
  <Row gutter={16}>
    <Col span={8}>
    <Card
    style={{
      width: 400,
      margin: 10,
    }}
    cover={
      <img
        alt="example"
        src="https://placeimg.com/450/275/people"
      />
    }
    actions={[
      <ModalButtonComments key="setting" />,
      <EditOutlined key= ''/>,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://placeimg.com/450/275/people "/>}
      title="Card title"
      description="This is the description"
    />
  </Card>
    </Col>
    <Col span={8}>
    <Card
    style={{
      width: 400,
      margin: 10,

    }}
    cover={
      <img
        alt="example"
        src="https://placeimg.com/450/275/animals"
      />
    }
    actions={[
      <ModalButtonComments key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://placeimg.com/450/275/arch "/>}
      title="Card title"
      description="This is the description"
    />
  </Card>
    </Col>
    <Col span={8}>
    <Card
    style={{
      width: 400,
      margin: 10,

    }}
    cover={
      <img
        alt="example"
        src="https://placeimg.com/450/275/arch"
      />
    }
    actions={[
      <ModalButtonComments key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://placeimg.com/450/275/arch" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
    </Col>
    
  </Row>
);
export default CardsMain;

