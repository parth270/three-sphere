import React,{useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

const Donut=(props)=>{

    const mesh = useRef();
    const texture = useLoader(TextureLoader,'NormalMap.png'); 
    
    const X=window.innerWidth/2;
    const Y=window.innerHeight/2;

    let mouseX=0;
    let mouseY=0;

    let targetX=0;
    let targetY=0;
    const onMove=(e)=>{
        mouseX=(e.clientX-X);
        mouseY=(e.clientY-Y);
    }
    document.addEventListener('mousemove',onMove);
    useFrame(({clock}) => {
        mesh.current.rotation.y= 0.5*clock.getElapsedTime();
        targetX=mouseX*0.001;
        targetY=mouseY*0.001;
        mesh.current.rotation.y+=0.5*(targetX- mesh.current.rotation.y);
        mesh.current.rotation.x+=0.5*(targetY- mesh.current.rotation.x);
        mesh.current.position.z+= -0.5*(targetY-mesh.current.rotation.x);
    });
  
    return(
      <mesh ref={mesh} >
        <sphereBufferGeometry attach="geometry" args={[0.5,64,64]} />
        <meshStandardMaterial attach="material" metalness={0.7} normalMap={texture} roughness={0.2} color="#292929"/>
      </mesh>
    );
};

export default Donut;