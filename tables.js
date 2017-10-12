var expres = require("express");
var bodyParser = require("bodyParser");
var path = require("paht");

var app = express();
var PORT = 3306;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var tables = [{
	reservation_name: "James Waite",
	reserve_phone: "555-555-5555",
	reserve_email: "email@email.com",
	reserve_uniqueID: "54gi7LL"

}, {
	reservation_name: ,
	reserve_phone: ,
	reserve_email: ,
	reserve_uniqueID: 

}];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


app.get("/api/:tables?", function(req, res) {
  var chosen = req.params.tables;
  if (chosen) {
    console.log(chosen);
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});


app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  console.log(newReservation);
  tables.push(newReservation);
  res.json(newReservation);
});

