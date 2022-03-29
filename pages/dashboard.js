import { useEffect, useState, useCallback } from "react";
import withAuth from "../utils/withAuth.js";
import DashboardPage from "../components/Dashboard.js";
import axios from 'axios'
import cogoToast from 'cogo-toast'


const Dashboard = () => {
  const [userdata, setUserdata] = useState(null)
  const [clubs, setClubs] = useState([])
  const [loading, setLoading] = useState(false)
  
const fetchData = useCallback( async() => {
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

  useEffect(() => {
    
    fetchData()

  }, [fetchData])

  const checkForInvitation = useCallback(async () => {
    const token = localStorage.getItem('token')
    try {
      let clubs = await axios({
        method: "GET",
        url: `https://clubmanagementapi.herokuapp.com/club/clubs/user`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(clubs)
      if (clubs) {
        setClubs(clubs.data)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    checkForInvitation()
  }, [checkForInvitation])

  return (
    <>
      {userdata ? <DashboardPage user={userdata} clubs={clubs} /> : null}
    </>
  );
};

export default withAuth(Dashboard);
