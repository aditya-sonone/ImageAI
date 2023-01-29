import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#F7F6E7] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-32 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-bold bg-[#F2A154] text-[#314E52] text-[18px] px-4 py-2 rounded-[24px]">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#E7E6E1] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
