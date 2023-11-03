import React from "react";
import BotCard from "./BotCard"
function BotCollection({bots}) {
  // Your code here
  return (
    <div className="i-four-ucolumn-grid">
      <div className="row">
        <h1>Collection of all bots</h1>
        {bots.map((bot)=>{
          return <BotCard key={bot.id} bot={bot} />
        })}
      </div>
    </div>
  );
}

export default BotCollection;
