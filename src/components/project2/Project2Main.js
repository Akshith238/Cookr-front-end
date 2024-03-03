import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
 
const Project2Main = () => {
  const [usageData, setUsageData] = useState({
    cpuUsage: [],
    memoryUtilization: [],
    networkTrafficIn: [],
    networkTrafficOut: [],
  });
  const [alerts, setAlerts] = useState([]);
  const [error, setError] = useState(null);
  const [failureProbabilityExceeded, setFailureProbabilityExceeded] = useState(false);
  const [failureData,setFailureData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch('https://predictiserve-backend.onrender.com/api/predictFailure');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      let newAlerts = [];
      // Check conditions for CPU usage, memory utilization, and network traffic out
      if (data.liveData.cpu_usage > 95) {
        newAlerts.push({ type: 'CPU Usage', value: 'CPU usage is greater than 95%', data: data.liveData.cpu_usage });
      }
      if (data.liveData.memory_utilization > 90) {
        newAlerts.push({ type: 'Memory Utilization', value: 'Memory utilization is greater than 90%', data: data.liveData.memory_utilization });
      }
      if (data.liveData.network_traffic_out < 5) {
        newAlerts.push({ type: 'Network Traffic Out', value: 'Network traffic out is less than 5', data: data.liveData.network_traffic_out });
      }

      if (newAlerts.length > 0) {
        setAlerts(prevAlerts => [...newAlerts, ...prevAlerts]); // Add new alerts at the beginning
      }

      if (data.failureProbability > 0.5) {
        setFailureProbabilityExceeded(true);
        setFailureData(data.liveData);
      }else{
        setFailureProbabilityExceeded(false);
      }

      updateUsageData(data.liveData);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data. Please try again later.');
    }
  };

  const updateUsageData = (data) => {
    setUsageData((prevData) => ({
      cpuUsage: [...prevData.cpuUsage.slice(-10), data.cpu_usage],
      memoryUtilization: [...prevData.memoryUtilization.slice(-10), data.memory_utilization],
      networkTrafficIn: [...prevData.networkTrafficIn.slice(-10), data.network_traffic_in],
      networkTrafficOut: [...prevData.networkTrafficOut.slice(-10), data.network_traffic_out],
    }));
  };

  useEffect(() => {
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 2 seconds
    return () => clearInterval(intervalId);
  }, []);

  const chartOptions = {
    chart: {
      type: 'line',
      height: 400,
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 3000 // Adjust the speed here (milliseconds)
        }
      },
      toolbar: {
        show: false
      }
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    },
    title: {
      text: 'Live Usage Graph',
      align: 'center'
    },
    legend: {
      position: 'top'
    }
  };

  const series = [
    {
      name: 'CPU Usage',
      data: usageData.cpuUsage.map((value, index) => [Date.now() - (usageData.cpuUsage.length - index) * 5000, value])
    },
    {
      name: 'Memory Utilization',
      data: usageData.memoryUtilization.map((value, index) => [Date.now() - (usageData.memoryUtilization.length - index) * 5000, value])
    },
    {
      name: 'Network Traffic In',
      data: usageData.networkTrafficIn.map((value, index) => [Date.now() - (usageData.networkTrafficIn.length - index) * 5000, value])
    },
    {
      name: 'Network Traffic Out',
      data: usageData.networkTrafficOut.map((value, index) => [Date.now() - (usageData.networkTrafficOut.length - index) * 5000, value])
    }
  ];

  return (
    <div className="p-4 mt-20">
      <div className="mt-4">
        <Chart options={chartOptions} series={series} type="line" height={400} />
      </div>
      {failureProbabilityExceeded && (
      <div className="mt-4">
        <p className="text-red-600">Failure probability exceeded threshold!</p>
        {failureData && (
          <div className="mt-4">
            <h5 className="text-lg font-semibold mb-2">Recent Failure Data</h5>
            <ul>
              {Object.entries(failureData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
        )}

      {alerts.length > 0 && (
        <div className="mt-4">
          <h5 className="text-lg font-semibold mb-2">Alerts</h5>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>Details</TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {alerts.map((alert, index) => (
                  <TableRow key={index} style={{ backgroundColor: index < alerts.length ? 'rgba(255, 0, 0, 0.1)' : 'transparent' }}>
                    <TableCell>{alert.type}</TableCell>
                    <TableCell>{alert.value}</TableCell>
                    <TableCell>{alert.data}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      {error && <p className="text-red-600">Error: {error}</p>}
    </div>
  );
};

export default Project2Main;
