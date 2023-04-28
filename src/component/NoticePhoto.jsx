import { Image } from 'antd';
import { apiURL } from '../config.js'

function ProfilePhoto({ img }) {
  return <Image
    width={200}
    height={200}
    src={`${apiURL}/photo/${img}`}
  
  />
}


export default ProfilePhoto;