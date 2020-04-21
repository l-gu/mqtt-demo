var gauge2_opts = {
  angle: 0.15, // The span of the gauge arc
  lineWidth: 0.44, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
// colorStart: '#6FADCF',   // Colors
  colorStart: '#0000FF', // BLUE
  
//  colorStop: '#8FC0DA',    // just experiment with them
  colorStop: '#0000FF',    // Left part : BLUE
  
  strokeColor: '#E0E0E0',  // to see which ones work best for you
//  strokeColor: '#FF0000',  // Right part
  
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  
  staticLabels: {
	  font: "10px sans-serif",  // Specifies font
	  labels: [0, 20, 40, 60, 80, 100],  // Print labels at these values
	  color: "#000000",  // Optional: Label text color
	  fractionDigits: 0  // Optional: Numerical precision. 0=round off.
	},
};
var gauge2_canvas = document.getElementById('gauge2'); // your canvas element
var gauge2 = new Gauge(gauge2_canvas).setOptions(gauge2_opts); // create the gauge!
gauge2.maxValue = 100; // set max gauge value
gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge2.animationSpeed = 10; // set animation speed (32 is default value) min is faster
gauge2.set(0); // set actual value
