import React from "react";
import { render } from "react-dom";
import Downshift from "downshift";
const items = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
"Delaware",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming"];

render(
  <Downshift
    onChange={selection => alert(`You selected ${selection}`)}
    render={({
      getInputProps,
      getItemProps,
      getLabelProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem
    }) => (
      <div>
        <label {...getLabelProps()}>Enter a state</label>
        <input {...getInputProps()} />
        {isOpen ? (
          <div>
            {items
              .filter(i => !inputValue || i.includes(inputValue))
              .map((item, index) => (
                <div
                  {...getItemProps({
                    key: item,
                    index,
                    item,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal"
                    },
                 })}
                 >
                   {item}
               </div>
              /* <div>{item}</div> */
            ))}
        </div>
      ) : null}
    </div>
  )}
/>,

render() {
  const items = _.debounce(item => {
    this.items(item);
  }, 500);

document.getElementById("root")
);
