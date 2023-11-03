import React, { useEffect,useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/bots')
    .then(res => res.json())
    .then((botData)=>setBots(botData))
  }, [])
  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots}/>
    </div>
  )
}

export default BotsPage;
