export interface Icon {
  name: string;
  style: string;
  size: string;
  id: string;
}

export interface IconWithCategory extends Icon {
  category: {
    name: string;
    number: number;
  };
}
