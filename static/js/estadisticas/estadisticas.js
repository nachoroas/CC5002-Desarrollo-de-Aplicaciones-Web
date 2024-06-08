Highcharts.chart('containerProductos', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Productos'
    },
    series: [{
        name: 'Porcentaje',
        data: [
        ]
    }]
});

Highcharts.chart('containerPedidos', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Pedidos'
    },
    series: [{
        name: 'Porcentaje',
        data: [
        ]
    }]
});

fetch("http://127.0.0.1:5000/get-estadisticas")
  .then((response) => response.json())
  .then((data) => {
    //deberia ver como se mandan los datos y dejarlos en diccionarios para ponerlos en los graficos
    /*
    let parsedData = data.map((item) => {
      const [year, month, day] = item.date
        .split("-")
        .map((part) => parseInt(part, 10));
      return [
        Date.UTC(year, month - 1, day), // javascript month indices start from 0 !
        item.count,
      ];
    });
    **/
    const ProductData= data[0]
    const PedidoData= data[1]
    console.log(ProductData)
    /*const diccionarioProductos = {};
    ProductData.forEach(par => {
      
        const [clave, valor] = par;
        
        diccionarioProductos[clave] = valor;
    });*/
    // Get the chart by ID hay que hacer uno para cada uno
    const chartProductos = Highcharts.charts.find(
      (chart) => chart && chart.renderTo.id === "containerProductos"
    );

    // Update the chart with new data uno para cada uno
    chartProductos.update({
      series: [
        {
          data: ProductData,
        },
      ],
    });
    /*
    const diccionarioPedidos = {};

    PedidoData.forEach(par => {
      
      const [clave, valor] = par;
      
      diccionarioPedidos[clave] = valor;
  });**/

    const chartPedidos = Highcharts.charts.find(
      (chart) => chart && chart.renderTo.id === "containerPedidos"
    );

    chartPedidos.update({
      series: [
        {
          data: PedidoData,
        },
      ],
    });
  })
  .catch((error) => console.error("Error:", error));
