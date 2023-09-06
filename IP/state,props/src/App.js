import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import Counter from './components/Counter';
import MyDate from './components/MyDate';

function App() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  return (
    <div className="App">
      <h2>Date</h2>
      <MyDate CurrDate={currentDate} /> <hr/>
      <h2>Counter</h2>
      <Counter /> <hr/>
      <h2>Conditional Rendering Examples</h2>
      <ConditionalRendering />
    </div>
  );
}

export default App;
