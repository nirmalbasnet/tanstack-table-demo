import logo from "./logo.svg";
import "./App.css";
import BasicTable from "./components/basic-table/BasicTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <BasicTable />
      </header>
    </div>
  );
}

export default App;
