import Chart from "react-apexcharts";

export const SummaryChart = () => {
  const summaryOptions = {
    series: [5368, 3500],
    labels: ["Candidate #1", "Candidate #2"],
    chart: {
      height: 170,
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#c6d1e9",
    },
  
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  
    colors: ["#5284B4ff", "#DEA748ff"],
    dataLabels: {
      enabled: false,
    },
  
    legend: {
      show: false,
    },
  
    stroke: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          background: "none",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "12px",
              color: undefined,
              offsetY: 5,
            },
            value: {
              show: false,
              color: "#98aab4",
            },
          },
        },
      },
    },
  };

  return (
    <>
      <h4 className="text-gray-600 font-semibold">Vote by major</h4>
      <div className="">
        <Chart 
          options={summaryOptions}
          series={summaryOptions.series}
          type="donut"
        />
      </div>
      <div className="flex items-center justify-center gap-12">
        <div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-[#5284B4ff]"></span>
              <p className="text-gray-400 font-normal text-xs">Candidate #1</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-[#DEA748ff]"></span>
              <p className="text-gray-400 font-normal text-xs">Candidate #2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
