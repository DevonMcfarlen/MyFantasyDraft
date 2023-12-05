import '../../style/Profile.css'

const Profile = () =>{
    return(
        
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Jersey #</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td className='firstName'>Mark</td>
                <td className='lastName'>Otto</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td className='firstName'>Jacob</td>
                <td className='lastName'>Thornton</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td className='firstName'>Larry</td>
                <td className='lastName'>the Bird</td>
            </tr>
            </tbody>
      </table>
    )
}
export default Profile 