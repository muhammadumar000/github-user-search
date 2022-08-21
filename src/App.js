import UserDetail from './Components/UserDetail';
import {useEffect,useState } from 'react';
import './styles/stylesheet.css';
import SyncLoader from "react-spinners/SyncLoader";

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

  // const inputHandler = (event) => {
  //   setUserName(event.target.value);
  // }

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
        <div className="alert-info" style={{ marginTop: '5px' }}>
          {/* <h2>loading.....</h2> */}
          <SyncLoader
            color={"#ff9300"}
            loading={loading}
            size={25}
            margin={5}
            speedMultiplier={0.85}
          />
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

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        clickHandler()
      }
    }

  return (
    <div className='Container'>
      {errorMessage()}
      <div className='Search'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input value={userName} onChange={(event) => {setUserName(event.target.value);}} type="text" placeholder='Search Github Username...' onKeyDown={handleKeyDown} />
        <button onClick={clickHandler}>Search</button>
      </div>
      {
        userData.name && <UserDetail data={userData} />
      }
    </div>
  );
}

export default App;

