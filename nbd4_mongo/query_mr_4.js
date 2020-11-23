printjson(
db.people.mapReduce( 
function() {
var heigInMeters =  parseFloat(this.height)/100
emit(this.nationality,(parseFloat(this.weight)/(heigInMeters*heigInMeters)));
},
function(key,bmi) {

var value={"min_bmi":Math.min.apply(Math,bmi),"max_bmi":Math.max.apply(Math,bmi)};
return value;}
,{out : "wyjscie4"})
)
printjson(db.wyjscie4.find({},{"value.min_bmi":1,"value.max_bmi":1}).toArray());
