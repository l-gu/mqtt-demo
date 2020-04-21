var gauge1_opts = {
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
 colorStart: '#FF0000', // Test LGU
  
//  colorStop: '#8FC0DA',    // just experiment with them
  colorStop: '#FF0000',    // Left part
  
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
var gauge1_canvas = document.getElementById('gauge1'); // your canvas element
var gauge1 = new Gauge(gauge1_canvas).setOptions(gauge1_opts); // create the gauge!
gauge1.maxValue = 100; // set max gauge value
gauge1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 10; // set animation speed (32 is default value) min is faster
gauge1.set(0); // set actual value
