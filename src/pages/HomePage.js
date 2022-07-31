import React, { useEffect, useState } from "react";
import Dashboard from "../components/dashboard/Dashboard";
import BgDesign from "../components/design/BgDesign";
import Header from "../components/header/Header";
import UsersList from "../components/users/UsersList";

function HomePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("userData");
    const parsedData = JSON.parse(data);
    if (data) {
      setUser(parsedData);
    }
  }, []);

  return (
    <div>
      <BgDesign />
      <Header />
      {user.role === "admin" ? <UsersList /> : <Dashboard />}
    </div>
  );
}

export default HomePage;
