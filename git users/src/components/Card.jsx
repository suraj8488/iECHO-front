import React from 'react'
import { useState } from 'react';
import Loading from './Loading';
const Card = () => {
    const [USerID, setUserID] = useState("");
    // const [Name, setName] = useState("");
    // const[Image, setImage]=useState("https://www.tailorbrands.com/wp-content/uploads/2022/02/icons-27-300x300.png")
    // const [Followers, setFollowers] = useState("");
    // const [Location, setLocation] = useState("");
     const [isLoading, setisLoading] = useState("");
    const [user, setUser] = useState({name:'',image:'https://www.tailorbrands.com/wp-content/uploads/2022/02/icons-27-300x300.png',followers:'',location:'',bio:''})
    const handleChange = event => {
    setUserID(event.target.value);
        console.log('value is:', event.target.value);
    }
    let url=`https://api.github.com/users/${USerID}`
    console.log(url);
    const fetchTodos = async () => {
        try {
          setisLoading(true)
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setisLoading(false)
          setUser(prev=>({...user,name:data.name,bio:data.bio,image: data.avatar_url,followers:data.followers,location:data.location}))
          console.log(data.name)
        //  setName(data.name)
        //  setLocation(data.location)
        //  setBio(data.bio)
        //  setFollowers(data.followers)
        //  setImage(data.avatar_url)
        } catch (error) {
          console.log(error);
        }
    
      };
    
  return (
    <div>
      <div className="container">
        {isLoading? <Loading/>: null}
        <input placeholder='Enter Git userID' type="text"onChange={handleChange}/>
        <button onClick={fetchTodos}>Search</button>
        <img src={user?.image} alt="" />
        <h1>User name: {user?.name}</h1>
    <h1>Followers: {user?.followers}</h1>
    <h1>Location: {user?.location}</h1>
    <h1>Bio: {user?.bio}</h1>
      </div>
    </div>
  )
};

export default Card
