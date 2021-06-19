import styled from "styled-components";
import { Line } from "react-chartjs-2";

const monthlyData = [
    {
        date: "31/10/2012",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 277.7460001,
        dynamicPrice: 319.407900115,
    },
    {
        date: "30/11/2012",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 345.0199998,
        dynamicPrice: 396.772999770001,
    },
    {
        date: "31/12/2012",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 355.762000199999,
        dynamicPrice: 409.12630023,
    },
    {
        date: "31/01/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 360.0820001,
        dynamicPrice: 407.374490114999,
    },
    {
        date: "28/02/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 381.8380003,
        dynamicPrice: 447.14010031,
    },
    {
        date: "31/03/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 480.1699999,
        dynamicPrice: 538.416969966,
    },
    {
        date: "30/04/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 362.7350005,
        dynamicPrice: 417.277200575001,
    },
    {
        date: "31/05/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 304.0640001,
        dynamicPrice: 347.948510161,
    },
    {
        date: "30/06/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 300.123,
        dynamicPrice: 342.867059999999,
    },
    {
        date: "31/07/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 271.320999899999,
        dynamicPrice: 308.815119885,
    },
    {
        date: "31/08/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 270.049999899999,
        dynamicPrice: 315.242759884999,
    },
    {
        date: "30/09/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 321.740000099999,
        dynamicPrice: 371.287130115,
    },
    {
        date: "31/10/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 378.3519997,
        dynamicPrice: 437.065239562999,
    },
    {
        date: "30/11/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 410.1239999,
        dynamicPrice: 471.519869838999,
    },
    {
        date: "31/12/2013",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 376.965,
        dynamicPrice: 426.153059918999,
    },
    {
        date: "31/01/2014",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 490.1489998,
        dynamicPrice: 563.67134977,
    },
    {
        date: "28/02/2014",
        longitude: -6.8407772,
        latitude: 33.9601172,
        consumption: 414.8970004,
        dynamicPrice: 477.131550459999,
    },
];

const ChartsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        width: 30%;
        height: 300px;
    }
`;

function Charts() {
    const labels = monthlyData.map(({ date }) => date);
    const dynamicPrice = monthlyData.map(({ dynamicPrice }) => dynamicPrice);
    const consumption = monthlyData.map(({ consumption }) => consumption);

    return (
        <>
            <h1>Placeholder for Charts</h1>
            <p>Placeholder under text</p>
            <ChartsContainer>
                <div>
                    <Line
                        type="line"
                        data={{
                            labels,
                            datasets: [
                                {
                                    label: "Consumption",
                                    data: consumption,
                                    backgroundColor: "blue",
                                },
                            ],
                        }}
                        width={4000}
                        height={4000}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                            max: 1000,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                </div>
                <div>
                    <Line
                        type="line"
                        data={{
                            labels,
                            datasets: [
                                {
                                    label: "Dynamic price",
                                    data: dynamicPrice,
                                    backgroundColor: "green",
                                },
                            ],
                        }}
                        width={4000}
                        height={4000}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                            max: 1000,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                </div>
                <div>
                    <Line
                        type="line"
                        data={{
                            labels,
                            datasets: [
                                {
                                    label: "Consumption",
                                    data: consumption,
                                    backgroundColor: "blue",
                                },
                            ],
                        }}
                        width={4000}
                        height={4000}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                            max: 1000,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                </div>
            </ChartsContainer>
        </>
    );
}

export default Charts;
