import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`;

const Metric = styled.div`
    padding-left: 15px;
    border-left: 3px solid #EDEEF2;
    p {
        font-size: 1.6rem;
        color: #B4B8C5;
        margin: 0;
    }
`;

const metrics = [
    {
        id: 1,
        title: 'Client number',
        content: 68091604,
    },
    {
        id: 2,
        title: 'Consumption',
        content: 414.8970004,
    },
    {
        id: 3,
        title: 'Dynamic price',
        content: 477.131550459999,
    },
    {
        id: 4,
        title: 'Fraud level',
        content: 1.1158631415241,
    },
    {
        id: 5,
        title: 'Voltage arrivage',
        content: 239.790446841294,
    },
    {
        id: 6,
        title: 'Frequency',
        content: 49.824345146379,
    },
];

function Metrics() {
    return (
        <Container>
            {metrics.map((metric) => (
              <Metric key={metric.id}>
                  <p>{metric.title}</p>
                  <h3>{metric.content}</h3>
              </Metric>  
            ))}
        </Container>
    )
}

export default Metrics;
