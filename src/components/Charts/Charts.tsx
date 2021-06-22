import styled from "styled-components";
import { Line } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
import { data } from "../../data";
import { Data } from "../../interfaces";

interface ChartsProps {
    device: keyof Data;
}

const ChartsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChartItem = styled.div`
    background-color: white;
    width: 23%;
    height: 320px;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    h3 {
        margin: 0px 10px 5px;
    }
`;

const chartStyle = {
    width: '100%',
    height: '100%',
    transform: 'translate(-80px, 66px) scale(1.45)',
}

function Charts({ device }: ChartsProps) {
    const labels = data[device].monthlyData.map(({ date }) => date);
    const dynamicPrice = data[device].monthlyData.map(
        ({ dynamicPrice }) => dynamicPrice
    );
    const consumption = data[device].monthlyData.map(
        ({ consumption }) => consumption
    );

    return (
        <>
            <h1>Placeholder for Charts</h1>
            <p>Placeholder under text</p>
            <ChartsContainer>
                <ChartItem>
                    <h3>Consumption</h3>
                    <Line
                        type="line"
                        data={{
                            labels,
                            datasets: [
                                {
                                    label: "Consumption",
                                    data: consumption,
                                    borderColor: "#1F71E9",
                                    borderWidth: 2,
                                    backgroundColor: "#4286EB",
                                    pointBackgroundColor: "transparent",
                                    fill: true,
                                },
                            ],
                        }}
                        width={4000}
                        height={4000}
                        options={{
                            plugins: {
                                legend: {
                                    display: false,
                                },
                            },
                            elements: {
                                line: {
                                    tension: 0.5,
                                },
                            },
                        }}
                    />
                </ChartItem>
                <ChartItem>
                    <h3>Dynamic price</h3>
                    <Line
                        type="line"
                        data={{
                            labels,
                            datasets: [
                                {
                                    label: "Dynamic price",
                                    data: dynamicPrice,
                                    backgroundColor: "#E4FBF5",
                                    borderColor: "#4DE7BE",
                                    borderWidth: 2,
                                    pointBackgroundColor: "transparent",
                                    fill: true,
                                },
                            ],
                        }}
                        width={4000}
                        height={4000}
                        options={{
                            plugins: {
                                legend: {
                                    display: false,
                                },
                            },
                            elements: {
                                line: {
                                    tension: 0.5,
                                },
                            },
                        }}
                    />
                </ChartItem>
                <ChartItem>
                    <h3>Fraud level</h3>
                    <GaugeChart
                        id="gauge-chart-1"
                        nrOfLevels={27}
                        percent={0.53}
                        colors={['#6942D4', '#47E1C1']}
                        textColor='#000'
                        needleColor='#bbb'
                        needleBaseColor='#999'
                        formatTextValue={() => data[device].lastMonthData.find((p) => p.title === 'Fraud level')?.content.toFixed(3).toString() ?? ''}                        
                        style={chartStyle}
                    />
                </ChartItem>
                <ChartItem>
                    <h3>Voltage arrivage</h3>
                <GaugeChart
                        id="gauge-chart-2"
                        nrOfLevels={27}
                        percent={0.33}
                        colors={['#6942D4', '#47E1C1']}
                        textColor='#000'
                        needleColor='#bbb'
                        needleBaseColor='#999'
                        formatTextValue={() => data[device].lastMonthData.find((p) => p.title === 'Voltage arrivage')?.content.toFixed(3).toString() ?? ''}                        
                        style={chartStyle}
                    />
                </ChartItem>
            </ChartsContainer>
        </>
    );
}

export default Charts;
