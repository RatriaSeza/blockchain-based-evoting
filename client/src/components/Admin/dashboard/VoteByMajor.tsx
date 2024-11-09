import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export const VoteByMajor = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [],
    chart: {
      fontFamily: "Poppins,sans-serif",
      height: 370,
      offsetY: 10,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "rgba(0,0,0,.1)",
    },
    colors: ["#1e88e5", "#21c1d6"],
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "30%",
        endingShape: "flat",
        dataLabels: {
          position: 'top'
        }
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 20,
      style: {
        colors: ["#a1aab2"],
      }
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    xaxis: {
      type: "category" as const,
      categories: ["Mathematics", "Physics", "Biology", "Chemistry", "Statistic", "Informatics", "Biotechnology"],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    fill: {
      opacity: 1,
      colors: ["#5284B4", "#D8E1B8"],
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 767,
        options: {
          stroke: {
            show: false,
            width: 5,
            colors: ["transparent"],
          },
        },
      },
    ],
  })

  useEffect(() => {
    const majors = ["Mathematics", "Physics", "Biology", "Chemistry", "Statistic", "Informatics", "Biotechnology"];
    const fetchChartSeries = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/votes/chart-series-by-major`, {
          params: { majors },
        });
        const series = response.data.series;
        setChartOptions({ ...chartOptions, series });
      } catch (error) {
        console.error(error);
        setChartOptions({ ...chartOptions, series: [] });
      }
    };
    fetchChartSeries();
  }, [chartOptions]);

  return (
    <>
      <h4 className="text-gray-600 font-semibold">Vote by major</h4>
      <Chart 
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={370}
      />
    </>
  )
}