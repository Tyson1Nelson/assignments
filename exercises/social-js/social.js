var bands = {
    name: "Metallica",
    genre: "metal",
    members: 4,
    namesOfSongs: ["enter sand man", "one", "for whome the Bell Tolls"],
    bandMembers: [
        {
            name: "james",
            lastName: "hatfield",
            age: 50
            },
        {
            name: "lars",
            lastName: "Ulrich",
            age: 49,
            kids: [
                {
                    name: "joe",
                    age: 12,
                },
                {
                    name: "sally",
                    age: 10
                }
              ]
            }
        ]
    }

             
var otherBand = {
    name: "korn",
    genre: "metal",
    members: 5,
    namesOfSongs: ["blind", "i did my time", "alone I break"],
    bandMembers: [
        {
            name: "jonathan",
            lastName: "davis",
            age: 49

            }, {
            name: "brian",
            lastName: "welch",
            age: 46
            }
    ]

}];
//console.log(bands);
//bands[1].yearsPerformed = 20;
var newSongs = ["falling away from me", "coming undone"];
otherBand.namesOfSongs.concat(newSongs);
var moreNamesOfSongs = bands[1].namesOfSongs.push(newSongs);
//console.log(bands);
console.log(bands[1].namesOfSongs);
//console.log(bands[0].namesOfSongs);