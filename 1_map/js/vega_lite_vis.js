var vg_1 = "data/earthquake_map.json";
vegaEmbed("#map", vg_1, {actions: false}).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
