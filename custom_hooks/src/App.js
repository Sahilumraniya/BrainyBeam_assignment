import logo from './logo.svg';
import './App.css';
import StorageForm from './Components/StorageForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Local and Session Storage Demo</h1>
        Local  <StorageForm storageType='LOCALSTORAGE' />
        <br />
        <br />
        Session <StorageForm storageType='SESSIONSTORAFE' />
      </header>
    </div>
  );
}

export default App;
