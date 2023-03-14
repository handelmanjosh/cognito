import React from 'react';
import UIHeader from './components/UIHeader';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import Recent from './components/Recent';
import Usage from './components/Usage';
import Upload from './components/Upload';


function App() {
  return (
    <div className="flex flex-col  w-full h-[100vh] px-10 gap-4">
      <UIHeader />
      <div className="flex flex-row items-center justify-center">
        <SearchBar />
      </div>
      <div className="flex flex-row items-center justify-center gap-3 w-full h-[25%]">
        <Recent />
        <Favorites />
        <Usage />
        <Upload />
      </div>
    </div>
  );
}

export default App;
