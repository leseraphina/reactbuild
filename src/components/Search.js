// function Search(){

// }
import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'

const DropDown = () => {
  return (
    <div>
      <div>
        <div>Pet Name <BiCheck /></div>
        <div>Owner Name  <BiCheck /></div>
        <div>Date <BiCheck /></div>
        <div>Asc <BiCheck /></div>
        <div>Desc <BiCheck /></div>
      </div>
    </div>
  )
}
const Search = () => {
  return (
    <div>
    <div >
      <div>
        <BiSearch />
        <label htmlFor="query" />
      </div>
      <input 
        type="text" 
        name="query" 
        id="query" 
        value=""
        placeholder="Search" />
      <div>
        <div>
          <button type="button">
            Sort By 
            <BiCaretDown />
          </button>
          <DropDown />
        </div>
      </div>
    </div>
  </div>
  )
}
export default Search