const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const date = require(__dirname + "/date.js")


const app = express();

let items = [];

app.set("view engine", "ejs");


app.use(express.static("public")); //used to add contents in static page-public folder use karneka
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

let day= date.getDate();
  res.render("list", { kindOfDay: day, newItems: items });
});

// to catch the value added by the user
// by the post form method and storing it in item
// then pushing the item added by the user to an array of items declared above

app.post("/", function (req, res) {
  let item = req.body.newItem;

  items.push(item);

  console.log(item);

  res.redirect("/"); //2 render use nai karneka
});

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("port is running at 3000");
});

// if(currentDay === 6  || currentDay === 0) {
//     day = "Weekend";
//     res.render("list",{kindOfDay: day})
//     // we are rendering a file in views folder with the extension of .ejs
//     // and passing a single variable 'kindOfDay' and the value we are giving it is 'day'
// }
// else{
//     day = "WeekDay";

// }

// exports.index = function(req, res) {
//     res.render('index', { moment: moment });
// }

/////////////////////////////////
//   var currentDay = today.getDay();
//   var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   var day = "";

//   if( currentDay === 6 || currentDay === 0){
//     day = weekdayArr[currentDay];
//   }else{
//     day = weekdayArr[currentDay];
//   }

// var today = new Date();
// var currentDay = today.getDay();
// var day = "";

// switch (currentDay) {
//     case 0:
//         day = "Sunday"
//         break;
//     case 1:
//         day = "Monday"
//         break;
//     case 2:
//         day = "Tuesday"
//         break;
//     case 3:
//         day = "Wednesday"
//         break;
//     case 4:
//         day = "Thursday"
//         break;
//     case 5:
//         day = "Friday"
//         break;
//     case 6:
//         day = "Sat  day"
//         break;

//     default:
//         console.log("Currentday value is wrong")
//         break;
// }

// res.render("list",{kindOfDay: day});
