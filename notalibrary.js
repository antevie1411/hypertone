var releases =[];
const displayReleases = document.querySelector("#display-names");
const singles=document.querySelector("#singles");
const albums=document.querySelector("#albums");
const eps=document.querySelector("#eps");
function refresh(r){
let x = "<table><tr><th style=\"padding:0px;\">Cover Art</th><th>Artist</th><th>Track</th><th>Year</th><th>Type</th></tr>"
for (let i = 0; i < r.length; i++) {
	src="./ressources/cover_test.jpg"
	if(r[i].img){
		src=r[i].img
	}

css_mods_batch01
    x += "<tr><td style=\"padding:16px;width:16%;\"><img src=\""+src+"\"style=\"width:96px;height:96px;margin-left:0px;\"></img></td><td>"+r[i].artist.join(", ")+"</td><td><a href=\""+r[i].url+"\">"+r[i].name+"</a></td><td>"+r[i].year+"</td><td>"+r[i].type+"</td></tr>";

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
			if(releases[i].type=="EP"&&eps.checked||releases[i].type=="Album"&&albums.checked||(releases[i].type=="Single"||releases[i].type=="Track"||releases[i].type=="Video")&&singles.checked) k.push(releases[i])
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
//search()
fetch('./library.json')
	.then(response=>response.json())
	.then(json=>{releases=json;search()})
document.querySelector("#s1").addEventListener("input",search)
document.querySelector("#s1").addEventListener("input",search)
document.querySelector("#SORT").onchange = search
document.querySelector("#singles").onchange = search
document.querySelector("#albums").onchange = search
document.querySelector("#eps").onchange = search
