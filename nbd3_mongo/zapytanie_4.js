 printjson(db.people.find({$and :[{"weight" : {$gte : "68" }},{"weight" : {$lt : "71.5"}}]}).toArray())
