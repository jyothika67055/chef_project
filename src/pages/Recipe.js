import React, { useState } from 'react';

const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    image: "https://media.istockphoto.com/id/2159811156/photo/traditional-italian-pasta-carbonara-spaghetti-with-bacon-egg-and-parmesan-cheese-top-view.jpg?s=612x612&w=0&k=20&c=Uu8g9ksq9G5b2jzBBQtwH_oHWq_KkK9-m1u0_0ETD_c=",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's simple yet delicious.",
    details: "To prepare Spaghetti Carbonara, cook spaghetti and mix it with a creamy sauce made from eggs, cheese, pancetta, and freshly ground black pepper. Serve immediately for the best taste. Pairs well with garlic bread and a fresh garden salad.",
    steps: [
      "Bring a large pot of salted water to a boil and cook the spaghetti according to the package instructions until al dente.",
      "In a large skillet, cook the pancetta over medium heat until crispy. Remove from heat and set aside.",
      "In a medium bowl, whisk together the eggs, parmesan cheese, and a pinch of salt and pepper.",
      "Add the cooked spaghetti to the bowl with the egg mixture and toss to combine.",
      "Add the cooked pancetta to the bowl and toss to combine.",
      "Season with salt and black pepper to taste.",
      "Serve immediately, garnished with additional parmesan cheese and parsley if desired."
    ]
  },
  {
    id: 2,
    name: "Chicken Curry",
    image: "https://media.istockphoto.com/id/1280147779/photo/chicken-curry-iftari.jpg?s=2048x2048&w=is&k=20&c=9XFo5d8spOgEEgjyEpGRuOJ3uoW5ll0Wsz17o5X7_Cc=",
    description: "A flavorful and spicy chicken curry made with a blend of spices, tomatoes, and coconut milk.",
    details: "Marinate chicken pieces with spices, then cook them with sautéed onions, tomatoes, and coconut milk. Simmer until the chicken is tender. Serve with rice or naan. Garnish with fresh coriander and a squeeze of lemon for extra flavor.",
    steps: [
      "In a large bowl, whisk together the yogurt, lemon juice, garam masala, cumin, coriander, cayenne pepper, and salt.",
      "Add the chicken to the bowl and mix to coat. Cover and refrigerate for at least 30 minutes or up to 2 hours.",
      "Heat oil in a large skillet over medium-high heat. Remove the chicken from the marinade, letting any excess liquid drip off.",
      "Cook the chicken until browned on all sides and cooked through, about 6-8 minutes. Transfer to a plate and set aside.",
      "In the same skillet, cook the onions until they are lightly browned, about 5 minutes.",
      "Add the garlic, ginger, and spices to the skillet and cook for 1 minute, stirring constantly.",
      "Stir in the tomatoes and coconut milk. Bring to a simmer and cook until the sauce has thickened, about 10-15 minutes.",
      "Add the chicken back to the skillet and simmer until heated through. Season with salt and pepper to taste.",
      "Serve the chicken curry over rice or with naan, garnished with fresh coriander and a squeeze of lemon."
    ]
  },
  {
    id: 3,
    name: "Beef Stroganoff",
    image: "https://media.istockphoto.com/id/591831920/photo/stroganoff-with-rice.jpg?s=2048x2048&w=is&k=20&c=kp98Yfi5_cOcc-gmwYuxUvb82D9edg0vrkrBMixwSW4=",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
    details: "Sauté beef strips and onions, then add sour cream and beef broth to create a creamy sauce. Serve over egg noodles or rice. Add mushrooms for an earthy flavor and sprinkle with parsley before serving.",
    steps: [
      "Cook the egg noodles according to the package instructions and set aside.",
      "In a large skillet, cook the beef over medium-high heat until browned, about 3-4 minutes. Remove from heat and set aside.",
      "In the same skillet, cook the onions and mushrooms until they are softened, about 5 minutes.",
      "Add the garlic and cook for 1 minute, stirring constantly.",
      "Stir in the beef broth, Dijon mustard, and Worcestershire sauce. Bring to a simmer and cook until the sauce has thickened, about 2-3 minutes.",
      "Stir in the sour cream and cook until heated through. Season with salt and pepper to taste.",
      "Add the cooked beef back to the skillet and simmer until heated through.",
      "Serve the beef and sauce over the cooked egg noodles, garnished with parsley and chives if desired."
    ]
  },
  {
    id: 4,
    name: "Vegetable Stir Fry",
    image: "https://media.istockphoto.com/id/157504805/photo/chicken-and-vegetable-stir-fry.jpg?s=612x612&w=0&k=20&c=knzM226dcGNDjJch24KCzwDMgPAb2kMRK1puKaBjGOs=",
    description: "A quick and healthy stir fry made with a variety of fresh vegetables and a savory sauce.",
    details: "Use a mix of bell peppers, broccoli, carrots, and snow peas. Stir fry in sesame oil and garlic, then add soy sauce, ginger, and a splash of rice vinegar. Serve over steamed rice or noodles. Top with sesame seeds for a finishing touch.",
    steps: [
      "Heat oil in a large skillet or wok over medium-high heat.",
      "Add the garlic and ginger to the skillet and cook for 1 minute, stirring constantly.",
      "Add the broccoli, carrots, and bell peppers to the skillet. Cook until they are tender-crisp, about 3-4 minutes.",
      "Add the snow peas to the skillet and cook until they are tender, about 2 minutes.",
      "In a small bowl, whisk together the soy sauce, rice vinegar, and honey.",
      "Pour the sauce over the vegetables and stir to combine. Cook for an additional 1-2 minutes, until the sauce has thickened.",
      "Serve the vegetable stir fry over steamed rice or noodles, garnished with sesame seeds and green onions if desired."
    ]
  },
  {
    id: 5,
    name: "Tacos",
    image: "https://media.istockphoto.com/id/614313140/photo/soft-beef-tacos-with-fries.jpg?s=612x612&w=0&k=20&c=KxBKdcWFKWCQwLWiil-Rgvlpl9l8SZXwkvjnCiWcia8=",
    description: "A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.",
    details: "Prepare fillings such as seasoned beef, chicken, or grilled vegetables. Add toppings like lettuce, cheese, salsa, and sour cream. Squeeze fresh lime juice over the top and serve with guacamole and tortilla chips.",
    steps: [
      "In a large skillet, cook the ground beef over medium-high heat until browned, breaking it up into small pieces as it cooks.",
      "Add the taco seasoning to the skillet and cook for 1 minute, stirring constantly.",
      "Add the water to the skillet and bring to a simmer. Cook until the sauce has thickened, about 2-3 minutes.",
      "Warm the tortillas by wrapping them in a damp paper towel and microwaving for 20-30 seconds.",
      "Assemble the tacos by spooning the beef mixture onto a tortilla and topping with desired toppings such as lettuce, cheese, salsa, and sour cream.",
      "Serve the tacos with guacamole and tortilla chips on the side."
    ]
  },
  {
    id: 6,
    name: "Sushi",
    image: "https://media.istockphoto.com/id/592689444/photo/eating-healthy-kale-sushi.jpg?s=612x612&w=0&k=20&c=pGohnxnHnU76lnYmlhXdKcAGsQHJdLyaBv0qSBf-dJY=",
    description: "A Japanese dish consisting of vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits.",
    details: "Roll sushi rice with nori sheets and fillings like salmon, avocado, and cucumber. Serve with soy sauce, pickled ginger, and wasabi. For variety, try making nigiri or sashimi.",
    steps: [
      "Prepare the sushi rice according to the package instructions.",
      "Cut the nori sheets into desired sizes for rolling.",
      "Prepare the fillings such as salmon, avocado, and cucumber.",
      "Lay a nori sheet flat on a sushi mat or a piece of parchment paper.",
      "Spread a thin layer of sushi rice onto the nori sheet, leaving a small border at the top.",
      "Place the fillings in the middle of the rice.",
      "Roll the sushi using the mat or parchment paper, applying gentle pressure to form a compact roll.",
      "Slice the roll into individual pieces using a sharp knife.",
      "Serve the sushi with soy sauce, pickled ginger, and wasabi."
    ]
  },
  {
    id: 7,
    name: "Pancakes",
    image: "https://media.istockphoto.com/id/1148638351/photo/sunday-breakfast.jpg?s=612x612&w=0&k=20&c=QXiLI-lY6wSKFxIZ1VpS3OopD-842NzOlSsCWJ2pzYA=",
    description: "A flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk, and butter.",
    details: "Mix flour, eggs, milk, and butter to form a batter. Cook on a greased griddle until golden brown. Serve with maple syrup, fresh berries, and whipped cream for a delightful breakfast treat.",
    steps: [
      "In a large bowl, whisk together the flour, sugar, baking powder, and salt.",
      "In a separate bowl, whisk together the eggs, milk, and melted butter.",
      "Add the wet ingredients to the dry ingredients and stir until just combined. The batter should still be slightly lumpy.",
      "Heat a non-stick skillet or griddle over medium heat.",
      "Drop the batter by 1/4 cupfuls onto the skillet or griddle.",
      "Cook the pancakes for 2-3 minutes, until bubbles appear on the surface and the edges start to dry.",
      "Flip the pancakes and cook for an additional 1-2 minutes, until golden brown.",
      "Serve the pancakes hot with desired toppings such as maple syrup, fresh berries, and whipped cream."
    ]
  },
  {
    id: 8,
    name: "Caesar Salad",
    image: "https://media.istockphoto.com/id/510584216/photo/fresh-healthy-caesar-salad.jpg?s=612x612&w=0&k=20&c=bYmT4QaZalCjR-XB7D-Vf_NimXkO6HL1EzL5vO00cko=",
    description: "A green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper.",
    details: "Toss romaine lettuce with Caesar dressing, croutons, and grated Parmesan cheese. Add grilled chicken or shrimp for a heartier meal. Garnish with additional Parmesan and freshly cracked black pepper.",
    steps: [
      "In a blender or food processor, combine the garlic, lemon juice, egg, Worcestershire sauce, anchovies, Dijon mustard, and a pinch of salt and pepper.",
      "Blend the mixture until smooth, then slowly pour in the olive oil while continuing to blend.",
      "Taste and adjust the dressing as needed.",
      "In a large bowl, combine the romaine lettuce, croutons, and grated Parmesan cheese.",
      "Drizzle the Caesar dressing over the salad and toss to combine.",
      "Top the salad with grilled chicken or shrimp if desired.",
      "Garnish with additional Parmesan cheese and freshly cracked black pepper."
    ]
  },
  {
    id: 9,
    name: "Chocolate Cake",
    image: "https://media.istockphoto.com/id/846782600/photo/chocolate-cake-dessert-sweet-food.jpg?s=2048x2048&w=is&k=20&c=ju_FdLq9OHKxDPQ7CW20EUfTHsgcwaWy2BsQrHQVs4M=",
    description: "A rich, moist chocolate cake made with cocoa powder and topped with a creamy chocolate frosting.",
    details: "Bake chocolate cake layers and frost with rich chocolate ganache or buttercream. Decorate with chocolate shavings, berries, or edible gold leaf for an elegant finish. Serve with a scoop of vanilla ice cream.",
    steps: [
      "Preheat the oven to 350°F (180°C). Grease two 9-inch round cake pans and line the bottoms with parchment paper.",
      "In a medium bowl, whisk together the flour, sugar, cocoa powder, and salt.",
      "In a large bowl, whisk together the eggs, milk, and vegetable oil.",
      "Add the dry ingredients to the wet ingredients and whisk until just combined.",
      "Divide the batter evenly between the prepared pans and smooth the tops.",
      "Bake the cakes for 30-35 minutes, until a toothpick inserted into the center comes out clean.",
      "Allow the cakes to cool in the pans for 10 minutes, then transfer to a wire rack to cool completely.",
      "Once the cakes are cool, frost with rich chocolate ganache or buttercream and decorate as desired."
    ]
  },
  {
    id: 10,
    name: "Grilled Salmon",
    image: "https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg",
    description: "Perfectly grilled salmon fillets with a hint of lemon and herbs.",
    details: "Season salmon with olive oil, lemon juice, dill, and garlic. Grill until flaky and tender. Serve with asparagus, roasted potatoes, and a lemon butter sauce.",
    steps: [
      "Preheat the grill to medium-high heat.",
      "In a small bowl, whisk together the olive oil, lemon juice, dill, garlic, salt, and pepper.",
      "Place the salmon fillets in a shallow dish and brush the lemon mixture evenly over both sides of the fish.",
      "Place the salmon on the grill and cook for 4-6 minutes per side, until cooked through.",
      "Transfer the salmon to a plate and serve with asparagus, roasted potatoes, and a lemon butter sauce."
    ]
  },
  {
    id: 11,
    name: "Lasagna",
    image: "https://thestayathomechef.com/wp-content/uploads/2024/03/Most-Amazing-Lasagna_Square-2.jpg",
    description: "Layers of pasta, meat sauce, and cheese baked to perfection.",
    details: "Layer cooked lasagna noodles with ricotta cheese, mozzarella, Parmesan, and rich tomato meat sauce. Bake until golden and bubbly. Let it rest before serving with garlic bread.",
    steps: [
      "Preheat the oven to 375°F (190°C).",
      "Cook the lasagna noodles according to the package instructions. Drain and set aside.",
      "In a large skillet, cook the ground beef over medium-high heat until browned, breaking it up into small pieces as it cooks.",
      "Add the tomato sauce, dried basil, and dried oregano to the skillet. Stir to combine.",
      "In a large bowl, combine the ricotta cheese, mozzarella cheese, and Parmesan cheese. Mix well to combine.",
      "Spread a layer of the meat sauce in the bottom of a 9x13 inch baking dish. Arrange 4 lasagna noodles on top of the sauce.",
      "Spread half of the ricotta cheese mixture over the noodles. Top with half of the shredded mozzarella cheese.",
      "Repeat the layers, starting with the meat sauce, noodles, ricotta cheese mixture, and mozzarella cheese.",
      "Top the final layer of mozzarella cheese with the grated Parmesan cheese.",
      "Cover the baking dish with aluminum foil and bake for 30 minutes.",
      "Remove the foil and continue baking for an additional 10-15 minutes, until the cheese is melted and bubbly.",
      "Let the lasagna rest for 10-15 minutes before serving. Serve with garlic bread."
    ]
  }
];

