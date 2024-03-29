type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface PageInfo extends Base {
  achievements: Block[];
  description: string;
  image: Image;
  name: string;
  pageDescription: string;
  pageTitle: string;
  socials: Social[];
}

interface Post extends Base {
  author: Author;
  body: Block[];
  category: Category;
  location: Location
  mainImage: Image;
  slug: Slug;
  title: string;
  publishedAt: string;
  description: string;
  comments: Comment[];
  headings: Headings[];
}

interface Author extends Base {
  name: string;
  slug: Slug;
  email: string;
}

interface Category extends Base {
  title: string;
  slug: Slug;
  description: string;
}

interface Social extends Base {
  title: string;
  slug: Slug;
  url: string;
  link: boolean;
  username: string;
}

interface Incident extends Base {
  title: string;
  date: string;
  description: string;
  image?: Image;
}

interface StatusImage extends Base {
  image: Image;
}

interface Location extends Base {
  city: string;
  country: string;
}

interface Comment {
  username: string;
  text: string;
  highlighted: boolean;
  createdAt: string;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Heading {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "h1" | "h2" | "h3" | "h4";
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

interface Span {
  _key: string;
  _type: "span";
  marks: any[];
  text: string;
}
