import React from 'react'
import { WithData } from '../../helpers'

const UserDetails = ({users}) => {
    console.log(users);
  return (
     <div>
         <div>{users[6].address.street}</div>
         <div>{users[6].email}</div>
         <div>{users[6].phone}</div>
         <div>{users[6].company.name}</div>
         <div>{users[6].address.geo.lat}</div>
         <div>{users[6].address.geo.lng}</div>
     </div>
  )
}

export default WithData(UserDetails);