function Recipe() {
  const [openRecipeId, setOpenRecipeId] = useState(null);

  const toggleRecipeDetails = (id) => {
    setOpenRecipeId(openRecipeId === id ? null : id);
  };

  return (
    <main className="container mx-auto mt-6 px-6">
      <div>
        <h2 className="text-2xl font-bold text-center mb-6"  >Recipes You Needed Most!</h2>
          <div className="bg-white p-6 rounded shadow">
            {recipes.map((recipe) => (
              <div className="border rounded-lg p-4 mb-6 shadow" key={recipe.id}>
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleRecipeDetails(recipe.id)}>
                  <div className="flex items-center">
                    <img src={recipe.image} alt={`Recipe ${recipe.name}`} className="h-32 w-32 rounded-full" />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">{recipe.name}</h3>
                      <p>{recipe.description}</p>
                    </div>
                  </div>
                  <button className="text-blue-500 underline">{openRecipeId === recipe.id ? "Hide Details" : "View Details"}</button>
                </div>
                {openRecipeId === recipe.id && (
                  <div className="mt-4 border-t pt-4">
                    <h4 className="text-lg font-bold mb-2">Details</h4>
                    <p className="mb-4">{recipe.details}</p>
                    <h4 className="text-lg font-bold mb-2">Steps</h4>
                    <ol>
                      {recipe.steps.map((step, index) => (
                        <li key={index} className="mb-2">{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    </main>
  );
}

export default Recipe;
