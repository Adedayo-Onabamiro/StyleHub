import './App.css';
import { ElevateFashion } from './Components/ElevateFashion';
import { Navigation } from './Components/Navigation';

function App() {
  return (
    <div className='bg-[#FBF6F4]'>
      <Navigation></Navigation>
      <ElevateFashion></ElevateFashion>
    </div>
  );
}

export default App;
