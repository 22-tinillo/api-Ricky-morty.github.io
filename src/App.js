import React, { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

function App() {
const [info,setInfo] = useState({});
  const [characters, setcharacters] = useState([])
  const urlinitialize = "https://rickandmortyapi.com/api/character";
  const fetchCharater = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setcharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error))
  };

  const onPrevius = () =>{
  fetchCharater(info.prev)
  }
  const onNext = ()=>{
    fetchCharater(info.next)
  }
  useEffect(() => {
    fetchCharater(urlinitialize);
  }, [])

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext}/>
        <Characters characters={characters}/>
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext}/>
      </div>
      
    </>
  );
  }
export default App;
