let array1 =["Westley Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Micheal Jordan", "Patrick Ewing"];
firstName=[];
lastName=[];

//Westley Snipes
var a = array1[0].lastIndexOf(" ")
var b = array1[0].substring(0, a);
var c = array1[0].substring( a + 1);


firstName.push(b);
lastName.push(c);

//Nicholas Cage
var d = array1[1].lastIndexOf(" ")
var e = array1[1].substring(0, d);
var f = array1[1].substring( d + 1);

firstName.push(e);
lastName.push(f);

//Nasir Jones
var g = array1[2].lastIndexOf(" ")
var h = array1[2].substring(0, g);
var i = array1[2].substring( g + 1);

firstName.push(h);
lastName.push(i);

//Sean Carter
var j= array1[3].lastIndexOf(" ")
var k = array1[3].substring(0, j);
var l = array1[3].substring( j + 1);

firstName.push(k);
lastName.push(l);


//Sean Combs
var m = array1[4].lastIndexOf(" ")
var n = array1[4].substring(0, m);
var o = array1[4].substring( m + 1);

firstName.push(n);
lastName.push(o);


//MichealJordan
var p = array1[5].lastIndexOf(" ")
var q = array1[5].substring(0, p);
var r = array1[5].substring( p + 1);

firstName.push(q);
lastName.push(r);


//Patrick Ewing
var s = array1[6].lastIndexOf(" ")
var t = array1[6].substring(0, s);
var u = array1[6].substring( s + 1);

firstName.push(t);
lastName.push(u);


console.log(firstName);
console.log(lastName);

//I know that theres a better way. You can loop this to make it easier but it was confusing and so I chose a method that was easier for me. Still I hate this code
//I made
