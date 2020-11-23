
db.people.mapReduce( 
function() {emit(this.sex,{"count":1,weight: parseFloat(this.weight),height: parseFloat(this.height)});},
function(sex,value) {
var output = { "count": 0,"weight": 0, "height": 0};
    value.forEach(value => {
      output.weight += value.weight;
      output.height += value.height;
      output.count+=value.count;
    });

return output;}
,{out : "wyjscie",
"finalize": function(key,value) {
      value.avg_weight = (value.weight/value.count);
      value.avg_height = (value.height/value.count);
      return value;
    }
})

printjson(db.wyjscie.find({},{_id:1,"value.avg_weight":1,"value.avg_height":1}).toArray());
