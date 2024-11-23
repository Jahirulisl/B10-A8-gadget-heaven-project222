import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, );

const ProductPriceChart = () => {

    const data = {
        labels: [
          "Galaxy S21",
          "iPhone 12",
          "OnePlus 9",
          "Pixel 5",
          "Samsung A52",
          "Sony Xperia 5 II",
          "MacBook Air M1",
          "Dell XPS 13",
          "iPad Pro 11",
          "Galaxy Tab S7",
          "AirPods Pro",
          "Galaxy Buds Pro",
        ],
        datasets: [
          {
            label: "",
            data: [799, 999, 729, 699, 499, 949, 999, 1199, 799, 649, 249, 199],
            backgroundColor: "violet",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true},
        },
      };
    
    return (
        <Bar data={data} options={options} />
    );
};

export default ProductPriceChart;