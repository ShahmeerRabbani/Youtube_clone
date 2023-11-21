// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import './components/Assets/profile_Dropdown/style.css';
import { MainContainer } from './components';

function App() {
   
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const[isSmallSidebar, setIsSmallSidebar] = useState(false);

  const handleSidebarToggle = () =>{
    if(isSidebarOpen){
      setIsSidebarOpen(false);
      setIsSmallSidebar(false);
    }
    else{
      setIsSidebarOpen(true);
      setIsSmallSidebar(true);
    }
  }

  // const handleSizeToggle = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  useEffect(()=>{
    const handleResize=()=>{
      if(window.innerWidth<= 1100){
        setIsSidebarOpen(true)
        setIsSmallSidebar(true)
      }
      else{
        setIsSidebarOpen(false)
        setIsSmallSidebar(false)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  },[]);
  return (
     <div className="body">
        <MainContainer
        isSidebarOpen={!isSidebarOpen}
        isSmallSidebar={isSmallSidebar}
        handleSizeToggle={handleSidebarToggle}
        />
    </div>
  );
}

export default App;
