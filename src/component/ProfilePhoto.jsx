import { Image } from 'antd';
import { apiURL } from '../config.js'

function ProfilePhoto({ img }) {
  return <Image
    width={200}
    height={200}
    src={`${apiURL}/avatars/${img}`}
  
  />
}


export default ProfilePhoto;