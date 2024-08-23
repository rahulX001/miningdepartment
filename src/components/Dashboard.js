import React, { useEffect } from 'react'
import Map from "./Map";
import CircularProgress from './chart/circular';
function Dashboard() {
  useEffect(() => {
  },[]);
 
  return (
    <>
      <div className="flex min-h-full flex-col items-center self-center justify-center px-6 py-12 lg:px-8">
       <Map/>
       <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-8">Drill Management Dashboard</h1>
      <p className='text-center font-bold'>Total Drills Managed: 15</p>
      <CircularProgress />
      
    </div>
        </div>
      </>
  )
}

export default Dashboard