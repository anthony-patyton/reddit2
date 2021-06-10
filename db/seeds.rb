5.times do
  sub = Sub.create(
    name: Faker::FunnyName.name
  )
  3.times do
    Topic.create(
      sub_id: sub.id,
      name: Faker::Coffee.blend_name,
      body: Faker::Coffee.notes
    )
  end
end

puts "Data is seeded"