Pokemon.create({
	dex: "001",
	name: "bulbasaur",
	description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
	maxcp: "981",
	attack: "118",
	defense: "118",
	stamina: "90",
	types:  "grass,poison"
})

Pokemon.create({
	dex: "043",
	name: "oddish",
	description: "During the daytime, It buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
	maxcp: "1069",
	attack: "131",
	defense: "116",
	stamina: "90",
	types:  "grass,poison"
})

Pokemon.create({
	dex: "068",
	name: "machamp",
	description: "It has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks.",
	maxcp: "2889",
	attack: "234",
	defense: "162",
	stamina: "180",
	types:  "fighting"
})

Pokemon.create({
	dex: "094",
	name: "gengar",
	description: "It steals heat from its surroundings. If you feel a sudden chill, it is certain that a GENGAR appeared.",
	maxcp: "2619",
	attack: "261",
	defense: "156",
	stamina: "120",
	types:  "ghost,poison"
})

Pokemon.create({
	dex: "150",
	name: "mewtwo",
	description: "Because its battle abilities were raised to the ultimate level, it thinks only of defeating its foes.",
	maxcp: "3982",
	attack: "300",
	defense: "182",
	stamina: "193",
	types:  "psychic"
})

Pokemon.create({
	dex: "185",
	name: "sudowoodo",
	description: "Although it always pretends to be a tree, its composition appears more similar to rock than to vegetation.",
	maxcp: "2065",
	attack: "167",
	defense: "198",
	stamina: "140",
	types:  "rock"
})


Pokemon.create({
	dex: "248",
	name: "tyranitar",
	description: "Its body can’t be harmed by any sort of attack, so it is very eager to make challenges against enemies.",
	maxcp: "3670",
	attack: "251",
	defense: "212",
	stamina: "200",
	types:  "rock,dark"
})



Pokemon.create({
	dex: "376",
	name: "metagross",
	description: "It has four brains in total. Combined, the four brains can breeze through difficult calculations faster than a supercomputer. This Pokémon can float in the air by tucking in its four legs.",
	maxcp: "3637",
	attack: "257",
	defense: "247",
	stamina: "160",
	types:  "steel,psychic"
})

Pokemon.create({
	dex: "384",
	name: "rayquaza",
	description: "It is said to have lived for hundreds of millions of years. Legends remain of how it put to rest the clash between Kyogre and Groudon.",
	maxcp: "4354",
	attack: "312",
	defense: "187",
	stamina: "210",
	types:  "dragon,flying"
})

10.times do
	sentiment = ["+", "-", "~"]
	all_pokemon = Pokemon.take(9)

	all_pokemon.each { |pokemon|
		content = Faker::GameOfThrones.quote
		author = Faker::StarWars.character
		pokemon.comments.create!(content: content, sentiment: sentiment.sample, author: author)}
end
