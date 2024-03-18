interface Software {
  _id: string;
  name: string;
  category: Category[];
  imageUrl: string;
}

type Category = "software" | "web" | "app" | "game";
