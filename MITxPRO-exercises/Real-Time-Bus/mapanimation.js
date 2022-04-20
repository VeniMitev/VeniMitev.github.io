
  
mapboxgl.accessToken = 'pk.eyJ1IjoidmVuZWxpbjEiLCJhIjoiY2wxamxxaXNyMXN4bzNqcDhpZWhmc2E4NSJ9.Zz3Ja49H_KQErlb5FLVcUA';

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/venelin1/cl25sib6g000c14mjzb15spr8',
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


// Main function
async function run(){
	// get bus data    

	const locations = await getBusLocations();
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
			return 13
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