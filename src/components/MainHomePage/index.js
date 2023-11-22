// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import MainContainer from '../MainContainer/main';
import { useLocation } from 'react-router-dom';
function MainPage() {

    const location = useLocation();
    console.log(location.pathname);
   
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

export default MainPage;
