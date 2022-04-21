// function Search(){

// }
import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'

const DropDown = () => {
  return (
    <ul>
    <li>애기이름</li>
    <li>예약자명</li>
    <li>날짜</li>
    <li>asc</li>
    <li>desc</li>
  </ul>
  )
}
const Search = () => {
  return (
<div id="search">
      <p>
      <BiSearch />
        <input type="text" placeholder="search" />
        <button type="button">정렬하기 <BiCaretDown /></button>
      </p>
      <DropDown />

    </div>
  //   <div>
  //   <div >
  //     <div>
  //       <BiSearch />
  //       <label htmlFor="query" />
  //     </div>
  //     <input 
  //       type="text" 
  //       name="query" 
  //       id="query" 
  //       value=""
  //       placeholder="Search" />
  //     <div>
  //       <div>
  //         <button type="button">
  //           Sort By 
  //           <BiCaretDown />
  //         </button>
  //         <DropDown />
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}
export default Search