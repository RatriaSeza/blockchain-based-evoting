import Chart from "react-apexcharts";

export const SummaryChart = () => {
  const summaryOptions = {
    series: [750, 202],
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
  
    colors: ["#5284B4", "#DEA748ff"],
    dataLabels: {
      enabled: true,
      fontWeight: "bold",
      style: {
        colors: ['#000'],
      },
      background: {
        enabled: true,
        borderRadius: 2,
      },
      formatter: function (val: number, opt: { w: { globals: { labels: string[] } }, seriesIndex: number }) {
        return `${opt.w.globals.labels[opt.seriesIndex]}: ${val.toFixed(1)}%`;
      }
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
    <div className="mb-6 md:mb-10">
      <h4 className="text-gray-600 font-semibold">Summary</h4>
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
              <span className="w-2 h-2 rounded-full bg-[#5284B4]"></span>
              <p className="text-gray-400 font-normal text-xs">Candidate #1: <span className="text-gray-500 font-semibold">750</span></p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-[#DEA748ff]"></span>
              <p className="text-gray-400 font-normal text-xs">Candidate #2: <span className="text-gray-500 font-semibold">202</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
