
db.people.mapReduce( 

function() {
if (this.nationality == "Poland" && this.sex == "Female"){
this.credit.forEach(cre =>{
emit(cre.currency,{"balance" : parseFloat(cre.balance),count:1});
});}
}
,
function(credit,values) { 
var value={"suma":0.0,"srednia":0.0,"count":0.0};
values.forEach(val=>{
value.count+=val.count;
value.suma+=val.balance;
});
value.srednia = value.suma/value.count
return value;}
,{out : "wyjscie5"}

)

printjson(db.wyjscie5.find({},{"_id":1,"value.suma":1,"value.srednia":1}).toArray());
