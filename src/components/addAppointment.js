import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";
function AddWrite({toggleForm,setFormData,formData,formDataPublish}){
  if(!toggleForm){
    return null;
  }
  return (
    <>
      <ul >
        <li>
          <label htmlFor="userName">집사명</label>
          <input 
            type="text" id="userName"
            onChange={(event) => {setFormData({...formData,petName:event.target.value})}} />
        </li>
        <li>
          <label htmlFor="userChild">애기명</label>
          <input type="text" id="userChild" 
          onChange={(event) => {setFormData({...formData,ownerName:event.target.value})}}/>
        </li>
        <li>
          <label htmlFor="userDate">예약일</label>
          <input type="date"id="userDate" 
          onChange={(event) => {setFormData({...formData,aptDate:event.target.value})}}/>
        </li>
        <li>
          <label htmlFor="userTime">예약 시간</label>
          <input type="time" id="userTime" 
          onChange={(event) => {setFormData({...formData,aptTime:event.target.value})}}/>
        </li>
        <li>
          <label htmlFor="userMemo">기타설명</label>
          <textarea cols="30" rows="10" placeholder="기타 설명" id="userMemo"></textarea>
        </li>
      </ul>
      <p>
        <input 
        type="submit" valut="예약하기" 
        onClick={formDataPublish} /></p>
    </>
  )

}


const AddAppointment = ({onSendAppointment,lastId})=>{
 
const clearData = {
 owerName : "",
 petName:"",
 aptNotes:"",
 aptDate:""
}
 // toggle   ㅁㅏㄴ드ㄹ기
  let [toggleForm, setToggleForm] = useState(false)
  // let [formData,setFormData] =useState({})
  let [formData,setFormData] =useState(clearData)
  function formDataPublish(){
    const appointmentInfo ={
      id: lastId + 1,
      owerName : formData.owerName,
      petName:formData.petName,
      aptNotes:formData.aptNotes,
      aptDate:formData.aptDate + ' '+formData.aptTime
    }
    onSendAppointment(appointmentInfo);
    setFormData(clearData)
    setToggleForm(!toggleForm)
  }
return (
  <div id="appoint">
  <h4 onClick={()=>{setToggleForm(!toggleForm)}}>
    <BiCalendarPlus />  <span style={{paddingLeft:'10px'}}>예약 하기</span>
  </h4>

<AddWrite
   toggleForm = {toggleForm} 
   formData = {formData}
   formDataPublish={formDataPublish}
   setFormData={setFormData}
   />

</div>
)
}

export default AddAppointment;