import Chart from "https://esm.sh/chart.js/auto";

let ctx = document.querySelector("#barre").getContext("2d");
let configurations = {
  type: "bar",
  data: {
    labels: [
      "Joker",
      "Riddler",
      "Penguin",
      "Poison Ivy",
      "Two-Face",
      "Scarecrow",
      "Killer Croc",
      "Bane"
    ],
    datasets: [
      {
        label: "Crimes committed (within the year)",
        data: [
          634,
          127,
          512,
          243,
          464,
          295,
          98,
          389
        ],
        backgroundColor: ["rgba(194, 81, 78)"],
        borderWidth: 1,
        borderRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Crimes committed by notable criminals",
        padding: { top: 15, bottom: 10 }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of crimes"
        },
        grid: {
          color: "rgba(17, 11, 13)",
          lineWidth: 1
        },
        border: {
          color: "rgba(17, 11, 13)",
          width: 2
        }
      },
      x: {
        title: {
          display: true,
          text: "Criminals"
        },
        grid: {
          color: "rgba(17, 11, 13)",
          lineWidth: 1
        },
        border: {
          color: "rgba(17, 11, 13)",
          width: 2
        }
      }
    }
  }
};

new Chart(ctx, configurations);
