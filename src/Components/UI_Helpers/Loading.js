import React from 'react'

import SyncLoader from "react-spinners/SyncLoader";
function Loading() {
  return (
    <div className="alert-info" style={{ marginTop: '5px' }}>
    {/* <h2>loading.....</h2> */}
    <SyncLoader
      color={"#ff9300"}
      size={25}
      margin={5}
      speedMultiplier={0.85}
    />
  </div>
  )
}

export default Loading