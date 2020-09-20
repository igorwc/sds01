import React, { useEffect, useState } from 'react'
import './styles.css' 
import Chart from 'react-apexcharts'

import Filters from '../../components/Filters'
import { barOptions, pieOptions } from './chart-options'
import Axios from 'axios'
import { buildBarSeries, getPlatformChartData, getGenderChartData} from './helpers'

type PieChartData ={
    labels:string[];
    series: number[];
}

const BASE_URL = 'https://sds1-igor.herokuapp.com'
type BarChartData ={
    x:string;
    y: number;
}
 

const initialPieData = {
    labels:[],
    series: []
}
const Charts = () => {
    const [barChartData, setBarChartData] = useState<BarChartData[]>([])
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData)
    const [genderData, setGenderData] = useState<PieChartData>(initialPieData)

    useEffect(() =>{
        async function getData(){
            const recordResponse = await Axios.get(`${BASE_URL}/records`);
            const gamesResponse = await Axios.get(`${BASE_URL}/games`);
            const barData = buildBarSeries(gamesResponse.data, recordResponse.data.content);
            setBarChartData(barData)

            const platformChartData = getPlatformChartData(recordResponse.data.content)
            setPlatformData(platformChartData)
            const genderChartData = getGenderChartData(recordResponse.data.content)
            setGenderData(genderChartData)
        }
        getData()
    },[])
    return (
        <div className='page-container'>
            <Filters link='/records' linkText='Ver Tabela' />
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogos Mais Votados
                    </h1>
                    <div className="games-container">
                        <Chart
                            options={barOptions}
                            type='bar'
                            width='900'
                            height='650'
                            series={[{ data: barChartData }]}></Chart>
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className='chart-title'>Plataformas</h2>
                        <Chart
                            options={{...pieOptions, labels:platformData?.labels}}
                            type='donut' 
                            series={platformData?.series}></Chart>
                    </div>
                    <div className="gender-chart">
                        <h2 className='chart-title'>Gêneros</h2>
                        <Chart
                            options={{...pieOptions, labels:genderData?.labels}}
                            type='donut' 
                            series={genderData?.series}></Chart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;