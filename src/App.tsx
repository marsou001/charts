import { useState, useEffect } from 'react';
import Metrics from './components/Metrics/Metrics';
import TopBar from './components/TopBar/TopBar';
import Charts from './components/Charts/Charts';
import Map from './components/Map/Map';
import { Data } from './interfaces';

function App() {
  const [device, setDevice] = useState<keyof Data>('MAC000002');

  const handleDeviceChange = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLLIElement;
    setDevice(target.textContent as keyof Data);
  };

  useEffect(() => setDevice('MAC000002'), []);

  return (
    <>
      <TopBar device={device} handleDeviceChange={handleDeviceChange} />
      <Metrics device={device} />
      <Charts device={device} />
      <Map device={device} />
    </>
  );
}

export default App;
