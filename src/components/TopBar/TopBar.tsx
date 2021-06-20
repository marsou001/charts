import React from "react";
import styled from "styled-components";
import { devices } from '../../data';
import { Data } from '../../data';

interface TopBarProps {
    handleDeviceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface SelectFieldProps {
    _id: number;
    deviceID: keyof Data;
}

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

function TopBar({ handleDeviceChange }: TopBarProps) {
    return (
        <Container>
            <SearchField type='text' placeholder='Search' />
            <SelectField onChange={handleDeviceChange}>
                {devices.map(({ _id, deviceID }: SelectFieldProps) => (
                    <option key={_id}>{deviceID}</option>
                ))}
            </SelectField>
        </Container>
    )
}

export default TopBar;