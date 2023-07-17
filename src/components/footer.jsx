// import { useEffect, useState } from 'react';
import '../components/footer.css'
// import axios from 'axios';


export default function Footer() {
    // const [userData, setUserData] = useState(null);
    
    // useEffect(() => {
    //     const fetchUserData = async () => {
    //       try {
    //         const response = await axios.get('https://api.github.com/users/al3sha9');
    //         setUserData(response.data);
    //       } catch (error) {
    //         console.error('Error fetching user data:', error);
    //       }
    //     };
      
    //     fetchUserData();
    //   }, []);
      

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="foot text-center mt-4 ">
                            <p className='pt-3 toper-para pb-4'>Made with &#9825; at techalphalogix by Ali Shan |  ©️ all rights reserved  </p>
                        </div>
                        {/* <div>
                            {userData ? (
                            <div>
                                <h2>{userData.name}</h2>
                                <p>{userData.bio}</p>
                            </div>
                            ) : (
                            <p>Loading user data...</p>
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}