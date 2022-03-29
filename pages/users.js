import { useCallback, useLayoutEffect, useState } from "react";
import withAuth from "../utils/withAuth.js";
import Users from '../components/Users'
import axios from 'axios'
import { Text } from '@chakra-ui/react'

const AllUsers = () => {
    const [userdata, setUserdata] = useState([])
    const [clubs, setClubs] = useState([])
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

    const fetchClubs = useCallback(async () => {
        const token = localStorage.getItem('token')
        try {
            setLoading(true)
            let clubs = await axios({
                method: "GET",
                url: `https://clubmanagementapi.herokuapp.com/club/clubs`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(clubs.data)
            if (clubs) {
                setClubs(clubs.data)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }, [])

    useLayoutEffect(() => {
        getUsers()
    }, [getUsers])

    useLayoutEffect(() => {
        fetchClubs()
    }, [fetchClubs])


    return (
        <>
            {userdata.length > 0 && clubs.length > 0 ? <Users users={userdata} clubs={clubs} /> : <Text
                fontSize="2rem"
                mx="2rem"
            > Users not found</Text>}
        </>
    );
};

export default withAuth(AllUsers);
