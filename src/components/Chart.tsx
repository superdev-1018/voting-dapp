import React, { useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useMediaQuery } from "react-responsive";

const Chart = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [chartDate, setDate] = useState([]);
  const [height, setHeight] = useState(260);
  useEffect(() => {
    if (isMobile) {
      setHeight(200);
    } else {
      setHeight(400);
    }
  }, [isMobile]);

  const chartOptions = {
    // Define your chart options here
    chart: {
      height: height,
      type: "line" as const,
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 1,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#333"],
      },
      offsetX: 30,
    },
    stroke: {
      curve: "smooth" as const,
    },
    markers: {
      size: 1,
    },
    yaxis: {
      labels: {
        show: false,
        align: "left" as const,
      },
      tickAmount: 30,
    },
    xaxis: {
      categories: chartDate,
      max: 300,
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },

    grid: {
      borderColor: "#182b48",
      row: {
        colors: ["#182b48", "#182b48"], // takes an array which will be repeated on columns
        opacity: 0.4,
      },
    },
    series: [
      {
        name: "Matic Value",
        data: [23, 34, 12, 1, 32, 43,23, 34, 12, 69, 91, 148,54, 32, 43,23, 34, 12, 54, 32, 43,23, 34, 12, 54, 32, 43,23, 34, 12, 54, 32, 43,91, 148,54, 32, 43,23, 34, 12],
      },
    ],
  };

  return (
    <div className="w-full p-4 m-4">
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={height}
      />
    </div>
  );
};

export default Chart;
