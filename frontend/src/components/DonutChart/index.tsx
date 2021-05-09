//import DonutChar from 
import axios from "axios";
import { useEffect, useState } from "react";
import Char from "react-apexcharts";
import { Salesum } from "Types/sale";
import { BASE_URL } from "Utils/requests";

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChar = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as Salesum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);
                setChartData ({ labels: myLabels, series: mySeries });
            });

    }, []);

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Char
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}
export default DonutChar;