// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import './components/Assets/profile_Dropdown/style.css';
import { MainContainer } from './components';

function App(isOpen) {


   
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSizeToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div class="body" style={{background : isOpen ? '' : 'black'}}>
        <MainContainer
        isSidebarOpen={!isSidebarOpen}
        handleSizeToggle={handleSizeToggle}
        />
    </div>
  );
}

export default App;
