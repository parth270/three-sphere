import React,{Suspense,useRef} from 'react';
import {Canvas} from "@react-three/fiber";
import Donut from './components/Donut/Donut';
// import {OrbitControls} from '@react-three/drei';
// import {useHelper} from '@react-three/fiber';
// import {PointLightHelper} from 'three';

const Light=(props)=>{

  const ref = useRef();
  // useHelper(ref,PointLightHelper,1);

  return(
    <pointLight position={props.position} ref={ref} intensity={props.intensity} color={props.color}/>
  )

};

function App() {


  return (
    <>
    <div className="container" >
      <h1>Feel the sphere</h1>
    </div>
    <div className="canvas" >
      <Canvas  camera={{position:[0,0,2],fov:65}} >
        <Light position={[1,3,4]} intensity={0.1} color="white"/>
        <Light position={[-1.86,1,-1.65]} intensity={10} color="red"/>
        <Light position={[2.13,-3,-2]} intensity={6.8} color="#15d7e6"/>
        <Suspense fallback={null} >
          <Donut/>
        </Suspense>
      </Canvas>
    </div>
    </>
  );
}

export default App;