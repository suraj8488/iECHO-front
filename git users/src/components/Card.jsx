import React from 'react'
import { useState } from 'react';
const Card = () => {
    const [USerID, setuserID] = useState("");
    const [Name, setName] = useState("");
    const[Image, setImage]=useState("https://www.tailorbrands.com/wp-content/uploads/2022/02/icons-27-300x300.png")
    const [Followers, setFollowers] = useState("");
    const [Location, setLocation] = useState("");
    const [Bio, setBio] = useState("");
    const handleChange = event => {
     setuserID  ((event.target.value));
        console.log('value is:', event.target.value);
    }
    let url=`https://api.github.com/users/${USerID}`
    console.log(url);
    const fetchTodos = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
         setName(data.name)
         setLocation(data.location)
         setBio(data.bio)
         setFollowers(data.followers)
         setImage(data.avatar_url)
        } catch (error) {
          console.log(error);
        }
    
      };
    
  return (
    <div>
      <div className="container">
        <input placeholder='Enter Git userID' type="text"onChange={handleChange}/>
        <button onClick={fetchTodos}>Search</button>
        <img src={Image} alt="" />
        <h1>User name: {Name}</h1>
    <h1>Followers: {Followers}</h1>
    <h1>Location: {Location}</h1>
    <h1>Bio: {Bio}</h1>
      </div>
    </div>
  )
};

export default Card
