import { useEffect, useState } from "react";
import withAuth from "../utils/withAuth.js";
import Footer from '../components/Footer'
import Header from '../components/Header'
import DashboardPage from "../components/Dashboard.js";
import axios from 'axios'

const Dashboard = () => {
  const [userdata, setUserdata] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    const userId = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    try {
      console.log(token, userId)
      setLoading(true)
      let user = await axios({
        method: "GET",
        url: `https://clubmanagementapi.herokuapp.com/user/user/${userId}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (user) {
        setUserdata(user.data.user)
      }
      console.log(user)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    finally {
      setLoading(false)
    }
  }, [])


  return (
    <>
      <Header />
      {userdata ? <DashboardPage user={userdata} /> : null}
      <Footer />
    </>
  );
};

export default withAuth(Dashboard);