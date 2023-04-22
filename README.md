# Answers:

# List Component
The List component is a React functional component that renders a list of items passed as a prop. Each item is rendered as an <li> element, and the list component tracks the selected index to highlight the selected item. The List component has a SingleListItem child component that renders an individual list item.

2.There are a few issues with the code:

i. The setSelectedIndex function is being used as both a setter and a getter for the selectedIndex state variable. It should be separated into two separate useState      calls, like so:
const [selectedIndex, setSelectedIndex] = useState(null);
In the SingleListItem component, the isSelected prop is being passed a boolean value, but it should be passed the selected index value so that it can be compared against the item's index.
The PropTypes definition for the items prop of WrappedListComponent is incorrect. It should be PropTypes.arrayOf(PropTypes.shape(...)), not PropTypes.array(PropTypes.shapeOf(...)).
The onClickHandler function passed to the SingleListItem component is not being correctly defined. It should be defined as an arrow function that calls the handleClick function with the correct index value, like so:
onClickHandler={() => handleClick(index)}
