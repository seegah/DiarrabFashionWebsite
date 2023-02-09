import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Seegah",
      email: "pouillesiga@gmail.com",
      password: bcrypt.hashSync("siga1234"),
      isAdmin: true,
    },
    {
      name: "Mima",
      email: "pouillesiga@gmail.com",
      password: bcrypt.hashSync("siga1234"),
      isAdmin: false,
    },
  ],
  products: [
    {
      category: "Kimono",
      slug: "ayce",
      name: "Ayce Set",
      image: "/images/bestSeller/image1.jpg",
      price: 25000,
      rating: 3.5,
      numReviews: "7",
      countInStock: 20,
      description: "Kimono plus robe intérieure",
    },
    {
      category: "Robe",
      slug: "ndella",
      name: "Ndella",
      image: "/images/bestSeller/image7.png",
      price: 20000,
      rating: 3,
      numReviews: "4",
      countInStock: 10,
      description: "Robe chique",
    },
    {
      category: "Boubou",
      slug: "clau",
      name: "clau Set",
      image: "/images/banner1.jpeg",
      price: 25000,
      rating: 4.5,
      numReviews: "17",
      countInStock: 20,
      description: "Boubou avec chemise",
    },
    {
      category: "Emsemble",
      slug: "moona",
      name: "Moona Set",
      image: "/images/bestSeller/image17.jpg",
      price: 20000,
      rating: 5,
      numReviews: "90",
      countInStock: 20,
      description: "Ensemble pour les lady boss",
    },
  ],
};

export default data;
