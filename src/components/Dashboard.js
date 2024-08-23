import React, { useEffect } from 'react'
import Map from "./Map";

function Dashboard() {
  useEffect(() => {
      // window.location.reload();
  },[]);
 
  return (
    <>
        <div className="flex min-h-full items-center self-center justify-center px-6 py-12 lg:px-8">
       <Map/>
        </div>
      </>
  )
}

export default Dashboard