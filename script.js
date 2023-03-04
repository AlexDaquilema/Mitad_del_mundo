function calculateDistance(latitude, longitude) {
  const equatorRadius = 6378137; // radio del ecuador en metros
  const poleRadius = 6356752.3; // radio del polo en metros
  const latRadians = latitude * Math.PI / 180;
  const cosLat = Math.cos(latRadians);
  const sinLat = Math.sin(latRadians);
  const radius = Math.sqrt((equatorRadius * equatorRadius * cosLat * cosLat) + (poleRadius * poleRadius * sinLat * sinLat)) / Math.sqrt((equatorRadius * cosLat) * (equatorRadius * cosLat) + (poleRadius * sinLat) * (poleRadius * sinLat));
  const distance = radius * equatorRadius;
  return distance;
}

// calcular la distancia a la mitad del mundo
const distanceToEquator = calculateDistance(0, -78.4584);
console.log(`La distancia a la mitad del mundo es de ${distanceToEquator} metros`);
