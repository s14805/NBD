printjson( db.people.aggregate([ { $unwind : {path: "$credit" }},{ $group: { _id: "$credit.currency", total: { $sum: {$toDouble: "$credit.balance"} }  }}]))
