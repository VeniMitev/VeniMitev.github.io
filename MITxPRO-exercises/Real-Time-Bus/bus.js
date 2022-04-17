
  
mapboxgl.accessToken = 'pk.eyJ1IjoidmVuZWxpbjEiLCJhIjoiY2wxamxxaXNyMXN4bzNqcDhpZWhmc2E4NSJ9.Zz3Ja49H_KQErlb5FLVcUA';

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-71.104081, 42.365554],
	zoom: 14,
});

let busRoute1 = [];
let marker = [];

function getBusRoutes(data){
	for (let i = 0; i < data.length; i++) {
		if(data[i].relationships.route.data.id === '1'){
			busRoute1.push(data[i]);
		}
	}
}

async function run(){
	// get bus data    

	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);
	console.log(locations[8].relationships.route.data.id);
	busRoute1 = [];
	
	for (let i = 0; i < marker.length; i++) {
		marker[i].remove();
	}

	getBusRoutes(locations)

	console.log(busRoute1)

	let LngArr = [];
	let LatArr = [];
	
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

	document.getElementById('fly').addEventListener('click', () => {
		map.flyTo({
			center: [average(LngArr), average(LatArr)],
			zoom: 13
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