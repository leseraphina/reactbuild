import { BiCalendarPlus } from "react-icons/bi";
const AddAppointment = ()=>{
return (
  <div id="appoint">
  <h4>
    <BiCalendarPlus />  <span style={{paddingLeft:'10px'}}>예약 하기</span>
  </h4>
  <ul>
        <li>
          <label htmlFor="userName">집사명</label>
          <input type="text" id="userName" />
        </li>
        <li>
          <label htmlFor="userChild">애기명</label>
          <input type="text" id="userChild" />
        </li>
        <li>
          <label htmlFor="userDate">예약일</label>
          <input type="date"id="userDate" />
        </li>
        <li>
          <label htmlFor="userTime">예약 시간</label>
          <input type="time" id="userTime" />
        </li>
        <li>
          <label htmlFor="userMemo">기타설명</label>
          <textarea cols="30" rows="10" placeholder="기타 설명" id="userMemo"></textarea>
        </li>
      </ul>
      <p><input type="submit" valut="예약하기" /></p>

</div>
)
}

export default AddAppointment;