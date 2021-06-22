import React, {useRef, useState} from 'react';
import {Map, Marker } from 'react-bmapgl';
interface MapClickEvent extends Event{
  latlng: {
    lng: number,
    lat: number
  }
}
const App:React.FC = () => {
  const [point, setPoint] = useState<BMapGL.Point>(new BMapGL.Point(116.404449, 39.914889))

  return (
    <div id='map' style={{ width: '600px', height: '600px', border: '1px solid #333'}} >
      <Map center={new BMapGL.Point(116.404449, 39.914889)} zoom={12} onClick={(e: MapClickEvent) => {
        // 点击百度地图添加点位
        setPoint(new BMapGL.Point(e.latlng.lng, e.latlng.lat))
      }}>
        {/*<Marker position={point}  icon='simple_red' />*/}
        {/*{ point && <Marker position={point}  icon='simple_red' />}*/}
        {/*  http://huiyan.baidu.com/github/react-bmapgl/#/%E8%A6%86%E7%9B%96%E7%89%A9/Marker */}
        {/*map *地图实例，来自父元素<Map>的继承，无需手动传入*/}
      </Map>
    </div>
  )
}


export default App
