import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import PakingList from "./components/PakingList/PakingList";
import Stats from "./components/Stats/Stats";
import { useEffect, useState } from "react";
import { MainContext } from "./Context/MainContext";
// import { Provider } from "react-redux";
// import { store } from "./state/store";



export default function App() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    console.log(items);
  },[items])
      const handleAddItems = (item) => {
        const existingItem = items.find((i) => i.description.toLowerCase() === item.description.toLowerCase());

        if (existingItem) {
          const updatedItems = items.map((i) =>
            i.description.toLowerCase() === item.description.toLowerCase() ? { ...i, quantity: i.quantity + item.quantity } : i
          );
          setItems(updatedItems);
        } else {
          setItems([...items, { ...item, quantity: item.quantity }]);
        }
    }
    const  handleDelete = (itemId) => {
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
    };

    const handleToggleItem = (id) => {
      setItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed }
            : item
        )
      )
    }

    function handleClearList() {
      const confirmed = window.confirm('Are you sure you want to delete all items?');

      if (confirmed) setItems([]);
    }  

  const obj = {items, handleDelete, handleToggleItem, handleClearList}

  return (
    // <Provider store={store}>
      <MainContext.Provider value={obj}>
           <div className="app">
              <Logo />
              <Form onAddItems={handleAddItems} />
              <PakingList />
              <Stats />
              {/* <FlashCards /> */}
          </div>
      </MainContext.Provider>
    // </Provider>
  )
}


////////////////////////////Flashcards////////////////////////////////////////


// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript"
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components"
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX"
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props"
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook"
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element"
//   }
// ];

// function FlashCards() {

//   const [card, setCard] = useState(null)
  
//   const handleClick = (id) => {
//     setCard(id !== card ? id : null)
//   }

//   return (
//     <div className="flashcards">
//       {questions.map((question) => (
//         <div
//           key={question.id}
//           onClick={() => handleClick(question.id)}
//           className={question.id === card ? "selected" : ""}>
//           <p>
//             {question.id === card ? question.answer : question.question}
//           </p>
//         </div>
//       ))}
//     </div>
//   )
// }



