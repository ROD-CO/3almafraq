const myElementt = document.getElementsByClassName("item");
const apiKey='AIzaSyB286o6-WYR2ztSPFe0WW8nWmuy5jNgimc'; // Replace with your API key
const spreadsheetId = '1tSnMeRfWunB7IRGM3MJf67Qa5G9iHA5mFG8ay1VLN9A'; // Replace with your spreadsheet ID
const sheetName = 'Sheet1'; // Replace with your sheet name
const k = ['C', 'F'];
const h = ['A', 'D','G','j','M','P','S','V','Y','AB','AE'];
let j=0;
let l=0;
let o=0;


	


fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!L2:L80?key=${apiKey}`)
 .then(response => response.json())
 .then(data => { 
	var x=[14,7,10,4,11,14,10,12,8,9,3];
for (let indexx = 0; indexx < x.length; indexx++) {
		
	

	//x[indexx] =   Object.values(data.values);
	console.log(x[indexx]);
	var t=x[indexx];
	console.log("t="+t);

for (let index = 0; index < x[j]; index++) {

let myElement = document.createElement("div");
let myElement2 = document.createElement("p");
let all = document.getElementsByClassName("order");
myElement2.textContent=" ";
myElement.className = "items";
myElement2.className = "item";
myElement.appendChild(myElement2);
all[j].appendChild(myElement);


}



let n=2;


 	for (var i = 0; i < x[j]; i++) {

	 let y=l;
	
	console.log(h[j]+n);
	fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!${h[j]+n}?key=${apiKey}`)
 .then(response => response.json())
 .then(data => myElementt[y].innerHTML =   (data.values) )
 .catch(error => console.error('Error:', error));
 n+=1;
 l=l+1;
}
console.log("j="+j);
console.log("l="+l);
console.log("x="+x[1]);
console.log(k[j]+2);
	j+=1;


}	
		} )
 .catch(error => console.error('Error:', error));

// start

console.log("this website does not have prices yet but it will be available soon. made with love by ROD-MEDIA ");





// cold drinks

