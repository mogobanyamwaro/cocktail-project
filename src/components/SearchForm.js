import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('')
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  const searchCocktails=()=>{
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <section className="section search">
      <form  className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your cock</label>
          <input type="text" ref={searchValue} id="name" onChange={searchCocktails}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
