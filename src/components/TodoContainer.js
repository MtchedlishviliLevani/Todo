import { useState } from "react";
import TodoContainerCSS from "../styles/TodoContainer.module.css";
import remove from "../images/remove.svg";

export default function TodoContainer() {
  const date = new Date();
  const [day, hour, minute] = [
    date.toLocaleString("Geo", { weekday: "long" }),
    date.getHours(),
    date.getMinutes(),
  ];

  // State for the parent checkbox
  const [isChecked, setIsChecked] = useState(true);

  // State for individual to-do items
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  // Function to toggle the parent checkbox
  function toggleParentCheckbox() {
    setIsChecked(!isChecked);
  }

  // Function to add a new to-do item
  function addTodoItem(itemText) {
    if (!itemText) return;

    const newItem = { value: itemText, checked: isChecked, id: Date.now() }; // Initialize checked state based on the parent checkbox
    setItems((prevItems) => [...prevItems, newItem]);
    setValue("");

    // Update the parent checkbox directly when adding an item
    if (!isChecked) {
      setIsChecked(true);
    }
  }
  function removeItem(id) {
    setItems(items.filter((item) => id !== item.id));
  }
  // Function to toggle the individual to-do item checkbox
  function toggleTodoItemCheckbox(index) {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);

    // Check if all items are checked and update the parent checkbox
    const allItemsChecked = updatedItems.every((item) => item.checked);
    setIsChecked(allItemsChecked);
  }

  return (
    <div className={TodoContainerCSS.mainContainer}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={TodoContainerCSS.inputs_wrapper}>
          <label className={TodoContainerCSS.container}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleParentCheckbox}
            />
            <span className={TodoContainerCSS.checkmark}></span>
          </label>
          <input
            className={TodoContainerCSS.inputtext}
            placeholder="Note"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className={TodoContainerCSS.addbtn}
            onClick={() => addTodoItem(value)}
          >
            +
          </button>
        </div>
      </form>

      <div className={TodoContainerCSS.down_part}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className={TodoContainerCSS.planned_items}>
              <h2>{item.value}</h2>
              <p>{`${day} at ${hour}:${minute}`}</p>
            </div>
            <div className={TodoContainerCSS.modify}>
              <label className={TodoContainerCSS.container}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleTodoItemCheckbox(index)}
                />
                <span className={TodoContainerCSS.checkmark}></span>
              </label>
              <img
                src={remove}
                alt="remove-icon"
                onClick={() => removeItem(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
