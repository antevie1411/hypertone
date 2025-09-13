const releases = [
    {artist: ["Cement Tea"], name: "Movement Speed: Slow", year: 2025, type: "EP"},
	{artist: ["Cement Tea"], name: "Operation: MINDBLOWN!", year: 2025, type: "Album"},
    {artist: ["Blvck Hypertone","DF"], name: "Quarantine Experiments Split", year: 2020, type: "Album"},
	{artist: ["Blue Wind Echo"], name: "Living A Quiet Life In The Dreamworld", year: 2020, type: "Single"},
    {artist: ["Zustand D."], name: "Introduxia Dimensii Hypertone", year: 2013, type: "Single"},
	{artist: ["Exp_23:25"], name: "Towards A Thousand Digits", year: 2019, type: "Album"},
    {artist: ["Blue Wind Echo"], name: "2020", year: 2020, type: "Album"},
	{artist: ["Exp_23:25","Kophedra"], name: "Supernatural speed of my thoughts", year: 2019, type: "Single"},
	{artist: ["Exp_23:25"], name: "The Black Box Inside Of Me", year: 2019, type: "Single"},
	{artist: ["Exp_23:25"], name: "Over-Awareness", year: 2019, type: "EP"},
	{artist: ["Johnny Violent"], name: "Burn Out", year: 1996, type: "Single"},
	{artist: ["tatsuyangu"], name: "milky way galaxy", year: 2021, type: "Single"},
	{artist: ["Kobaryo"], name: "Singularity at 2.64e+6 BPM", year: 2023, type: "Single"},
];

const displayReleases = document.querySelector("#display-names");
const singles=document.querySelector("#singles");
const albums=document.querySelector("#albums");
const eps=document.querySelector("#eps");
function refresh(r){
let x = "<table><tr><th>Artist</th><th>Track</th><th>Year</th><th>Type</th></tr>"
for (let i = 0; i < r.length; i++) {
    x += "<tr><td>"+r[i].artist+"</td><td>"+r[i].name+"</td><td>"+r[i].year+"</td><td>"+r[i].type+"</td></tr>";
}
displayReleases.innerHTML=x+"</table>"
//alert(displayReleases.innerHTML)
}
function fs(a,b){
	a=a.toLowerCase()
	let i=0, n=-1, l;
	b=b.toLowerCase()
	for(;l=b[i++];)if(!~(n=a.indexOf(l,n+1)))return false;
	return true
}
function search(){
	let s = document.querySelector("#s1").value
	//	alert(s)
	let k = [];
	for(let i in releases)
		if(fs(releases[i].artist.join(", "),s)||fs(releases[i].name,s)||fs(releases[i].year.toString(),s))
			if(releases[i].type=="EP"&&eps.checked||releases[i].type=="Album"&&albums.checked||releases[i].type=="Single"&&singles.checked) k.push(releases[i])
	switch(document.getElementById("SORT").options[document.getElementById("SORT").selectedIndex].value){
		case "TN":
			k=k.sort((a,b)=>(a.name>b.name?1:-1))
			break;
		case "AN":
			k=k.sort((a,b)=>(a.artist[0]>b.artist[0]?1:-1))
			break;
		case "2N":
			k=k.sort((a,b)=>(a.artist[1]>b.artist[1]?1:-1))
			break;
		case "AD":
			k=k.sort((a,b)=>a.year-b.year)
			break;
		case "BC":
			k=k.sort((a,b)=>b.year-a.year)
			break;
	}
	//alert(JSON.stringify(k))
	refresh(k)

}
search()
document.querySelector("#s1").addEventListener("input",search)
document.querySelector("#s1").addEventListener("input",search)
document.querySelector("#SORT").onchange = search
document.querySelector("#singles").onchange = search
document.querySelector("#albums").onchange = search
document.querySelector("#eps").onchange = search
