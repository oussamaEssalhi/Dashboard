import { Add, Table } from '../../components/index';
import './users.css'
import {userRows ,Usercolumns} from"../../DataItemsSideBar"
import { useState } from 'react';



const Users = () => {
  const [open , setOpen]=useState(false)
  return (
    <div className='users'>
        <div className="user-info">
          <h1>Users</h1>
          <button  onClick={()=>  setOpen(true)}>Add User</button>
        </div>
        <div className="table">
          <Table dataRow={userRows} dataColumn={Usercolumns}  />
        </div>
        {open && <Add handelclick={setOpen} title="user" columns={Usercolumns}/>}
    </div>
  )
}

export default Users