import React from 'react'
import { Categories, SortPopUp, PizzaBlock, LoadingPizza } from '../components';
import { useSelector, useDispatch  } from 'react-redux'
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
//import {addPizzaToCart} from '../redux/actions/cart'

const arr = ['Meat', 'Vegan', 'Grill', 'Spice', 'Closed'];
const sortItems = [
{name:'Popular',type: 'popular', order:'desc' },
{name:'Price', type: 'price', order:'desc' }, 
{name: 'Alphabet', type: 'name', order:'asc' }, ]

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({ filters }) => filters);
  

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [sortBy, category, dispatch]) 

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  const handleAddPizzaToCart = obj => {
    dispatch({ type:'ADD_PIZZA_CART', payload: obj})
    //console.log(obj)
  }

    return (
        <div className="container">
          <div className="content__top">
            <Categories
              activeCategory={category}
              onClickCategory={onSelectCategory}
              items={arr}
            />
            <SortPopUp
            activeSortType={sortBy.type}
            items={sortItems} 
            onClickSortType={onSelectSortType}
          />
          </div>
    <h2 className="content__title">Yummi pizza's <span role="img" aria-label="emoji">😋</span></h2>
          <div className="content__items">
            {isLoaded 
            ? items.map((pizza) =>  
            <PizzaBlock 
            onClickAddPizza={handleAddPizzaToCart} 
            addedCount =  {cartItems[pizza.id]&& cartItems[pizza.id].items.length}
            key={pizza.id} {...pizza} isLoading={true}/>) 
            :  Array(12)
            .fill(0)
            .map((_, index ) => <LoadingPizza key={index}
            />)}     
        </div>
        </div>
    )
}

export default Home
