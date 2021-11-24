import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import axios from 'axios';
import { useState, useEffect } from 'react';
import About from "./About";
import Home from "./Home";
import Market from "./Market";
import Profile from "./Profile";
import { CgProfile } from "react-icons/cg";
import "./App.css";
import Detail from "./Detail";


function App() {
  const options = {method: 'GET', headers: {'X-API-KEY': '94eafb0a6e074e879165b6deb55f5063'}};
  const [nft,setnft] = useState();
  const [detail, setdetail] = useState()

    useEffect(() => {
        getnft();
    })

    let data;
    if(nft !== undefined){
        data = nft.assets
    }

    async function getnft(){
        await axios 
        .get('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20', options)
        .then((response) => {
          setnft(response.data)
          console.log(response.data)
        })
        .catch(err => console.error(err));
    }

    function getdetail(data){
      setdetail(data)
    }

  return (
    <div>
     
    <BrowserRouter>
    <header className = "headertitle"> 
      <h2 id = "titleGroup">iniTOKO NFT</h2>
    </header>
      <Routes>
        <Route path="/" exact element={<Home data={nft}/>}>
        </Route>
        <Route path="/profile" element={<Profile />}>
        </Route>
        <Route path="/market" element={
            <Market  todetail={getdetail} data={nft}  />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/detail" element={<Detail datanft={detail}/>}></Route>
      </Routes>
      <footer>

        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/market" className="iconWrapper">
          <HiShoppingBag className="icon" />
          Market
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <CgProfile className="icon" />
          Profile
        </NavLink>
        <NavLink to="/About" className="iconWrapper">
          <MdGroup className="icon" />
          About Us
        </NavLink>
      </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
