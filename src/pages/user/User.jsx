import "./user.css"
import {Single} from "../../components/index"
import {singleUser }from '../../DataItemsSideBar'
const User = () => {
  return (
    <div className='user'>
      <Single data={singleUser} />
    </div>
  )
}

export default User