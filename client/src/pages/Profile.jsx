import '../../style/Profile.css'
import { FaRegTrashAlt } from "react-icons/fa";

const Profile = () =>{ 
    return(
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col" className='jerseyNum'>Jersey #</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope='col'>Remove</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td className='firstName'>Mark</td>
                <td className='lastName'>Otto</td>
                <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
            </tr>
            </tbody> 
      </table>



    //          <tr>
    //             <th scope="row">2</th>
    //             <td className='firstName'>Jacob</td>
    //             <td className='lastName'>Thornton</td>
    //             <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
    //         </tr>
    //         <tr>
    //             <th scope="row">3</th>
    //             <td className='firstName'>Larry</td>
    //             <td className='lastName'>the Bird</td>
    //             <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
    //         </tr>
    //         <tr>
    //             <th scope="row">4</th>
    //             <td className='firstName'>Mark</td>
    //             <td className='lastName'>Otto</td>
    //             <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
    //         </tr>
    //         <tr>
    //             <th scope="row">5</th>
    //             <td className='firstName'>Jacob</td>
    //             <td className='lastName'>Thornton</td>
    //             <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
    //         </tr>
    //         <tr>
    //             <th scope="row">6</th>
    //             <td className='firstName'>Larry</td>
    //             <td className='lastName'>the Bird</td>
    //             <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
    //         </tr>
    //         <tr>
    //             <th scope="row">7</th>
    //             <td className='firstName'>Mark</td>
    //             <td className='lastName'>Otto</td>
    //             <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
    //         </tr>
    //         <tr>
    //             <th scope="row">8</th>
    //             <td className='firstName'>Jacob</td>
    //             <td className='lastName'>Thornton</td>
    //             <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
    //         </tr>
    //         <tr>
    //             <th scope="row">9</th>
    //             <td className='firstName'>Larry</td>
    //             <td className='lastName'>the Bird</td>
    //             <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
    //         </tr>
    //         <tr>
    //             <th scope="row">10</th>
    //             <td className='firstName'>Larry</td>
    //             <td className='lastName'>the Bird</td>
    //             <td><button className='trashBtn'><FaRegTrashAlt/></button></td>
    //         </tr>
    //         </tbody> 
    //   </table>
    )
}
export default Profile 
