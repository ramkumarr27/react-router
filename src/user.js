import React from "react";
import {useParams,useLocation} from'react-router-dom' ; {/* Hook function */}

function User(){
    {/* if we use hook function means we have to declare it first at outside of return*/}
    const params = useParams(); 
    const location = useLocation();

    console.log(location);

    return(
        
        <>
            <h3>User Component</h3>
         {/* for taking the values from the url */}
            UserID : {params.userid} ;  <br/>
            Courseid : {params.courseid} ; <br />
        </>
    )
}

export default User;
