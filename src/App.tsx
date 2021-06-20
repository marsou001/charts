import { useState, useEffect } from 'react';
import Metrics from './components/Metrics/Metrics';
import TopBar from './components/TopBar/TopBar';
import Charts from './components/Charts/Charts';
import Map from './components/Map/Map';
import { Data } from './data';

function App() {
  const [device, setDevice] = useState<keyof Data>('MAC000002');

  const handleDeviceChange = (e: React.ChangeEvent<HTMLSelectElement>) => setDevice(e.target.value);

  useEffect(() => setDevice('MAC000002'), []);

  return (
    <>
      <TopBar handleDeviceChange={handleDeviceChange} />
      <Metrics device={device} />
      <Charts />
      <Map />
    </>
  );
}

export default App;
