import {useEffect} from 'react';
const Profile=()=>{

useEffect(()=>{
    console.log("useeffect inside")
//when wwe leave page
return()=>{
    console.log("useeffect end")
}

})


console.log("hi,tihsiis , useeeffect")

    return(
<div>

<h2>Profile componenet</h2>

    </div>
    )
}



export default Profile;