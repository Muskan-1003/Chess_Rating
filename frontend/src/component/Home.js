import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const [userArray, setuserArray] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);

      const data = await axios.get(
        `https://lichess.org/player/top/50/classical`,
        {
          headers: {
            Accept: "application/vnd.lichess.v3+json",
          },
        }
      );
      
      console.log(data.data.users);
      setuserArray(data.data.users);
      
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div >
      {loading ? (
        <p>Loading...</p>
      ) : (

        <div  >
          <div className=" font-bold">
          <Card  username={"Name"} rating={"Rating"}/>
          </div>
          <br></br>
            {userArray.map((item, index) => (
             
                <Card username={item.username} rating={item.perfs.classical.rating}/>
              
            ))}

        
        </div>
      )}
    </div>
  );
};

export default Home;
