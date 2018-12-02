var mongoos = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Maple Springs Group Campground",
        image: "https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg",
        description: "Bacon ipsum dolor amet pastrami ball tip turkey, leberkas drumstick bresaola hamburger. Rump pig spare ribs pork chop, meatloaf frankfurter alcatra biltong shank brisket. Cupim strip steak sirloin pig ham hock t-bone shank meatball short loin salami pork loin pancetta turkey spare ribs. Frankfurter landjaeger buffalo ham tail drumstick, kielbasa ball tip chuck.Filet mignon landjaeger ham hock rump swine tongue pastrami. Buffalo boudin sirloin venison chuck salami meatball pork cupim swine bacon drumstick fatback ham hock alcatra. Corned beef short loin bresaola drumstick alcatra ham hock. Pork loin brisket sausage frankfurter. Pork chop sausage leberkas salami chuck pork loin turducken flank kevin, doner short loin pork belly ground round shoulder ham hock. Pastrami meatloaf bacon, t-bone cow meatball cupim chicken fatback."
    },
    {
        name: "Broome County",
        image: "http://www.gobroomecounty.com/files/hd/Campground1.jpg",
        description: "Bacon ipsum dolor amet pastrami ball tip turkey, leberkas drumstick bresaola hamburger. Rump pig spare ribs pork chop, meatloaf frankfurter alcatra biltong shank brisket. Cupim strip steak sirloin pig ham hock t-bone shank meatball short loin salami pork loin pancetta turkey spare ribs. Frankfurter landjaeger buffalo ham tail drumstick, kielbasa ball tip chuck.Filet mignon landjaeger ham hock rump swine tongue pastrami. Buffalo boudin sirloin venison chuck salami meatball pork cupim swine bacon drumstick fatback ham hock alcatra. Corned beef short loin bresaola drumstick alcatra ham hock. Pork loin brisket sausage frankfurter. Pork chop sausage leberkas salami chuck pork loin turducken flank kevin, doner short loin pork belly ground round shoulder ham hock. Pastrami meatloaf bacon, t-bone cow meatball cupim chicken fatback."
    },
    {
        name: "Small Country Campground",
        image: "http://smallcountry.com/wp-content/uploads/2016/12/14249775_1197762710267308_2452429550109535233_o.jpg",
        description: "Bacon ipsum dolor amet pastrami ball tip turkey, leberkas drumstick bresaola hamburger. Rump pig spare ribs pork chop, meatloaf frankfurter alcatra biltong shank brisket. Cupim strip steak sirloin pig ham hock t-bone shank meatball short loin salami pork loin pancetta turkey spare ribs. Frankfurter landjaeger buffalo ham tail drumstick, kielbasa ball tip chuck.Filet mignon landjaeger ham hock rump swine tongue pastrami. Buffalo boudin sirloin venison chuck salami meatball pork cupim swine bacon drumstick fatback ham hock alcatra. Corned beef short loin bresaola drumstick alcatra ham hock. Pork loin brisket sausage frankfurter. Pork chop sausage leberkas salami chuck pork loin turducken flank kevin, doner short loin pork belly ground round shoulder ham hock. Pastrami meatloaf bacon, t-bone cow meatball cupim chicken fatback."
        
    }
];

function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function(err) {
        // if (err) {
        //     console.log("remove campground!");
        // }
        
        // console.log("removed campgrounds");
        // // add a few campgrounds
        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log("Added a campground");
        //             // create a comment
        //             Comment.create({
        //                 text: "This place is great, but I wish to have internet",
        //                 author: "Gary"
                        
        //             }, function(err, comment) {
        //               if (err) {
        //                   console.log(err);
        //               } else {
        //                   campground.comments.push(comment);
        //                   campground.save();
        //                   console.log("Created a new comment");
        //               }
        //             });
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;
