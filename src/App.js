import "./App.css";
import CardList from "./components/cardList/CardList";
import { Provider } from "react-redux";
import store from './redux/store/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CardList />
      </div>
    </Provider>
  );
}


export default App;
