import React, { useState, useEffect } from "react";
import "./App.css"

function App() {
  // const[search, setSearch] = useState("");
  // const[cryptoData, setCryptoData] = useState([]);
  // const [visibleCount, setVisibleCount] = useState(10);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // console.log(search);
  
  // const showMore = () => {
  //   setVisibleCount((prev) => prev + 10);
  // }
  // useEffect( () => {
  //     const fetchCryptoData = async () => {
  //        try{
  //     setIsLoading(true);
  //     setError(null);
  //     const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  //     const data = await res.json();
  //     setCryptoData(data);
  //   }
  //   catch(err){
  //     console.log("error occured while fetching data", err);
  //     setError(err.message || String(err));
  //   }
  //   finally{
  //     setIsLoading(false);
  //   }
  // };
  //   fetchCryptoData();
  // }, [])
  // const filteredData = Array.isArray(cryptoData) ? cryptoData.filter( (coin) => coin.name.toLowerCase().includes(search.toLowerCase())) : [];
  // const displayData = search ? filteredData : (Array.isArray(cryptoData) ? cryptoData.slice(0, visibleCount) : []);
  // return(
  //   <div>
  //   <h1> Crypto Currency Tracker</h1>
  //   <input 
  //     type = "text"
  //     placeholder = "search cryptocurrency"
  //     value={search}
  //     onChange = {(e) => setSearch(e.target.value)}
  //   />

  //   {isLoading && <p>Loading...</p>}
  //   {error && <p style={{color: 'red'}}>Error: {error}</p>}


  //   <table>
  //     <thead>
  //       <tr>
  //         <th>ID</th>
  //         <th>Logo</th>
  //         <th>Symbol</th>
  //         <th>Market Cap</th>
  //         <th>Price INR</th>
  //         <th>Circulating Supply</th>
  //         <th>Total Supply</th>
          
  //       </tr>
  //     </thead>
  //       <tbody>
  //         {displayData.map ( (coin) => {
  //           return (
  //           <tr key = {coin.id}>
  //           <td>{coin.id}</td>
  //           <td><img src = {coin.image} width = "30px" height = "30px"/></td>
  //           <td>{coin.symbol}</td>
  //           <td>{coin.market_cap ? `₹${coin.market_cap.toLocaleString()}` : '-'}</td>
  //           <td>{coin.current_price ? `₹${coin.current_price.toLocaleString()}` : '-'}</td>
  //           <td>{coin.circulating_supply ? coin.circulating_supply.toLocaleString() : '-'}</td>
  //           <td>{coin.total_supply ? coin.total_supply.toLocaleString() : '-'}</td>
  //         </tr>
  //           );
  //         })}
  //       </tbody>    
  //     </table>
  //     {!search &&
  // visibleCount < (Array.isArray(cryptoData) ? cryptoData.length : 0) && (
  //   <div className="show-more-wrapper">
  //     <button className="show-more-btn" onClick={showMore}>
  //       Show More
  //     </button>
  //   </div>
  // )}
  //   </div>
  // )

  const [foodData, setFoodData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect( () => {
    const fetchFoodData = async() => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("https://gist.githubusercontent.com/PRASADAUCSE/e9e31a4c1397abbe98d705a80570330e/raw/a12e8cee7d45f50f88361ceda2ab0c0fcc18c39d/gistfile1.txt");
        const data = await res.json();
        console.log(data);
        setFoodData(data.foods || data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchFoodData();
    
  }, [])

  return (
    <div>
      <h1>Food Menu</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <p>Total Foods: {foodData.length}</p>
      <div className = "grid">
       {Array.isArray(foodData) &&  foodData.map ((food) => (
        <div className = "foodcard-container">
          <img src = {food.image} alt = "food-image" />
          <p>{food.name}</p>
          <p>{food.category}</p>
          <p>{food.price}</p>
        </div>
       ))}
       </div>
    </div>
  )
}
export default App;



