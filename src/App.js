import React from 'react';
import { Route, Switch } from "react-router-dom";

// css
import './scss/app.scss';

// components
import { Header} from './components';
import { Home, Cart, notFound} from './pages';



function App(){
  
     

  return(
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
        <Route  path="/" component={Home} exact/>
        <Route path="/cart" component={Cart} exact/>
        <Route component={notFound} />
        </Switch>
      </div>
    </div> 
  )
}


export default App;














// class App extends React.Component{
//   componentDidMount(){
    // axios.get('http://localhost:3000/db.json').then(({data}) => {
    // //console.log(setPizzas(data.pizzas));
    // this.props.setPizzas(data.pizzas);
    //  });
//   }

//   render(){
//     //console.log(this.props)
//     return(
//       <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Switch>
//         <Route  path="/" render={() => <Home items={this.props.items} />} exact/>
//         <Route path="/cart" component={Cart} exact/>
//         <Route component={notFound} />
//         </Switch>
//       </div>
//     </div>
//     )
//   }
// }

// const mapStateToProp = (state) => {
//   // console.log(state, 'App mapStateToProps');
//   return {
//     items: state.pizzas.items,
//     filter: state.filters,
//   }
// };

// const mapDispatchToProps = {
//   setPizzas
// }

// const mapDispatchToProps = dispatch =>{
//   return{
//     savePizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// }
//export default connect(mapStateToProp, {setPizzas})(App);




