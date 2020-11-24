import React from "react";
import PropTypes from 'prop-types';



const Categories = React.memo(function Categories({activeCategory, items, onClickCategory }) {
  //console.log(items);
  // const [count, setCount] = React.useState(0);
  //console.log(activeItem);
  // const onSelectItem = (index) => {
  //   onClickCategory(index);
  //   //  setCount((num) => ++num);
  // };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategory === null ? "active" : ""}
        >
          All
        </li>
        {items && //JS lifehack, instead if
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>

    </div>
  );
})


Categories.propTypes = {
  //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = {
  activeCategory: null, 
  items : [], 
};



export default Categories;
