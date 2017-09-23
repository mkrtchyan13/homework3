const first = function(x, y, z) {
	return x + y / z;
};


const second = function(){
	return 3 * 4;
};

const third = function(num1, num2) {
	const result = (num1+num2)/2;
	console.log (result);
};

const fullName = function(Firstname, Lastname) {
	return (Firstname + " " + Lastname);
};

const fifth = function(e, f, g){
	const a = e.length;
	const b = f.length;
	const c = g.length;
if(a>b && a>c) {return e};
if(b>a && b>c) {return f};
if(c>a && c>b) {return g};
};

const sixth = function(a,b){
	if (a === b) {return 0};
	if (a > b) {return 1};
	if (b > a) {return -1};
};

const seventh = function(a,b,c){
	if (a) {return a};
	if (b) {return b};
	if (c) {return c};
};

