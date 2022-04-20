import { BiCalendarPlus } from "react-icons/bi";
const AddAppointment = ()=>{
return (
  <div>
  <button>
    <BiCalendarPlus />  Add Appointment
  </button>
  <div>
    <div>
      <label htmlFor="ownerName">
        Owner Name
      </label>
      <div>
        <input type="text" name="ownerName" id="ownerName"/>
      </div>
    </div>

    <div>
      <label htmlFor="petName">Pet ownerName</label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <input type="text" name="petName" id="petName"/>
      </div>
    </div>

    <div>
      <label htmlFor="aptDate">Apt aptDate</label>
      <div>
        <input type="date" name="aptDate" id="aptDate"/>
      </div>
    </div>

    <div>
      <label htmlFor="aptTime">Apt Time</label>
      <div>
        <input type="time" name="aptTime" id="aptTime"/>
      </div>
    </div>

    <div>
      <label htmlFor="aptNotes" >
        Appointment Notes
      </label>
      <div>
        <textarea id="aptNotes" name="aptNotes" rows="3"
          placeholder="Detailed comments about the condition"></textarea>
      </div>
    </div>


    <div className="pt-5">
      <div className="flex justify-end">
        <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
)
}

export default AddAppointment;