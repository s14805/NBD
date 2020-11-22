printjson(db.people.aggregate({ $group: { _id: "$nationality", min_BMI: { $min:  {$multiply: [{$divide: [{$toDouble: "$weight"},{$multiply: [{$toDouble: "$height"},{$toDouble: "$height"}]}]},10000]}}, max_BMI: { $max:  {$multiply: [{$divide: [{$toDouble: "$weight"},{$multiply: [{$toDouble: "$height"},{$toDouble: "$height"}]}]},10000]}} }})
)
