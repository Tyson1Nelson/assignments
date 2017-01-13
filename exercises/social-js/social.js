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

};
otherBand.namesOfSongs.push("coming undone","falling away from me");
//console.log(otherBand.namesOfSongs);
otherBand.yearsPerforming=20;
//console.log(otherBand);
bands.hotelsCrashed=142;
bands.bandMembers[1].kids.push( {
    name: "jon",
    age: 15
    });
//console.log(bands.bandMembers[1]);
console.log(bands);
console.log(otherBand);
