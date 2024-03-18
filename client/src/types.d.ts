interface Software {
  _id: string;
  name: string;
  category: "web" | "app" | "game";
  imageUrl: string;
}

type Category = "software" | "web" | "app" | "game";
