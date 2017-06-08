function getTriangleArea(a,h) {
	
	if (a > 0 && h > 0) {

    	return a*h/2;

	} else {

    	console.log('Błędne dane')

	}
	
}

var triangle1Area = getTriangleArea(1, 15),
	triangle2Area = getTriangleArea(100, 150),
	triangle3Area = getTriangleArea(2, 6);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);