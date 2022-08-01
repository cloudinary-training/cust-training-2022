import './App.css';
import './components/DocsImage';
import DocsImage from './components/DocsImage';
import ResizeExample from './components/ResizeExample';
import CropExample from './components/CropExample';
import OptimizationImageExample from './components/OptimizationImageExample';
import OptimizationVideoExample from './components/OptimizationVideoExample';


function App() {
  return (
    <div  className='App'>
      <header className='App-header'>
        <h1>Cloudinary Transformations</h1>
      </header>
      <main >
      
        <div>
          <h2>Resize Example: fill, g_auto</h2>
          <ResizeExample />
        </div>
        <div>
          <h2>Crop Example: thumb, g_face</h2>
          <CropExample />
        </div>
        <div>
          <h2>Optimization Image: f_auto,q_auto</h2>
          <OptimizationImageExample />
        </div>
        <div>
          <h2>Optimization Video: f_auto, q_auto</h2>
          <OptimizationVideoExample />
        </div>
        <div>
          <h2>Image From Documentation Example</h2>
          <DocsImage />
        </div>
       
      </main>
    </div>
  );
}

export default App;
