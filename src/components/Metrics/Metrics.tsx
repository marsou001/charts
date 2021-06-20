import styled from "styled-components";
import { data }from '../../data';
import { Data } from '../../data';

interface MetricsProps {
    device: keyof Data;
}

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
        font-size: 1.4rem;
        color: #B4B8C5;
        margin: 0;
    }
    h3 {
        font-size: 2.2rem;
        font-weight: 500;
        margin: 0;
    }
`;

function Metrics({ device }: MetricsProps) {
    return (
        <Container>
            {data[device].lastMonthData.map((metric) => (
              <Metric key={metric.id}>
                  <p>{metric.title}</p>
                  <h3>{metric.content.toFixed(2)}</h3>
              </Metric>  
            ))}
        </Container>
    )
}

export default Metrics;
