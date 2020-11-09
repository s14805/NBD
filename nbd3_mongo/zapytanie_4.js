 printjson(db.people.find({"weight" : {$gte : "68" },"weight" : {$lt : "71.5"}}).toArray())
