import React from 'react';
import { Link } from "react-router-dom";

const recipes = [
  {
    name: "Spaghetti Carbonara",
    image: "https://media.istockphoto.com/id/177413384/photo/pasta-with-carbonara.jpg?s=612x612&w=0&k=20&c=hhcHoS983ksQwXtVE_RYOA7RgjIxMxZxQiZ_T77l2wE=",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g pecorino cheese",
      "50g parmesan",
      "Freshly ground black pepper",
      "Salt",
      "2 plump garlic cloves, peeled and left whole",
      "50g unsalted butter",
      "A small bunch of fresh flat-leaf parsley, chopped"
    ],
    instructions: [
      "Put a large saucepan of water on to boil.",
      "Finely chop the pancetta, having first removed any rind.",
      "Beat the eggs in a medium bowl, season with a little freshly grated black pepper and set everything aside.",
      "Add 1 tsp salt to the boiling water, add the spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).",
      "Squash the garlic with the blade of a knife, just to bruise it.",
      "While the spaghetti is cooking, fry the pancetta with the garlic.",
      "Drop the butter into the pan, and when it’s melted, tip in the pancetta.",
      "Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp.",
      "Remove and discard the garlic.",
      "Keep the heat under the pancetta on low.",
      "When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta.",
      "Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.",
      "Take the pan of spaghetti and pancetta off the heat.",
      "Quickly pour in the eggs and cheese.",
      "Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn’t scramble, and everything is coated.",
      "Add extra pasta cooking water to keep it saucy (several tablespoons should do it).",
      "You don’t want it wet, just moist. Season with a little salt, if needed.",
      "Use a long-pronged fork to twist the pasta on to the serving plate or bowl.",
      "Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper.",
      "If the dish does get a little dry before serving, splash in some more hot pasta water and the glossy sauciness will be revived."
    ]
  },
  {
    name: "Chicken Curry",
    image: "https://t3.ftcdn.net/jpg/06/05/64/46/360_F_605644615_XckgeON6KEcmtm213wIrBJg3xUj8HMG8.jpg",
    ingredients: [
      "1 kg chicken, cut into pieces",
      "2 onions, finely chopped",
      "3 tomatoes, pureed",
      "1 tbsp ginger-garlic paste",
      "2 green chilies, slit",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1 tsp coriander powder",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh coriander leaves, chopped"
    ],
    instructions: [
      "Heat oil in a large pan over medium heat.",
      "Add the chopped onions and sauté until golden brown.",
      "Add the ginger-garlic paste and green chilies, and sauté for another 2 minutes.",
      "Add the pureed tomatoes and cook until the oil separates from the mixture.",
      "Add the turmeric powder, red chili powder, garam masala, coriander powder, and salt. Mix well.",
      "Add the chicken pieces and cook until they are no longer pink.",
      "Add enough water to cover the chicken, bring to a boil, then reduce the heat and let it simmer until the chicken is cooked through and the sauce has thickened.",
      "Garnish with fresh coriander leaves and serve hot with rice or naan."
    ]
  },
  {
    name: "Chocolate Chip Cookies",
    image: "https://media.istockphoto.com/id/187957173/photo/chocolate-chip-cookies-on-linen-napkin-wooden-table.jpg?s=2048x2048&w=is&k=20&c=n35CcgX1M2HUCH0VfSfZ-BqCQtTrswi3MuhPhTVWiJc=",
    ingredients: [
      "1 cup unsalted butter, softened",
      "1 cup white sugar",
      "1 cup packed brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "3 cups all-purpose flour",
      "1 tsp baking soda",
      "2 tsp hot water",
      "1/2 tsp salt",
      "2 cups semisweet chocolate chips",
      "1 cup chopped walnuts (optional)"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Cream together the butter, white sugar, and brown sugar until smooth.",
      "Beat in the eggs one at a time, then stir in the vanilla.",
      "Dissolve baking soda in hot water. Add to batter along with salt.",
      "Stir in flour, chocolate chips, and nuts.",
      "Drop by large spoonfuls onto ungreased pans.",
      "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."
    ]
  },
  {
    name: "Beef Stroganoff",
    image: "https://media.istockphoto.com/id/523456979/photo/homemade-hearty-beef-stroganoff.jpg?s=612x612&w=0&k=20&c=FsTHhQSdD6bNfuiP5u5wXWy6_zmOP4UPgXR7RImOXyU=",
    ingredients: [
      "1 lb beef sirloin, cut into thin strips",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 cup mushrooms, sliced",
      "1 cup beef broth",
      "1 cup sour cream",
      "2 tbsp flour",
      "2 tbsp butter",
      "Salt and pepper to taste",
      "Fresh parsley, chopped (for garnish)"
    ],
    instructions: [
      "In a large skillet, melt the butter over medium heat.",
      "Add the onions and garlic, and sauté until softened.",
      "Add the beef strips and cook until browned.",
      "Add the mushrooms and cook for another 5 minutes.",
      "Sprinkle the flour over the beef and mushroom mixture and stir well.",
      "Gradually add the beef broth, stirring constantly until the sauce thickens.",
      "Reduce the heat and stir in the sour cream. Cook until heated through, but do not boil.",
      "Season with salt and pepper to taste.",
      "Serve over egg noodles or rice, and garnish with fresh parsley."
    ]
  },
  {
    name: "Vegetable Stir Fry",
    image: "https://img.freepik.com/premium-photo/fresh-stir-fried-vegetables-gourmet-crockery-plate-generated-by-ai_24640-86483.jpg",
    ingredients: [
      "2 tbsp vegetable oil",
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "1 broccoli head, cut into florets",
      "2 carrots, sliced",
      "1 zucchini, sliced",
      "2 cloves garlic, minced",
      "1 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp cornstarch",
      "1/4 cup water",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat the vegetable oil in a large skillet or wok over medium-high heat.",
      "Add the garlic and sauté for 1 minute.",
      "Add the bell peppers, broccoli, carrots, and zucchini. Stir-fry for 5-7 minutes until the vegetables are tender-crisp.",
      "In a small bowl, mix the soy sauce, oyster sauce, cornstarch, and water.",
      "Pour the sauce over the vegetables and stir well to coat.",
      "Cook for another 2-3 minutes until the sauce has thickened.",
      "Season with salt and pepper to taste.",
      "Serve hot over steamed rice or noodles."
    ]
  }
];

const Recipe = ({ recipe }) => {
  return (
    <div className="bg-white text-gray-900 p-8 mb-8 shadow-lg rounded-lg">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} className="w-64 h-64 object-cover mb-4 mx-auto rounded-lg" />
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};


const Recipes = () => {
  return (
    <div className="bg-gray-100 p-8">
      <header className="border-b mb-8">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-red-600 text-3xl font-bold">Global Bites Famous Recipes</div>
          <div className="flex space-x-4">
            <Link to="/login" className="text-gray-700 font-bold">Sign In</Link>
          </div>
        </div>
        <nav className="border-t">
          <div className="container mx-auto flex justify-between items-center py-2">
            <div className="flex space-x-4">
            <div className="relative group">
                <Link to="/" className="text-gray-700 underline">Home</Link>
              </div>
              <div className="relative group">
                <Link to="/Recipes" className="text-gray-700 underline">Recipes</Link>
              </div>
              <div className="relative group">
                <Link to="/Techniques" className="text-gray-700 underline">Techniques <i className="fas fa-chevron-down"></i></Link>
              </div>
            </div>
            <div className="relative">
              <input className="border rounded-full px-4 py-1" type="text" placeholder='Search for "pasta"' />
            </div>
          </div>
        </nav>
      </header>
     
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;