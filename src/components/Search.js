import React,{ useState } from "react";

const Search=( {getQuery} )=>{
    const [text,setText]=useState('')

    const onChange=(q)=>{
        setText(q);
        getQuery(q);
    }
    console.log(text)
    return (
        <section>
            <form>
                <input type="text"
                       className='form-control'
                       placeholder='search....'
                       name='search'
                       value={text}
                       onChange={event => onChange(event.target.value)}
                       autoFocus/>
            </form>
        </section>
    )
}






export default Search;