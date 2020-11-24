import axios from 'axios'



const URL = '/pizzas'


export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload, 
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))
  // &_sort=${sortBy}&_order=desc FIX
  axios.get(URL+`?${category !== null ? `category=${category}`: ''
  }&_sort=${sortBy.type}&_order=${sortBy.order} `, 
)
.then(({data}) => {
   // console.log(data)
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});


