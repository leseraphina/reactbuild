import {BiArchive} from 'react-icons/bi'
import Search from './components/Search'
import AddAppointment  from './components/addAppointment'
function App() {
  return (
    <div className="App">
      <h1><BiArchive />welcome</h1>
      <AddAppointment />
      <Search />
     
    </div>
  );
}

export default App;
