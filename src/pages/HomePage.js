import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import BgDesign from '../components/design/BgDesign'
import Header from '../components/header/Header'
import UsersList from '../components/users/UsersList'

function HomePage() {
  return (
    <div>
        <BgDesign/>
        <Header/>
        {/* <Dashboard/> */}
        <UsersList/>
    </div>
  )
}

export default HomePage