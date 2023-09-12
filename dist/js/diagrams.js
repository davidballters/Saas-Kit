const miCanvas = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(miCanvas, {
  type: 'line', // Tipo de gráfico (puede ser 'bar', 'line', 'pie', etc.)
  data: {
    labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
    datasets:[
      {
        label: "Closed deals",
        borderColor: "rgba(16, 156, 241, 1)",
        backgroundColor: "rgba(0,0,0)",
        color:"ffff",
        data:[0,50,100,150,200],
      }
    ]
  },
});

////graph

const miCanvas2 = document.getElementById('myChart2').getContext('2d');

const myChart2 = new Chart(miCanvas2, {
  type: 'pie', // Tipo de gráfico (puede ser 'bar', 'line', 'pie', etc.)
  data: {
    labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
    datasets:[
      {
        label: "Closed deals",
        borderColor: "rgba(16, 156, 241, 1)",
        color:"ffff",
        data:[0,50,100,150,200]
      }
    ]
  },
});
