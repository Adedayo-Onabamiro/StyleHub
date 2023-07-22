import './App.css';
import { ElevateFashion } from './Components/ElevateFashion';
import { LatestCollections } from './Components/LatestCollections';
import { Navigation } from './Components/Navigation';

function App() {
  return (
    <div className='bg-[#FBF6F4]'>
      <Navigation></Navigation>
      <ElevateFashion></ElevateFashion>
      <LatestCollections></LatestCollections>
    </div>
  );
}

export default App;
