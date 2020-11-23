
db.people.mapReduce( 
function() {emit(this.job,1);},
function(sex,value) {
return Array.sum(value);}
,{out : "wyjscie3"}
)

printjson(db.wyjscie3.find({},{_id:1}).toArray());
