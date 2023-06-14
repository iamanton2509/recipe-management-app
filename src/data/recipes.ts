import lasanga from './../images/lasanga.jpg';
import hummus from './../images/hummus.jpg';
import tacos from './../images/tacos.jpg';
import burrito from './../images/burrito.jpg';
import khachapuri from './../images/khacapuri.jpg';
import pasta from './../images/pasta.jpg';
import paella from './../images/paella.jpg';
import curry from './../images/curry.jpg';
import boeuf from './../images/boeuf.jpg';

const recipes = [
    {
        id: 1,
        title: "Lasagna",
        description: "Second only to pizza in the list of famed Italian foods, there’s a reason this pasta-layered, tomato-sauce-infused, minced-meaty gift to kids and adults alike is so popular – it just works",
        ingredients: ["Lasagna noodles: Flat pasta sheets that form the layers of the dish", "Ground meat: Often a mixture of beef and pork, cooked and seasoned with herbs and spices", "Tomato sauce: A rich and flavorful sauce made with tomatoes, onions, garlic, and herbs", "Cheese: Typically a combination of mozzarella, Parmesan, and ricotta cheese.", "Vegetables: Optional additions like sautéed onions, garlic, mushrooms, spinach, or bell peppers.", "Seasonings: Common seasonings include salt, pepper, Italian herbs (such as basil and oregano), and sometimes red pepper flakes", "Bechamel sauce (white sauce): A creamy sauce made with butter, flour, milk, and nutmeg (optional)."], 
        instruction: ["Preheat your oven to the temperature specified on the lasagna noodle package", "Cook the lasagna noodles according to the instructions on the package. Drain and set aside", "In a large skillet, cook the ground meat over medium heat until browned. Add the chopped onion and minced garlic, and cook until the onion is softened.", "Stir in the tomato sauce and tomato paste, along with the Italian seasoning, salt, and pepper. Simmer the sauce for about 10 minutes, allowing the flavors to blend.", "In a separate bowl, mix together the ricotta cheese, half of the shredded mozzarella cheese, and half of the grated Parmesan cheese.", "Assemble the lasagna by spreading a thin layer of the meat sauce on the bottom of a baking dish. Place a layer of cooked lasagna noodles on top, followed by a layer of the cheese mixture. Repeat these layers until all the ingredients are used, finishing with a layer of meat sauce on top.", "Sprinkle the remaining shredded mozzarella and grated Parmesan cheese on top of the lasagna. You can also add some torn fresh basil leaves for extra flavor.", "Cover the baking dish with foil and bake in the preheated oven for about 25-30 minutes. Then remove the foil and bake for an additional 10-15 minutes, or until the cheese is bubbly and golden.", "Allow the lasagna to cool for a few minutes before slicing and serving"],
        time: 75,
        img: lasanga,
        isFavorite: false,
        isSaved: false
    },
    {
        id: 2,
        title: "Hummus",
        description: "This humble Middle Eastern spread, made with chickpeas, garlic, lemon juice and tahini has become a fridge staple all around the world. This tangy treat tastes good as a dip, with breads, with meats, with vegetables, beans or – hear us out – on a Marmite rice cake",
        ingredients: ["Chickpeas (garbanzo beans): The primary ingredient and the base of hummus. They are usually cooked and drained before use.", "Tahini: A paste made from ground sesame seeds, which adds a rich and nutty flavor to the hummus", "Garlic: Fresh garlic cloves, minced or crushed, for added flavor.", "Lemon juice: Freshly squeezed lemon juice adds tanginess and brightness to the hummus.", "Olive oil: Used for both blending the ingredients and drizzling on top of the hummus for serving.", "Salt: To enhance the overall flavor of the hummus.", "Water: Helps achieve the desired consistency by thinning the hummus if needed."],
        instruction: ["In a food processor or blender, combine the chickpeas, lemon juice, tahini, minced garlic, olive oil, cumin, and a pinch of salt.", "Blend the ingredients until smooth and creamy. If the mixture is too thick, gradually add water (about 1 tablespoon at a time) while blending until you reach the desired consistency.", "Taste the hummus and adjust the seasoning by adding more salt or lemon juice if needed.", "Transfer the hummus to a serving bowl or container. You can create a well in the center and drizzle some olive oil over the top for garnish. Sprinkle with a pinch of paprika or chopped parsley for added flavor and presentation.", "Serve the hummus with pita bread, fresh vegetables, or as a spread on sandwiches or wrap"],
        time: 15,
        img: hummus,
        isFavorite: false,
        isSaved: false
    },
    {
        id: 3,
        title: "Tacos",
        description: "A fresh, handmade tortilla stuffed with small chunks of grilled beef rubbed in oil and sea salt then covered with guacamole, salsa, onions, cilantro or anything else you want – perfect for breakfast, lunch or dinner. This is the reason no visitor leaves Mexico weighing less than when they arrived",
        ingredients: ["Tortillas (corn or flour)", "Protein of choice (ground beef, chicken, shrimp, tofu, etc.)", "Taco seasoning (store-bought or homemade)", "Toppings", "Shredded cheese (cheddar, Monterey Jack, etc.)", "Fresh cilantro", "Lime wedges"],
        instruction: ["Cook the protein: In a skillet, cook the ground beef, chicken, or your preferred protein over medium heat until browned and cooked through. Drain any excess fat. Add taco seasoning and water according to the package instructions or your homemade recipe. Simmer until the seasoning is well incorporated.", "Prepare the toppings: Chop the lettuce, tomatoes, onions, and cilantro. Shred the cheese. Slice the jalapenos, olives, and lime wedges. Prepare any additional toppings you desire.", "Warm the taco shells: If using soft taco shells, heat them in a dry skillet or warm them in the oven according to the package instructions. If using hard taco shells, simply warm them in the oven for a few minutes.", "Assemble the tacos: Take a taco shell and fill it with the cooked protein, followed by the toppings of your choice. Start with the lettuce, then add tomatoes, onions, cheese, sour cream, salsa, guacamole, and any other toppings you desire. Squeeze some lime juice over the top and sprinkle with chopped cilantro.", "Serve and enjoy: Repeat the process with the remaining taco shells and fillings. Serve the tacos immediately and enjoy while they are still warm and all the flavors are fresh"],
        time: 35,
        img: tacos,
        isFavorite: false,
        isSaved: false
    },
    {
        id: 4,
        title: "Burrito",
        description: "Burrito is a popular Mexican dish known for its delicious flavors and hearty filling. It consists of a large flour tortilla wrapped around various ingredients such as seasoned meat or beans, rice, cheese, and a variety of toppings.",
        ingredients: ["Tortilla: Flour tortillas are commonly used for burritos, but you can also use whole wheat or corn tortillas", "Protein: Choose your preferred protein, such as grilled chicken, beef, pork, shrimp, or vegetarian options like beans or tofu", "Rice: Mexican or Spanish rice is often added to burritos for flavor and texture", "Beans: Common choices are refried beans or black beans. You can use canned beans or cook them from scratch", "Cheese: Shredded cheese, such as cheddar, Monterey Jack, or Mexican blend, adds a creamy and melty element to the burrito", "Salsa: Salsa adds a burst of flavor. You can use store-bought or homemade salsa, and choose from mild to spicy varieties","Vegetables: Add fresh vegetables like lettuce, diced tomatoes, onions, and cilantro for crunch and freshness"],  
        instruction: ["Prepare the Protein: Cook your chosen protein (e.g., chicken, beef, pork, shrimp) according to your preferred method. Season it with spices like cumin, chili powder, garlic powder, and salt for added flavor.", "Cook the Rice: If using rice, cook it according to the package instructions. You can add spices or herbs to enhance the flavor.", "Warm the Tortillas: Heat the tortillas on a griddle or in a dry skillet over medium heat for a few seconds on each side until they are pliable.", "Assemble the Burrito: Lay a tortilla flat and add a scoop of cooked protein in the center. Top it with rice, beans, cheese, salsa, guacamole, sour cream, and any other desired toppings. Add fresh vegetables like lettuce, tomatoes, onions, and cilantro.", "Fold the Burrito: Fold the sides of the tortilla over the filling, then roll it tightly from bottom to top, creating a burrito shape. If desired, you can wrap it in foil to hold its shape"],
        time: 45,
        img: burrito,
        isFavorite: false,
        isSaved: false
    },
    {
        id: 5,
        title: "Khachapuri",
        description: "Khachapuri is a traditional Georgian dish that has gained popularity worldwide for its irresistible combination of flavors and textures. It is a savory cheese-filled bread that is loved by both locals and visitors alike.",
        ingredients: ["Flour: To make the dough for the bread", "Yeast: For dough leavening", "Water: To hydrate the dough", "Salt: For seasoning the dough", "Eggs: Both for the dough and as a topping", "Cheese: The main filling ingredient, commonly used cheeses include Sulguni, Imeruli, or feta cheese","Butter: For brushing the bread and enhancing its flavor"],
        instruction: ["In a large mixing bowl, combine flour, yeast, sugar, and salt.", "Gradually add warm milk and melted butter to the dry ingredients. Mix until a dough forms.", "Knead the dough on a floured surface for about 5-7 minutes until smooth and elastic.", "Place the dough back in the bowl, cover it with a clean kitchen towel, and let it rise in a warm place for about 1-2 hours, or until it doubles in size.", "Preheat your oven to 200°C (400°F).", "Punch down the risen dough and divide it into equal-sized portions.", "Take one portion of dough and roll it out into a circular shape, about 8-10 inches in diameter.", "Sprinkle grated cheese (such as feta or a mixture of feta and mozzarella) on one half of the dough, leaving a small border around the edges.", "Fold the other half of the dough over the cheese-filled side and seal the edges by pressing them together.", "Transfer the khachapuri to a baking sheet lined with parchment paper.", "Brush the top of the khachapuri with beaten egg.", "Bake in the preheated oven for about 15-20 minutes, or until the crust is golden brown and the cheese is melted and bubbly.", "Remove from the oven and let it cool slightly before serving."],
        time: 40,
        img: khachapuri,
        isFavorite: false,
        isSaved: false
    },
    {
        id: 6,
        title: "Pasta",
        description: "Pasta is a popular and versatile dish enjoyed worldwide. It is a staple in Italian cuisine and has gained popularity in many other cultures. It comes in various shapes and sizes, such as spaghetti, penne, fusilli, or linguine",
        ingredients: ["Pasta: Choose your favorite type of pasta, such as spaghetti, penne, fettuccine, or macaroni", "Sauce: Options for sauce include marinara sauce (made with tomatoes, garlic, and herbs), Alfredo sauce, pesto sauce, or carbonara sauce", "Protein: You can add cooked chicken, beef, shrimp, or sausage to your pasta dish for added protein", "Vegetables: Enhance the flavor and nutrition of your pasta by adding vegetables such as tomatoes, mushrooms, spinach, bell peppers, onions, or zucchini", "Cheese: Grated Parmesan, mozzarella, or ricotta cheese can be sprinkled on top of the pasta for a creamy and savory touch", "Herbs and Spices: Add herbs like basil, oregano, parsley, or thyme, as well as spices like garlic powder, red pepper flakes, or black pepper to season your pasta dish", "Olive Oil: Olive oil is often used in pasta dishes to sauté vegetables, coat the pasta, or enhance the flavor of the sauce"],
        instruction: ["Boil Water: Fill a large pot with water and bring it to a rolling boil. Add salt to the water for added flavor.", "Add Pasta: Carefully add the pasta to the boiling water. Stir gently to prevent sticking.", "Cook Pasta: Follow the package instructions for the recommended cooking time. Stir occasionally to ensure even cooking. Taste a small piece of pasta to check for doneness. It should be al dente, meaning it's cooked but still firm to the bite.", "Drain Pasta: Once the pasta is cooked to your desired consistency, turn off the heat and carefully pour the contents of the pot into a colander or strainer to drain the water.Shake gently to remove excess water.", "Sauce Preparation: While the pasta is cooking, you can prepare your sauce or toppings. Heat the sauce in a separate pan or prepare it as per your recipe.", "Combine Pasta and Sauce: Return the drained pasta to the pot or transfer it to a serving bowl. Pour the sauce over the pasta and toss gently to coat the pasta evenly.", "Serve: Divide the pasta into individual bowls or plates and garnish with additional toppings or grated cheese, if desired"],
        time: 25,
        img: pasta,
        isFavorite: false,
        isSaved: false
    },
    {
        id: 7,
        title: "Seafood paella",
        description: "The sea is lapping just by your feet, a warm breeze whips the tablecloth around your legs and a steamy pan of paella sits in front of you. Shrimp, lobster, mussels and cuttlefish combine with white rice and various herbs, oil and salt in this Valencian dish to send you immediately into holiday mode. Though if you have it in Spain, you’re probably there already",
        ingredients: ["Rice: Use short-grain rice, such as Arborio or Valencia rice", "Seafood: Common seafood options include shrimp, mussels, clams, calamari, and fish fillets", "Olive oil: Use extra-virgin olive oil for flavor", "Onion: Finely chopped onion for added flavor", "Garlic: Minced garlic cloves for a savory taste", "Tomatoes: Ripe tomatoes, diced or crushed, to add richness", "Bell peppers: Sliced bell peppers for a hint of sweetness and color", "Saffron: A key ingredient that gives paella its distinct yellow color and unique flavor", "Paprika: Both sweet and smoked paprika can be used for a smoky and slightly spicy taste", "", "Chicken or vegetable broth: To cook the rice and infuse it with flavor", "Lemon wedges: Served on the side for a refreshing citrus kick", "Fresh herbs: Optional garnish with parsley or cilantro for added freshness"],
        instruction: ["Prepare the seafood: Clean and devein the shrimp, scrub the mussels and clams, and rinse the calamari. Set aside", "Heat the pan: Use a large, shallow paella pan or a wide skillet. Heat it over medium-high heat and add olive oil", "Sauté the aromatics: Add chopped onion and minced garlic to the pan. Sauté until the onion is translucent and the garlic is fragrant", "Add the vegetables: Stir in diced tomatoes and sliced bell peppers. Cook for a few minutes until they start to soften", "Season the dish: Sprinkle saffron threads and paprika over the mixture. Stir well to evenly distribute the spices", "Add the rice: Pour the short-grain rice into the pan. Stir to coat the rice with the oil and spices", "Pour the broth: Carefully pour in the chicken or vegetable broth. The liquid should cover the rice by about an inch", "Cook the rice: Reduce the heat to medium-low and let the rice simmer uncovered. Avoid stirring too much to allow a crust (socarrat) to form on the bottom", "Arrange the seafood: Place the shrimp, mussels, clams, and calamari on top of the rice. Press them slightly into the mixture", "Cover and simmer: Cover the pan with a lid or foil and continue cooking for about 10-15 minutes or until the rice is tender and the seafood is cooked through", "Let it rest: Remove the pan from the heat and let the paella rest for a few minutes to allow the flavors to meld", "Serve and garnish: Garnish the paella with fresh parsley or cilantro and serve with lemon wedges on the side. Serve directly from the pan for an authentic presentation"],
        time: 60,
        img: paella,
        isFavorite: false,
        isSaved: false
    },
    {
        id: 8,
        title: "Massaman curry",
        description: "Massaman curry is a rich and flavorful Thai curry that is known for its aromatic spices and creamy texture. Originating from Thailand, it has gained popularity worldwide for its unique blend of ingredients and complex flavors. Massaman curry is sure to delight your taste buds and transport you to the vibrant culinary world of Thailand.",
        ingredients: ["Protein: Chicken, beef, lamb, or tofu (for vegetarian/vegan options)", "Massaman curry paste: A combination of various spices and herbs, including dried chili peppers, lemongrass, galangal, garlic, shallots, coriander seeds, cumin, cinnamon, cardamom, and nutmeg", "Coconut milk: Provides a creamy and rich base for the curry", "Potatoes: Diced potatoes are a staple ingredient in Massaman curry", "Onion: Sliced or diced onions add flavor and texture to the curry", "Peanuts: Some recipes include roasted peanuts or peanut butter for added creaminess and a nutty flavor", "Fish sauce: Adds a savory and umami taste to the curry", "Tamarind paste: Provides a tangy and slightly sour flavor", "Palm sugar or brown sugar: Balances the flavors by adding sweetness", "Kaffir lime leaves: Adds a citrusy aroma and flavor", "Optional ingredients: Some variations of Massaman curry may also include additional vegetables such as carrots, bell peppers, or baby corn"],
        instruction: ["Heat oil in a large pot or wok over medium heat", "Add the Massaman curry paste to the pot and cook for a few minutes until fragrant", "If using meat, add it to the pot and cook until browned on all sides. If using tofu or vegetables, skip this step", "Add sliced onions to the pot and cook until softened", "Pour in the coconut milk and stir well to combine with the curry paste and onions", "Add diced potatoes to the pot and stir to coat them with the curry mixture", "If desired, add additional vegetables such as carrots, bell peppers, or baby corn at this stage", "Season the curry with fish sauce, tamarind paste, palm sugar or brown sugar, and kaffir lime leaves", "Reduce the heat to low, cover the pot, and let the curry simmer for about 30-45 minutes, or until the potatoes are cooked through and the flavors have melded together", "Taste and adjust the seasoning as needed. You can add more fish sauce for saltiness, sugar for sweetness, or tamarind paste for sourness", "Serve the Massaman curry hot over steamed jasmine rice or with noodles", "Garnish with fresh cilantro or Thai basil leaves if desired"],
        time: 70,
        img: curry,
        isFavorite: false,
        isSaved: false
    },
    {
        id: 9,
        title: "Boeuf Bourgignon",
        description: "Boeuf Bourguignon, also known as Beef Bourguignon, is a classic French dish that hails from the Burgundy region of France. It is a hearty and flavorful stew made with tender beef, red wine, aromatic vegetables, herbs, and spices. Its robust flavors and tender meat make it a beloved dish both in France and around the world",
        ingredients: ["Beef: Typically, a tough and flavorful cut such as chuck roast or beef stew meat is used", "Red Wine: A full-bodied red wine, such as Burgundy or Pinot Noir, is traditionally used", "Bacon: Adds smokiness and richness to the dish", "Onions: Usually pearl onions or yellow onions are used", "Carrots: Adds sweetness and texture to the stew", "Garlic: Provides depth of flavor", "Mushrooms: Often cremini or button mushrooms are used", "Beef Broth: Adds additional flavor and helps to create a rich sauce", "Tomato Paste: Enhances the color and adds a hint of sweetness", "Fresh Thyme and Bay Leaves: Herbs that contribute to the aromatic flavors of the dish", "Salt and Pepper: To season the stew", "Flour: Used for coating the beef and thickening the sauce"],
        instruction: ["Start by cutting the beef into cubes, about 2 inches in size. Season the beef with salt and pepper", "In a large, heavy-bottomed pot or Dutch oven, heat some oil over medium-high heat. Add the beef in batches and brown it on all sides. Remove the browned beef and set it aside", "In the same pot, add the bacon and cook until it becomes crispy. Remove the bacon and set it aside", "Add the onions, carrots, and garlic to the pot. Cook them for a few minutes until they begin to soften", "Return the beef and bacon to the pot. Add the mushrooms, red wine, beef broth, tomato paste, fresh thyme, and bay leaves. Stir everything together", "Bring the mixture to a simmer, then reduce the heat to low. Cover the pot and let it simmer gently for about 2-3 hours, or until the beef is tender and the flavors have melded together", "While the stew is simmering, you can prepare any side dishes you plan to serve with the Boeuf Bourguignon, such as mashed potatoes or crusty bread", "Once the stew is done, taste and adjust the seasoning with salt and pepper if needed. Remove the bay leaves and thyme sprigs before serving", "Serve the Boeuf Bourguignon hot, garnished with fresh parsley if desired"],
        time: 30,
        img: boeuf,
        isFavorite: false,
        isSaved: false
    }
];

export default recipes;