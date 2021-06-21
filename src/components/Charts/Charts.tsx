import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { data } from '../../data';
import { Data } from '../../interfaces';

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
        border-radius: 12px;
        cursor: pointer;
    h3 {
        margin: 5px 10px;
    }
`;

function Charts({ device }: ChartsProps) {
    const labels = data[device].monthlyData.map(({ date }) => date);
    const dynamicPrice = data[device].monthlyData.map(({ dynamicPrice }) => dynamicPrice);
    const consumption = data[device].monthlyData.map(({ consumption }) => consumption);

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
            </ChartsContainer>
        </>
    );
}

export default Charts;
