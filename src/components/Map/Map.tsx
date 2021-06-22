import styled from 'styled-components';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { data } from '../../data';
import { Data } from '../../interfaces';

interface MapProps {
    device: keyof Data;
}

const Header = styled.h1`
    font-size: 2.3rem;
    font-family: lora, sans-serif;
    font-weight: 700;
    margin-bottom: 0;
`;

const TextHeader = styled.p`
    color: #B4B8C5;    
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 5px;
`;

function Map({ device }: MapProps) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,       
    });

    const mapContainerStyle = {
        width: '74%',
        height: 350,
    }
    
    const center = {
        lat: data[device].constantData.latitude,
        lng: data[device].constantData.longitude,
    }

    if (loadError) return <div>Error loading map</div>;

    if (!isLoaded) return <div>Loading map</div>;
    
    return (
        <>
            <Header>Map overview</Header>
            <TextHeader>Budapest city center</TextHeader>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={16} center={center}>
                <Marker position={center} />
            </GoogleMap>
        </>
    )
}

export default Map;