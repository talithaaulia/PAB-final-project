export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};


export const recipeList = [
	
	{
		id: "1",
		name: "Salad Tuna",
		image: require("./assets/images/tuna.png"),
		ingredients: ["Ikan Tuna", "jus Lemon", "Bawang merah", "Alpukat"],
		time: "40 ",
		difficulty: "Medium",
		calories: "420 kalori",
		color: "#006A4E",
		description:
			"Hidangan lezat dan menyegarkan  tuna segar dicampur dengan jus Lemon dan renyahnya bawang merah dan alpukat.",
		steps: [
			"Potong tuna segar menjadi kubus kecil.",
			"Cincang halus bawang merah dan alpukat.",
			"Campur tuna, bawang merah, dan alpukat dalam mangkuk.",
			"Percikkan air jeruk nipis ke atas adonan dan aduk perlahan.",
			"Sajikan dingin dan nikmatilah!",
		],
	},
	{
		id: "2",
		name: "Lasagna",
		image: require("./assets/images/lasgana.png"),
		ingredients: [
			"Mie",		
			"potongan daging",
			"Keju",
			"Saus Tomat",
		],
		time: "40",
		difficulty: "Lumayan",
		calories: "420 kalori",
		color: "#f39c12",
		description:
			"Lasagna adalah makanan khas italia",
		steps: [
			"Masak mie laasagna menggunakan air sampai mendidik",
			"Masukkan daging ke dalam campuran mie",
			"Lapisi mie lasagna, daging sapi, keju ricotta, dan saus tomat ke dalam loyang.",
			"Ulangi lapisannya dan panggang dalam oven sampai bergelembung dan berwarna keemasan.",
			"Biarkan agak dingin sebelum disajikan.",
		],
	},
	{
		id: "3",
		name: "Hot Dog",
		image: require("./assets/images/hotdog.png"),
		ingredients: ["Hot Dog Buns", "Frankfurters", "Ketchup", "Mustard"],
		time: "40 ",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"A classic American favorite, hot dog buns stuffed with juicy frankfurters, drizzled with ketchup and mustard for that perfect balance of flavors.",
		steps: [
			"Grill or heat the frankfurters until they're cooked through.",
			"Place the frankfurters in hot dog buns.",
			"Squeeze ketchup and mustard over the frankfurters.",
			"Serve with your favorite sides and enjoy!",
		],
	},
	{
		id: "4",
		name: "Ayam Kecap",
		image: require("./assets/images/manchurian.png"),
		ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
		time: "30 ",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"A popular Indo-Chinese dish featuring crispy cauliflower bites tossed in a flavorful sauce made with soy sauce, ginger, and garlic.",
		steps: [
			"Cut the cauliflower into florets and blanch them.",
			"Prepare a sauce by mixing soy sauce, ginger, and garlic.",
			"Deep-fry or shallow-fry the cauliflower until crispy.",
			"Toss the fried cauliflower in the sauce until well coated.",
			"Garnish with chopped green onions and serve hot.",
		],
	},
	{
		id: "5",
		name: "Ayam Geprek",
		image: require("./assets/images/chicken.png"),
		ingredients: ["Ayam", "tepung", "Bawang merah", "Bawang putih"],
		time: "45 ",
		difficulty: "easy",
		calories: "450 kalori",
		color: "#8d4004",
		description:
			"Ayam Geprek dengan sambal geprek yummy",
		steps: [
			"Potong ayam sesuai dengan selera",
			"goreng ayam dengan tepung menggunakan api sedang",
			"sambil menunggu ayam matang,buat sambel dengan uleg bawang merah dan bawang putih tambahkan garam,gula,dan penyedap rasa",
			"Uleg hingga halus",
			"Angkat ayam yang telah matang",
			"Setelah bumbu sambal halus,tambahkan 1 sendok minyak panas bekas goreng ayam tadi kedalam sambal",
		],
	},
	{
		id: "6",
		name: "Cupcakes",
		image: require("./assets/images/cupcakes.png"),
		ingredients: ["Flour", "Sugar", "Eggs", "Butter"],
		time: "60 ",
		difficulty: "Medium",
		calories: "200 cal",
		color: "#473101",
		description:
			"Delightful cupcakes made with a perfect blend of flour, sugar, eggs, and butter, perfect for any occasion.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Prepare the cupcake batter by mixing the ingredients together.",
			"Line a muffin tin with cupcake liners.",
			"Fill each liner with batter and bake in the oven.",
			"Let the cupcakes cool, then frost and decorate as desired.",
			"Indulge in these sweet treats and savor the flavor!",
		],
	},
	{
		id: "7",
		name: "kare ayam",
		image: require("./assets/images/curry.png"),
		ingredients: ["Meat", "Curry Powder", "Coconut Milk", "Spices"],
		time: "55 ",
		difficulty: "Hard",
		calories: "550 cal",
		color: "#d35400",

		description:
			"A rich and aromatic curry dish featuring tender pieces of meat cooked in a flavorful blend of curry powder, coconut milk, and spices.",
		steps: [
			"Marinate the meat with spices and let it sit for a while.",
			"Heat oil in a large pot and sauté the marinated meat until browned.",
			"Add curry powder and stir to coat the meat.",
			"Pour in coconut milk and bring to a simmer.",
			"Cover and let the curry simmer until the meat is tender and the flavors meld.",
			"Serve the curry with rice or bread and enjoy the deliciousness!",
		],
	},
	{
		id: "8",
		name: "Ramen",
		image: require("./assets/images/ramen-org.png"),
		ingredients: ["Ramen Noodles", "Soy Sauce", "Eggs", "Vegetables"],
		time: "35 ",
		difficulty: "Easy",
		calories: "400 cal",
		color: "#f96163",
		description:
			"A comforting bowl of ramen featuring slurp-worthy noodles, a savory soy sauce-based broth, tender vegetables, and perfectly boiled eggs.",
		steps: [
			"Boil the ramen noodles according to package instructions.",
			"In a pot, bring water to a simmer and add soy sauce for the broth.",
			"Add chopped vegetables and let them cook until tender.",
			"Boil eggs to your desired doneness, then peel and slice them.",
			"Assemble the ramen bowls by placing cooked noodles, vegetables, and egg slices.",
			"Ladle the hot broth over the ingredients and get ready to enjoy your homemade ramen!",
		],
		
	},
];
