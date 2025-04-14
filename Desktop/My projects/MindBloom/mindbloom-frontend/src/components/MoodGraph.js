import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MoodGraph = ({ moodData }) => {
  // Count occurrences of each mood
  const moodCounts = moodData.reduce((acc, mood) => {
    acc[mood.label] = (acc[mood.label] || 0) + 1;
    return acc;
  }, {});

  const moodLabels = Object.keys(moodCounts);
  const moodFrequencies = Object.values(moodCounts);

  const backgroundColors = {
    Happy: '#fbd46d',
    Sad: '#8aaae5',
    Angry: '#ff6b6b',
    Relaxed: '#9ce5cb',
    Stressed: '#ffa69e',
    Excited: '#f8a5c2',
  };

  const data = {
    labels: moodLabels,
    datasets: [
      {
        label: 'Mood Frequency',
        data: moodFrequencies,
        backgroundColor: moodLabels.map(label => backgroundColors[label] || '#cccccc'),
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const mood = context.label;
            const count = context.parsed.y;
            return `${mood}: ${count} time${count > 1 ? 's' : ''}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
          stepSize: 1,
        },
        title: {
          display: true,
          text: 'Number of Entries',
          color: '#ffffff',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
        },
        title: {
          display: true,
          text: 'Mood Type',
          color: '#ffffff',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutBounce',
    },
  };

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#1f1c2c',
        padding: '1rem',
        borderRadius: '16px',
      }}
    >
      <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: '#ffffff' }}>
        📊 Mood Frequency Overview
      </h3>
      {moodLabels.length === 0 ? (
        <p style={{ color: '#fff', textAlign: 'center' }}>No mood data yet.</p>
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  );
};

export default MoodGraph;
