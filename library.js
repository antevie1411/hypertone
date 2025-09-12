const releases = [
    {artist: "Cement Tea", name: "Movement Speed: Slow", year: 2025, type: "EP"},
    {artist: "Blvck Hypertone & DF", name: "Quarantine Experiments Split", year: 2020, type: "Album"},
    {artist: "Zustand D.", name: "Introduxia Dimensii Hypertone", year: 2013, type: "Single"},
    {artist: "Cement Tea", name: "Operation: MINDBLOWN!", year: 2025, type: "Album"},
    {artist: "Blue Wind Echo", name: "Living A Quiet Life In The Dreamworld", year: 2020, type: "Single"}
];

const displayReleases = document.querySelector("#display-names");
for (let i = 0; i < releases.length; i++) {
    displayReleases.innerHTML += "<tr><td>${artist[i]}</td><td>${name[i]}</td><td>${year[i]}</td><td>${type[i]}</td></tr>";
}