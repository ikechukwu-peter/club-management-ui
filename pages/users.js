import { useCallback, useEffect, useState } from "react";
import withAuth from "../utils/withAuth.js";
import Users from '../components/Users'
import axios from 'axios'

const AllUsers = () => {
    const [userdata, setUserdata] = useState([])
    const [loading, setLoading] = useState(false)


    const getUsers = useCallback(async () => {
        const token = localStorage.getItem('token')
        try {
            setLoading(true)
            let user = await axios({
                method: "GET",
                url: `https://clubmanagementapi.herokuapp.com/club/all/users`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (user) {
                setUserdata(user.data.data)
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
        getUsers()
    }, [getUsers])


    return (
        <>
            {userdata.length > 0 ? <Users users={userdata} /> : 'No user'}

            {/* <Header />
            <Footer /> */}
        </>
    );
};

export default withAuth(AllUsers);