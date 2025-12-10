let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// sort array
touristSpots.sort();

let ul = document.getElementById("ul");

// loop through array
for (let i = 0; i < touristSpots.length; i++) {
    let li = document.createElement("li");  // create li
    li.textContent = touristSpots[i];       // text add
    ul.append(li);                          // append to ul
}
