import React from "react";
import { MainContext, useContext } from "../../Context/MainContext";


const Stats = () => {
  const { items } = useContext(MainContext);

  if (!items.length)
    return (
      <p className="stats">
        <em>
          Start adding some items to your packing list 📄
        </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  console.log(items, "aaa");
  const percentage = numItems !== 0 ? Math.round((numPacked / numItems) * 100) : 0;


  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `📃 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%) `
        }
      </em>
    </footer>
  )
}

export default Stats;