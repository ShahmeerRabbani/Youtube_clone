// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import MainContainer from '../MainContainer/main';
function MainPage() {
   
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const[isSmallSidebar, setIsSmallSidebar] = useState(false);

  const handleSidebarToggle = () =>{
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1000) {
      setIsSmallSidebar(prevState => !prevState); // Toggle only the small sidebar
      return;
    }

    setIsSidebarOpen(prevState => !prevState);
    setIsSmallSidebar(prevState => !prevState);
  };

  // const handleSizeToggle = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  useEffect(()=>{
    const handleResize=()=>{
      const width = window.innerWidth;

      if (width > 1200) {
        setIsSidebarOpen(false);
        setIsSmallSidebar(false);
      } else if (width > 1000 && width <= 1200) {
        setIsSidebarOpen(true);
        setIsSmallSidebar(true);
      } else {
        // For smaller screens (<= 1000)
        setIsSidebarOpen(true);
        setIsSmallSidebar(false);
      }

    // if (width < 876) {
    //   setIsSidebarOpen(true);
    //   setIsSmallSidebar(false);
    // }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  },[]);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setIsSidebarOpen(true); // Close sidebar if initially on mobile screen
    }
  }, []); // Empty dependency array for initial load only
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
