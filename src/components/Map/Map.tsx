import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { data } from '../../data';
import { Data } from '../../data';

interface MapProps {
    device: keyof Data;
}

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
            <h1>Map overview</h1>
            <p>Budapest city center</p>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={16} center={center}>
                <Marker position={center} />
            </GoogleMap>
        </>
    )
}

export default Map;