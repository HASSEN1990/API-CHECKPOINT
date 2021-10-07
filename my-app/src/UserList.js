import React, { useEffect } from 'react'


const UserList = ({ list }) => {
    return (
        <div>
            {list && list.map(user => <div >
                {user.name}
                <br />
                {user.phone}
                <br />
                {user.email}
                <br />
                {user.address.city}
            </div>)}
        </div>
    )
}

export default UserList
