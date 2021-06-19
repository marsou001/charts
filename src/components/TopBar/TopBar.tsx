import styled from "styled-components";
import { data } from '../../data';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const SearchField = styled.input`
    color: #B4B8C5;
    background-color: #EDEEF2;
    padding: 10px 15px; 
    border: none;   
    border-radius: 3px;
    outline-color: #B4B8C5;
`;

const SelectField = styled.select`
    color: #B4B8C5;
`;

function TopBar() {
    return (
        <Container>
            <SearchField type='text' placeholder='Search' />
            <SelectField>
                {data.map(({ _id, deviceID }) => (
                    <option key={_id}>{deviceID}</option>
                ))}
            </SelectField>
        </Container>
    )
}

export default TopBar;