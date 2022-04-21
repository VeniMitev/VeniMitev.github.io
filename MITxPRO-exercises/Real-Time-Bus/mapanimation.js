
  
mapboxgl.accessToken = 'pk.eyJ1IjoidmVuZWxpbjEiLCJhIjoiY2wxamxxaXNyMXN4bzNqcDhpZWhmc2E4NSJ9.Zz3Ja49H_KQErlb5FLVcUA';

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [-71.104081, 42.365554],
	zoom: 14,
});

let busRoute1 = [];
let marker = [];

// Extracts data for the specified bus route, in this case Route 1
let getBusRoutes = (data) => {
	for (let i = 0; i < data.length; i++) {
		if(data[i].relationships.route.data.id === '1'){
			busRoute1.push(data[i]);
		}
	}
}


map.on('load', () => {
	getRoute()
	map.addSource('route', {
		'type': 'geojson',
		'data': {
			'type': 'Feature',
			'properties': {},
			'geometry': {
				'type': 'LineString',
				'coordinates': [
					[-71.083938, 42.329687],
					[-71.082813, 42.330938],
					[-71.080813, 42.333062],
					[-71.079562, 42.332062],
					[-71.076188, 42.331563],
					[-71.073688, 42.333562],
					[-71.074938, 42.334937],
					[-71.076937, 42.336312],
					[-71.080313, 42.339438],
					[-71.083062, 42.341563],
					[-71.084187, 42.342438],
					[-71.086687, 42.345312],
					[-71.088063, 42.348062],
					[-71.089313, 42.350813],
					[-71.093563, 42.359188],
					[-71.095938, 42.360563],
					[-71.099563, 42.362813],
					[-71.103437, 42.365313],
					[-71.105812, 42.366813],
					[-71.108563, 42.368437],
					[-71.110812, 42.369312],
					[-71.112938, 42.370312],
					[-71.115313, 42.372062],
					[-71.117563, 42.373063]
				]
			}
		}
	});
	map.addLayer({
		'id': 'route',
		'type': 'line',
		'source': 'route',
		'layout': {
			'line-join': 'round',
			'line-cap': 'round'
		},
		'paint': {
			'line-color': 'blue',
			'line-width': 8
		}
	});
});



async function getRoute() {
	const query = await fetch(
	  `https://api.mapbox.com/directions/v5/mapbox/driving/-71.083938%2C42.329687%3B-71.082813%2C42.330938%3B-71.080813%2C42.333062%3B-71.079562%2C42.332062%3B-71.076188%2C42.331563%3B-71.073688%2C42.333562%3B-71.074938%2C42.334937%3B-71.076937%2C42.336312%3B-71.080313%2C42.339438%3B-71.083062%2C42.341563%3B-71.084187%2C42.342438%3B-71.086687%2C42.345312%3B-71.088063%2C42.348062%3B-71.089313%2C42.350813%3B-71.093563%2C42.359188%3B-71.095938%2C42.360563%3B-71.099563%2C42.362813%3B-71.103437%2C42.365313%3B-71.105812%2C42.366813%3B-71.108563%2C42.368437%3B-71.110812%2C42.369312%3B-71.112938%2C42.370312%3B-71.115313%2C42.372062%3B-71.117563%2C42.373063?alternatives=true&annotations=duration%2Cdistance%2Ccongestion&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoidmVuZWxpbjEiLCJhIjoiY2wxamxxaXNyMXN4bzNqcDhpZWhmc2E4NSJ9.Zz3Ja49H_KQErlb5FLVcUA`,
	);
	const json = await query.json();
	const data = json.routes[0];
	const route = data.geometry.coordinates;
	const geojson = {
	  type: 'Feature',
	  properties: {},
	  geometry: {
		type: 'LineString',
		coordinates: route
	  }
	};
}


// Main function
async function run(){
	// get bus data    

	const locations = await getBusLocations();
	const route = await getRoute()
	console.log(new Date());
	console.log(locations);
	console.log(locations[1].relationships.route.data.id);
	busRoute1 = [];
	
	for (let i = 0; i < marker.length; i++) {
		marker[i].remove();
	}

	getBusRoutes(locations)

	console.log(busRoute1)

	let LngArr = [];
	let LatArr = [];


	// Takes all buses from Route 1, and puts a marker for each on the map
	for (let i = 0; i < busRoute1.length; i++) {
		let longLat = [busRoute1[i].attributes.longitude, busRoute1[i].attributes.latitude];

		let occupancy = busRoute1[i].attributes.occupancy_status;

		marker[i] = new mapboxgl.Marker()
			.setLngLat(longLat)
			.setPopup(new mapboxgl.Popup().setHTML(`<p>Bus #1</p>`))
			.addTo(map);

		LngArr.push(busRoute1[i].attributes.longitude);
		LatArr.push(busRoute1[i].attributes.latitude);
	}

	let average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;	

	// Sets the zoom of the map properly, according to the screen size of the user
	let zoomScreen = () => {
		if (window.innerWidth < 700) {
			return 11.25
		} else if (window.innerWidth > 2000) {
			return 13.1
		} else {
			return 12.5
		}
	}
 
	console.log(window.innerWidth);

	// Takes the average longitudes and latitudes of the tracked buses in order to find the center point of all of them, and then zooms out (or in) to fit all busses in the screen
	document.getElementById('fly').addEventListener('click', () => {
		map.flyTo({
			center: [average(LngArr), average(LatArr)],
			zoom: zoomScreen(),
			bearing: 0,
		});
	});


	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles';
	const response = await fetch(url);
	const json     = await response.json();

	data = json.data;
	return data;
}

run();
getRoute()