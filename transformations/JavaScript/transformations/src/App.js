import './App.css';
import './components/DocsImage';
import DocsImage from './components/DocsImage';
import ResizeExample from './components/ResizeExample';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Cloudinary Transformations</h1>
      </header>
      <h2>Image From Documentation Example</h2>
      <DocsImage />
      <h2>Resize Example</h2>
      <ResizeExample/>
    </div>
  );
}

export default App;
