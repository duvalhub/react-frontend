import store from 'app/store';
import ProductList from 'features/category/CategoryList';
import ProductService from 'features/category/CategoryService';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
function App() {
  // useEffect(() => {
  //   async function justDo() {
  //     await ProductService.toto()
  //   }
  //   justDo()
  // }, [])
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList></ProductList>
      </div>
    </Provider>
  );
}

export default App;
