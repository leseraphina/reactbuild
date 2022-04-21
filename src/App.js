import {BiArchive} from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment  from './components/addAppointment';
import AddInfo from './components/addInfo'
import './index.css';
import appointmentList from './data.json'

function App() {
  return (
    <article>
      <h3><BiArchive style={{color:'#d47777'}} />예약 시스템</h3>
      <AddAppointment />
      <Search />
      <div id="list">
        <ul>
          {
            appointmentList.map(item => (
            <AddInfo 
              key={item.id}
              appointment = {item}
            />
            ))
          }
          

        </ul>
      </div>
    </article>
  );
}

export default App;
