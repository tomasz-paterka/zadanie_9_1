
function getTriangleArea(a, h) {
    if ( (a <= 0) || (h <= 0) ) {
        return 'Nieprawidlowe dane';
    } else {
        var wynik = a * h / 2;
        return wynik;
    } 
}
console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(8, 7);
console.log(getTriangleArea(8, 7));
var triangle2Area = getTriangleArea(5, 15);
alert(getTriangleArea(5, 15));
var triangle3Area = getTriangleArea(9, 5);
console.log(getTriangleArea(9, 5));