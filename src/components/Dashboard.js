import React, { useEffect } from 'react'
import Map from "./Map";
import CircularProgress from './chart/circular';
function Dashboard() {
  useEffect(() => {
  },[]);
  const stats = {
    equipmentAvailability: 92,
    downtimeReduction: 8,
    maintenanceScheduleCompliance: 89,
    recentAlerts: "1 Drill due for maintenance in 2 days",
  };
  return (
    <>
      <div className="flex min-h-full flex-col items-center self-center justify-center px-6 py-12 lg:px-8">
       <Map/>
       <div className="p-8 font-sans">
      <h1 className=" text-center text-3xl font-bold mb-8">Drill Management Dashboard</h1>
      <p className='text-center font-bold'>Total Drills Managed: 15</p>
      <div className="p-8 font-sans">
     
      <div className="flex justify-around mb-8">
        <CircularProgress
          value={stats.equipmentAvailability}
          label="Equipment Availability"
          color="text-green-500"
        />
        <CircularProgress
          value={stats.downtimeReduction}
          label="Downtime Reduction"
          color="text-red-500"
        />
        <CircularProgress
          value={stats.maintenanceScheduleCompliance}
          label="Maintenance Compliance"
          color="text-blue-500"
        />
      </div>
      <div className="border-t border-gray-300 pt-4">
        <h2 className="text-xl font-semibold mb-2">Recent Alerts/Warnings</h2>
        <p className="text-red-500">{stats.recentAlerts}</p>
      </div>
    </div>

      
    </div>
        </div>
      </>
  )
}

export default Dashboard