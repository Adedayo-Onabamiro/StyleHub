import './App.css';
import { ElevateFashion } from './Components/ElevateFashion';
import { Featured } from './Components/Featured';
import { LatestArrivals } from './Components/LatestArrivals';
import { LatestCollections } from './Components/LatestCollections';
import { Navigation } from './Components/Navigation';

function App() {
  return (
    <div className='bg-[#FBF6F4]'>
      <Navigation></Navigation>
      <ElevateFashion></ElevateFashion>
      <LatestCollections></LatestCollections>
      <LatestArrivals></LatestArrivals>
      <Featured></Featured>
    </div>
  );
}

export default App;
