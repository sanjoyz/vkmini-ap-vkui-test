import { View, Panel, Group, Placeholder, Title, Avatar } from '@vkontakte/vkui'
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import React from 'react'

const SecondView = ({ friend }) => {
 if (!friend) {
  return <Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />}></Placeholder>
 }
 return (
  <View height="100px" id="second" activePanel="second">
   <Panel id="second" style={{ marginBlockStart: '100px' }}>
    <div style={{
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     width: '100vw',
    }}>
     <Avatar src={friend.photo_100} size={100} />
    </div>
   </Panel>
  </View>
 )
}
export default SecondView