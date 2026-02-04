import pizzaHawaiian from "../assets/pizza-hawaiian.png";
import pizzaPepperoni from "../assets/pizza-pepperoni.png";
import pizzaSpinach from "../assets/pizza-spinach.png";
import pizzaPaneer from "../assets/pizza-paneer.png";
import pizzaMargherita from "../assets/pizza-margherita.png";
import pizzaVeggie from "../assets/pizza-veggie.png";
import pizzaBbq from "../assets/pizza-bbq.png";

export interface Pizza {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

export const pizzas: Pizza[] = [
  {
    id: "pineapple",
    name: "PINEAPPLE",
    title: "Hawaiian Pineapple Pizza",
    description:
      "Sweet pineapple chunks paired with savory ham, melted cheese, and a rich tomato base. A tropical twist that balances sweetness and flavor in every bite.",
    image: pizzaHawaiian,
  },
  {
    id: "pepperoni",
    name: "PEPPERONI",
    title: "Classic Pepperoni Pizza",
    description:
      "A timeless favorite with crispy pepperoni, mozzarella, and a rich tomato base. Perfectly baked with a hint of spice and irresistible flavor in every slice.",
    image: pizzaPepperoni,
  },
  {
    id: "spinach",
    name: "SPINACH",
    title: "Savory Spinach Pizza",
    description:
      "Fresh spinach layered over a rich tomato base, topped with creamy mozzarella and herbs for a wholesome, earthy flavor in every bite.",
    image: pizzaSpinach,
  },
  {
    id: "paneer",
    name: "PANEER",
    title: "Paneer Tikka Pizza",
    description:
      "Smoky marinated paneer cubes baked with onions, peppers, and melted cheese on a spiced tomato base. A bold fusion of Indian flavors and classic goodness.",
    image: pizzaPaneer,
  },
  {
    id: "margherita",
    name: "MARGHERITA",
    title: "Classic Margherita Pizza",
    description:
      "Fresh mozzarella, vibrant tomato sauce, and aromatic basil on a perfectly baked crust. A timeless classic that captures the essence of Italian pizza.",
    image: pizzaMargherita,
  },
  {
    id: "veggie",
    name: "VEGGIE",
    title: "Veggie Delight Pizza",
    description:
      "A colorful medley of fresh vegetables layered over a rich tomato base, topped with melted cheese and herbs. A wholesome, flavorful bite in every slice.",
    image: pizzaVeggie,
  },
  {
    id: "bbq-chicken",
    name: "BBQ CHICKEN",
    title: "Smoky BBQ Chicken Pizza",
    description:
      "Tender BBQ chicken pieces with caramelized onions, melted cheese, and smoky sauce on a perfectly baked crust. A bold, savory pizza with a rich, flavorful bite.",
    image: pizzaBbq,
  },
];
