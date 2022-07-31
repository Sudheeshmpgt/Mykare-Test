import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import BgDesign from '../components/design/BgDesign'
import Header from '../components/header/Header'
import UsersList from '../components/users/UsersList'
import { useSelector } from "react-redux";

function HomePage() {
  const user = useSelector((state) => state.userData.value);
  console.log(user)
  return (
    <div>
        <BgDesign/>
        <Header/>
        {
          user.role === "admin" ? (
            <UsersList/>
          ) : (
            <Dashboard/>
          )
        }
    </div>
  )
}

export default HomePage