// function Search(){

// }
import {BiSearch,BiCaretDown} from 'react-icons/bi'
import {useState} from 'react';
function DropDown({toggleSort,onSortByChange}) {
  
  if(!toggleSort){
    return null;
  }
  return (
    <ul>
    <li onClick = {() => onSortByChange('petName')} >애기이름</li>
    <li onClick = {() => onSortByChange('ownerName')}>예약자명</li>
    <li onClick = {() => onSortByChange('aptDate')}>날짜</li>
    {/* <li>asc</li>
    <li>desc</li> */}
  </ul>
  )
}
const Search = ({query,onQueryChange,sortBy,onSortByChange}) => {
  let [toggleSort,setToggleSort] = useState(false);
  return (
<div id="search">
      <p>
      <BiSearch />
        <input 
          type="text" 
          placeholder="search"
          value={query}
          onChange={
            (event) => {onQueryChange(event.target.value)}
          }
           />
        <button type="button"
              
          onClick={
            () => {
              setToggleSort(!toggleSort)
            }
          }
           >
          정렬하기 
          <BiCaretDown />
        </button>
      </p>
      <DropDown 
        toggleSort={toggleSort} 
        sortBy = {sortBy}
        onSortByChange={mySort => onSortByChange(mySort)} />
    </div>
  
  )
}
export default Search