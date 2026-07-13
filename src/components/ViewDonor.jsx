import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import NavigationBar from './NavigationBar'

const ViewDonor = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get(" https://host-demo-app.onrender.com/api/donors").then(
            (response) => {

                changeData(response.data)
            }

        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    useEffect(

        () => {
            fetchData()
        },[]

    )
    return (
        <div>
            <NavigationBar/>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">donor_name</th>
                        <th scope="col">age</th>
                        <th scope="col">gender</th>
                        <th scope="col">blood_group</th>
                        <th scope="col">phone</th>
                        <th scope="col">email</th>
                        <th scope="col">city</th>
                        <th scope="col">weight_kg</th>
                        <th scope="col">last_donation_date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{value.donor_name}</th>

                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.blood_group}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.email}</td>
                                    <td>{value.city}</td>                                    
                                    <td>{value.weight_kg}</td>                                
                                    <td>{value.last_donation_date}</td>                                

                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default ViewDonor