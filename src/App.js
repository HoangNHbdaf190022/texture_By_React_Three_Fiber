import React from 'react';
import {Canvas, useLoader} from 'react-three-fiber';
import { OrbitControls, Stars} from '@react-three/drei';
import './App.css';
import { TextureLoader } from 'three';
import EarthDay from './assets/earth_day.jpg';


function Td(){
  // const texture = useLoader(TextureLoader, 'assets/earth_day.jpg');
  return (
    <mesh>
      <sphereGeometry attach='geometry' agrs='3'/>
      <meshLambertMaterial attach='material' color='greenyellow' />
    </mesh>
  )
}

export default function App(){
  return(
    <Canvas>
      <Td/>
      <OrbitControls/>
      <Stars/>
      <ambientLight intensity={0.2}/>  {/**  Mức độ phản chiếu*/}
      <spotLight position={[10, 5, 10]} angle='0.3'/> {/**Độ sáng 3 cạnh - tăng chân thật*/} 
    </Canvas>
  )
}