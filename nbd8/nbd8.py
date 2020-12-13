import riak

client = riak.RiakClient(port=8098)
user_bucket = client.bucket('user')

# dodanie

new_user = user_bucket.new('john', data={
    'first_name': 'John',
    'last_name': 'Doe',
    'gender': 'm',
    'is_active': True,
})
new_user.store()


#wypisanie
fetched = user_bucket.get('john')
print(fetched.data)

#zmiana
fetched.data["gender"] = 'f'
fetched.store()

fetched = user_bucket.get('john')
print(fetched.data)

#usuwanie
fetched.delete()

print( 'czy dkument istnieje: ',user_bucket.get('john').exists )
