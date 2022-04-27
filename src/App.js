import {useState,useEffect,useCallback} from 'react'
import {BiArchive} from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment  from './components/addAppointment';
import AddInfo from './components/addInfo'
import './index.css';
// import appointmentList from './data.json'

function App() {
  // state 설정하기
let [appintmentList,setAppintList] = useState([])
//  search에서 받아올 값
let [query,setQuery] = useState('')
//search  정렬
let [sortBy,setSortBy] = useState('petName');

 const filterAppointments = appintmentList.filter(
   item => {
     return (
       item.petName.toLowerCase().includes(query.toLowerCase()) ||
       item.ownerName.toLowerCase().includes(query.toLowerCase()) 
     )
   }
 ).sort(() => {})
//  .sort(
//    (sortBy) => {
//      return (sortBy)
//    }
//  )
// 설정하기: callback
const fetchData = useCallback(
  () => {
      fetch('./data.json')
      .then(response => response.json())
      .then(data => 
        setAppintList(data))
  },[]
)
//  useEffect()
useEffect(()=>{fetchData()},[fetchData])

  //  return
  return (
    <article>
      <h3><BiArchive style={{color:'#d47777'}} />예약 시스템</h3>
      <AddAppointment
      onSendAppointment={
        myAppointment => setAppintList([...appintmentList,myAppointment])
      }
      lastId = {
        appintmentList.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max,0)
      }
      />
      <Search
        query={query}
        onQueryChange = {myQuery => setQuery(myQuery)}
        sortBy = {sortBy}
        onSortByChange = {mySort => setSortBy(mySort)}
         />
      <div id="list">
        <ul>
          {
            filterAppointments.map(appointment => (
            <AddInfo 
              key={appointment.id}
              appointment = {appointment}
              onDeleteAppointment = {
                appointmentId => setAppintList(appintmentList.filter(appointment => appointment.id !== appointmentId))
              }
            />
            ))
          }
        </ul>
      </div>
    </article>
  );
}

export default App;
