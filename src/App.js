import React, { useRef, useState, useCallback } from "react";
import { fetchUserData } from "./Utilites/fetchUserData";

import Input from "./Components/Input";
import Error from "./Components/UI_Helpers/Error";
import Loading from "./Components/UI_Helpers/Loading";
import UserDetail from "./Components/UserDetail";
import "./styles/stylesheet.css";

function App() {
  const userName = useRef("");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetching data in clicked and set the states
  const clickHandler = useCallback(async () => {
    // callback for not rerender the component unless the value of userName Change
    let user = userName.current.value;
    if (user) {
      setLoading(true);
      const { error, data } = await fetchUserData(
        "https://api.github.com/users",
        user
      );
      setUserData(data);

      if (error != null) {
        setError(error);
      } else {
        setError(null);
      }
      setLoading(false);
      userName.current.value = "";
    } else {
      setError("Please Enter A Valid username");
    }
  }, [userName]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      clickHandler();
    }
  };

  return (
    <div className="Container">
      {loading && <Loading />}
      {error && <Error error={error} />}
      <Input
        userName={userName}
        handleKeyDown={handleKeyDown}
        clickHandler={clickHandler}
      />
      {userData.name && <UserDetail data={userData} />}
    </div>
  );
}

export default React.memo(App);
