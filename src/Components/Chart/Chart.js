import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = ({dataPoints})=>{
    const dataPointValue=dataPoints.map(dataPoint=>dataPoint.value);
    const totalMax=Math.max(...dataPointValue);
    return(
        <div className="chart">
            {dataPoints.map(dataPoint=>
                <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                />)}
        </div>
    );
};
export default Chart;