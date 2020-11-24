import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types';
import Button from '../button'






function PizzaBlock({id, name,imageUrl, price, types, sizes, onClickAddPizza, addedCount}) {


    const availavleTypes = ['Thin', 'Traditional'];
    const pizzaSizes = [26, 30, 40,];
    const [activeSize, setactiveSize] = React.useState(0)
    const [activeType, setActivType] = React.useState(types[0])
    const onSelectType = (index) => {
        setActivType(index);
    }
    const onSelectSize = (index) => {
        setactiveSize(index);
    }

    const onAddPizza = () => {
        const obj ={
                id,
                name,
                imageUrl, 
                price,
                size: pizzaSizes[activeSize],
                type: availavleTypes[activeType],
        }
        onClickAddPizza(obj);
    };

    return (
        <div className="pizza-block">
              <img
                className="pizza-block__image"
                src={imageUrl}
                alt={name}
              />
              <h4 className="pizza-block__title">{name}</h4>
              <div className="pizza-block__selector">
                <ul>
                    {availavleTypes.map((type,index) => (
                        <li key={type} className={classNames({
                            'active': activeType === index,
                            'disabled': !types.includes(index)
                        })} onClick={() => onSelectType(index)}>{type}</li>
                    ))}
                </ul>
                <ul>
                {pizzaSizes.map((size,index) => (
                        <li key={size} className={classNames({
                            'active': activeSize === index,
                            'disabled': !sizes.includes(size)
                        })} onClick={() => onSelectSize(index)}>{size}  cm.</li>
                    ))}
                </ul>
              </div>
              <div className="pizza-block__bottom">
                <div className="pizza-block__price">from {price} €</div>
                <Button
                onClick={onAddPizza}
                className="button--add"
                outline >
                  <span>Add to cart</span>
                    {addedCount &&<i>{addedCount}</i>}
                </Button>
              </div>
        </div>

    )
}


PizzaBlock.propTypes = {
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.oneOf([26, 30, 40])),
    cartItems: PropTypes.object,
    //onAdd: PropTypes.func,
    onClickAddPizza: PropTypes.func,
    isLoading: PropTypes.bool,
    addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
    types:[],
    name: '---',
    price: 0,
    size: [],
};

export default PizzaBlock
