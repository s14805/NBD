
db.people.mapReduce( 

function() {
this.credit.forEach(cre =>{
emit(cre.currency,parseFloat(cre.balance));
});}
,
function(sex,value) { return Array.sum(value);}
,{out : "wyjscie2"}

)

printjson(db.wyjscie2.find().toArray());
