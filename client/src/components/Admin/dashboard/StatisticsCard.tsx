import Chart from "react-apexcharts";

export const StatisticsCard = () => {
  const statisticsOptions = {
    series: [
      {
        name: "Candidate #1",
        data: [9, 5, 3, 7, 5, 10, 3],
      },
      {
        name: "Candidate #2",
        data: [6, 3, 9, 5, 4, 6, 4],
      },
    ],
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
        horizontal: false,
        columnWidth: "30%",
        endingShape: "flat",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    xaxis: {
      type: "category" as const,
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
      colors: ["#0085db", "#fb977d"],
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: true,
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
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="text-gray-500 text-lg font-semibold">Statistics</h5>
        <Chart
          options={statisticsOptions}
          series={statisticsOptions.series}
          type="bar"
          width={"100%"}
        />
      </div>
    </div>
  );
};
