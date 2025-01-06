import React, { useState, useRef } from "react";
import DrinkCard from "./DrinkCard";
import DrinkTag from "./DrinkTag";
import { motion, useInView } from "framer-motion";

const drinksData = [
  {
    id: 1,
    title: "Mojito",
    description: "Uma bebida refrescante com rum, hortelã, açúcar, limão e água com gás.",
    image: "/images/drinks/1.png",
    tag: ["Todos", "Clássicos"],
    recipeUrl: "https://www.example.com/mojito",
  },
  {
    id: 2,
    title: "Caipirinha",
    description: "Drink brasileiro feito com cachaça, açúcar e limão.",
    image: "/images/drinks/2.png",
    tag: ["Todos", "Clássicos"],
    recipeUrl: "https://www.example.com/caipirinha",
  },
  {
    id: 3,
    title: "Margarita",
    description: "Tequila, limão e licor de laranja, uma combinação deliciosa.",
    image: "/images/drinks/3.png",
    tag: ["Todos", "Clássicos"],
    recipeUrl: "https://www.example.com/margarita",
  },
  {
    id: 4,
    title: "Pina Colada",
    description: "Rum, creme de coco e abacaxi, criando uma bebida tropical.",
    image: "/images/drinks/4.png",
    tag: ["Todos", "Clássicos"],
    recipeUrl: "https://www.example.com/pinacolada",
  },
  {
    id: 5,
    title: "Gin Tônica",
    description: "Gin misturado com água tônica, uma opção refrescante e sofisticada.",
    image: "/images/drinks/5.png",
    tag: ["Todos", "Clássicos"],
    recipeUrl: "https://www.example.com/gintonica",
  },
  {
    id: 6,
    title: "Whisky Sour",
    description: "Whisky com limão, açúcar e clara de ovo, criando uma bebida equilibrada.",
    image: "/images/drinks/6.png",
    tag: ["Todos", "Clássicos"],
    recipeUrl: "https://www.example.com/whiskysour",
  },
  {
    id: 7,
    title: "Velvet Key",
    description: "Um coquetel sofisticado e suave, com um toque de frutas vermelhas e um leve sabor de baunilha, perfeito para momentos elegantes.",
    image: "/images/drinks/7.png",
    tag: ["Todos", "Da Casa"],
    recipeUrl: "https://www.example.com/whiskysour",
  },
  {
    id: 7,
    title: "Velvet Secret",
    description: "Um coquetel sofisticado feito especialmente para o cliente, se surpreenda com um sabor diferente preparado sobre medida.",
    image: "/images/drinks/7.png",
    tag: ["Todos", "Da Casa"],
    recipeUrl: "https://www.example.com/whiskysour",
  },{
    id: 8,
    title: "Bubble Bliss",
    description: "Um coquetel espumante com bolinhas de licor, trazendo uma explosão de sabores refrescantes e doces em cada gole.",
    image: "/images/drinks/bubblebliss.png",
    tag: ["Todos", "Bubbles"],
    recipeUrl: "https://www.example.com/bubblebliss",
  },
  {
    id: 9,
    title: "Licor Pop",
    description: "Um drink leve e efervescente com bolinhas de licor, uma mistura irresistível de frutas tropicais e um toque de frescor.",
    image: "/images/drinks/licorpop.png",
    tag: ["Todos", "Bubbles"],
    recipeUrl: "https://www.example.com/licorpop",
  },
  {
    id: 10,
    title: "Plum Sparkle",
    description: "Licor de ameixa misturado com bolinhas de licor, trazendo um equilíbrio perfeito entre o doce e o ácido, com um toque borbulhante.",
    image: "/images/drinks/plumsparkle.png",
    tag: ["Todos", "Bubbles"],
    recipeUrl: "https://www.example.com/plumsparkle",
  },
  {
    id: 11,
    title: "Café Fizz",
    description: "Uma mistura de licor de café com bolinhas de licor, criando um coquetel encorpado e com um leve toque de efervescência.",
    image: "/images/drinks/cafefizz.png",
    tag: ["Todos", "Bubbles"],
    recipeUrl: "https://www.example.com/cafefizz",
  },
  {
    id: 12,
    title: "Cherry Burst",
    description: "Um drink único com licor de cereja e bolinhas efervescentes, oferecendo uma combinação doce e intensamente saborosa.",
    image: "/images/drinks/cherryburst.png",
    tag: ["Todos", "Bubbles"],
    recipeUrl: "https://www.example.com/cherryburst",
  },
  {
    id: 13,
    title: "Strawberry Pop",
    description: "Uma deliciosa mistura de licor de morango e bolinhas efervescentes, criando uma experiência doce e refrescante.",
    image: "/images/drinks/strawberrypop.png",
    tag: ["Todos", "Bubbles"],
    recipeUrl: "https://www.example.com/strawberrypop",
  }
  
];

const aperitivosData = [
  {
    id: 1,
    title: "Coxinha",
    description: "Deliciosa coxinha de frango empanada.",
    image: "/images/aperitivos/1.png",
    tag: ["Todos", "Frito"],
    recipeUrl: "https://www.example.com/coxinha",
  },
  {
    id: 2,
    title: "Pão de Queijo",
    description: "Pão de queijo fresquinho, ideal para qualquer hora.",
    image: "/images/aperitivos/2.png",
    tag: ["Todos", "Assado"],
    recipeUrl: "https://www.example.com/paodequeijo",
  },
  {
    id: 3,
    title: "Pastel",
    description: "Salgado frito recheado com carne ou queijo.",
    image: "/images/aperitivos/3.png",
    tag: ["Todos", "Frito"],
    recipeUrl: "https://www.example.com/pastel",
  },
  {
    id: 4,
    title: "Bruschetta",
    description: "Pão torrado com tomate, manjericão e azeite.",
    image: "/images/aperitivos/4.png",
    tag: ["Todos", "Assado"],
    recipeUrl: "https://www.example.com/bruschetta",
  },
];

const DrinksSection = () => {
  const [category, setCategory] = useState("Drinks");
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setTag("Todos"); // Sempre volta para "Todos" ao trocar de categoria
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredItems =
    category === "Drinks"
      ? drinksData.filter((drink) => drink.tag.includes(tag))
      : aperitivosData.filter((aperitivo) => aperitivo.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Tags que serão mostradas com base na categoria
  const tags =
    category === "Drinks"
      ? ["Todos", "Clássicos", "Da Casa", "Bubbles"]
      : ["Todos", "Frito", "Assado"];

  return (
    <section id="cardapio" className="pt-32">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => handleCategoryChange("Drinks")}
          className={`text-xl ${category === "Drinks" ? "text-white" : "text-[#ADB7BE]"}`}
        >
          Drinks
        </button>
        <button
          onClick={() => handleCategoryChange("Aperitivos")}
          className={`text-xl ${category === "Aperitivos" ? "text-white" : "text-[#ADB7BE]"}`}
        >
          Aperitivos
        </button>
      </div>

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {category === "Drinks" ? "Nossos Drinks" : "Nossos Aperitivos"}
      </h2>

      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        {tags.map((tagName) => (
          <DrinkTag
            key={tagName}
            onClick={handleTagChange}
            name={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>

      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredItems.map((item, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <DrinkCard
              key={item.id}
              title={item.title}
              description={item.description}
              imgUrl={item.image}
              recipeUrl={item.recipeUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default DrinksSection;
