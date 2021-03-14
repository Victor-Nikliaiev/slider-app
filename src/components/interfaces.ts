export interface PersonInterface {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

export interface CardInterface extends PersonInterface {
  position: string;
}
