import React from 'react'
import './styles.css'  

type Props = {
    totalPages?: number;
    gotToPage: Function;
    activePage: number;
}

const Pagination = ({ totalPages = 0, gotToPage, activePage }: Props) => {

    const paginationItems = Array.from(Array(totalPages).keys())
    return (
        <div className='pagination-container'>
            {paginationItems.map(item => {
                return (
                    <button
                    key={item} className={`pagination-item ${activePage === item ? 'active' : 'inactive'}`} 
                    onClick={()=> gotToPage(item)}> 
                    {item + 1}
                    </button>

                )
            })} 

        </div>)
}

export default Pagination;