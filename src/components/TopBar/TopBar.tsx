import { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Data } from '../../interfaces';
import { devices, data } from '../../data';

interface TopBarProps {
    device: keyof Data;
    handleDeviceChange: (e: React.MouseEvent<HTMLUListElement>) => void;
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
    border: 1px solid #B4B8C5;   
    border-radius: 3px;
    outline-color: #B4B8C5;
`;

const SelectFieldContainer = styled.div`
    color: #B4B8C5;
    background-color: #EDEEF2;
    letter-spacing: 0.03rem;
    position: relative;
    padding: 10px 15px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.2s;
`;

const MdKeyboardArrowDownStyle = {
    transform: 'translateY(3px)',
}

const SelectFieldOption = styled.div``;

const SelectFieldOptions = styled.ul`
    background-color: #EDEEF2;
    position: absolute;
    top: 25px;
    right: 0;
    left: 0;
    text-align: center;
    list-style: none;
    padding-left: 0; 
    > li {
        padding: 10px 0;
    }   
    > li:first-child {
        padding-top: 5px;
    }
`;

function TopBar({ device, handleDeviceChange }: TopBarProps) {
    const [shouldDropdown, setShouldDropdown] = useState(false);

    const handleShouldDropdown = () => setShouldDropdown(prevState => !prevState);

    return (
        <Container>
            <SearchField type='text' placeholder='Search' />
            <SelectFieldContainer onClick={handleShouldDropdown}>
                <SelectFieldOption><span>{data[device].deviceID}</span> {!shouldDropdown && <MdKeyboardArrowDown style={MdKeyboardArrowDownStyle} />}</SelectFieldOption>
                <SelectFieldOptions className={!shouldDropdown ? 'should-dropdown' : ''} onClick={handleDeviceChange}>
                    {devices.map(({ _id, deviceID }) => (
                        <li key={_id}>{deviceID}</li>
                    ))}
                </SelectFieldOptions>       
            </SelectFieldContainer>     
        </Container>
    )
}

export default TopBar;