import styled from 'styled-components';
import UserDetail from './Components/UserDetail';
import { useState, useEffect } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUserData = async (name) => {
    const response = await fetch(`https://api.github.com/users/${name}`);
    if (response.status === 404) {
      setUserData({});
      setError("Not Found")
      setLoading(false)
    }
    else {
      const data = await response.json();
      setUserData(data);
      setError(null)
      setLoading(false)
    }
  }

  const inputHandler = (event) => {
    setUserName(event.target.value);
  }

  const clickHandler = () => {
    if (userName) {
      setLoading(true)
      fetchUserData(userName);
      setUserName('');

    }
    else {
      setError("Please Enter A Valid username")
      setUserName('')
    }

  }

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert-info">
          <h2>loading.....</h2>
        </div>
      )
    );
  };
  const errorMessage = () => {
    return (
      error && (
        <div className='alert'>
          <p>{error}</p>
        </div>
      )
    );
  };


  return (
    <Container>
      {errorMessage()}
      <Search>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input value={userName} onChange={inputHandler} type="text" placeholder='Search Github Username...' />
        <button onClick={clickHandler}>Search</button>
      </Search>
      {loadingMessage()}
      {
        userData.name && <UserDetail data={userData} />
      }

    </Container>
  );
}

export default App;

const Container = styled.div`
 padding-block:1rem;
 min-height: 100vh;
 width: 100vw;
 background-color: #112B3C;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction:column;
 gap: 1rem;
 font-family: 'Cascadia Code', sans-serif;
  font-weight: lighter;
`
const Search = styled.div`
 height: 5rem;
 width: 841.05px;
 /* border: 2px solid red; */
 position: relative;
 border-radius: 10px;
 
 input{
    width: 100%;
    height: 100%;
    padding-inline: 4rem;
    border-radius:inherit;
    outline: none;
    border: none;
    font-size:1.2rem;
    background-color: #143F6B;
    color:#5584AC;
 }
 input::placeholder{
  color: #5584AC;
 }
 i{
  position: absolute;
  bottom: 28px;
  left: 15px;
  font-size:1.4rem;
  color: #002B5B;
 }
 button{
  position: absolute;
  bottom:20px;
  right: 10px;
  width: 6rem;
  height: 2.5rem;
  font-size: 1.2rem;
  color: #5584AC;
  background-color:#002B5B;
  border: none;
  border-radius: 5px;
  cursor: pointer;
 }

 @media (max-width:880px){
  width: 421px;
  input{
    font-size:1rem;
  }

 }
 @media (max-width:456px){
  width: 350px;
  input::placeholder{
    font-size:0.8rem;
  }

 }
 @media (max-width:360px){
  width: 330px;
  input::placeholder{
    font-size:0.7rem;
  }

 }
`
