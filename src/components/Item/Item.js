import { useContext, MainContext } from "../../Context/MainContext";


const Item = ({ item }) => {

  const {handleDelete, handleToggleItem} = useContext(MainContext)

  return (
    <li>
      <input type="checkbox" value={item.packed} id="myCheckbox" name="myCheckbox" onChange={() => handleToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>
        ❌
      </button>
    </li>
  )
}


export default Item;