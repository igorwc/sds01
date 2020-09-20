import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './styles.css'
import { RecordsResponse } from './types'
import { formatDate } from './helpers'
import Pagination from './Pagination'

const BASE_URL = 'http://localhost:8080'

const Records = () => {

    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
            .then(resp => setRecordsResponse(resp.data))
    }, [activePage])

    const handlePageChange = (index: number) => {
        setActivePage(index)
    }

    return (

        <div className="page-container">
            <div className="filters-container records-actions">
                <Link to='/charts'>
                    <button className="action-filters">
                        Ver Gráficos
                    </button>
                </Link>
            </div>
            <table className="records-table" cellPadding='0' cellSpacing='0'>
                <thead>
                    <tr>
                        <th>
                            Instante
                    </th>
                        <th>
                            Nome
                    </th>
                        <th>
                            Idade
                    </th>
                        <th>
                            Plataforma
                    </th>
                        <th>
                            Gênero
                    </th>
                        <th>
                            Título do Game
                    </th>
                    </tr>

                </thead>
                <tbody>
                    {recordsResponse?.content &&
                        recordsResponse?.content.map(rec => {
                            return (
                                <tr key={rec.id}>
                                    <td>{formatDate(rec.moment)}</td>
                                    <td>{rec.name}</td>
                                    <td>{rec.age}</td>
                                    <td className='text-secondary' >{rec.gamePlatform}</td>
                                    <td>{rec.genreGame}</td>
                                    <td className='text-primary'>{rec.gameTitle}</td>
                                </tr>)
                        })}

                </tbody>
            </table>
            {recordsResponse?.content && <Pagination
                totalPages={recordsResponse?.totalPages}
                gotToPage={handlePageChange}
                activePage={activePage} />}
        </div>


    );

}

export default Records;