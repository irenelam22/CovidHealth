export interface Exercise {
  id: number,
  description: string,
  name: string,
  language: number,
  // muscles: Muscle[],
  status: number,
  // muscles_secondary: Muscle[],
  // equipment: Equipment[],
  category: number,
  image: string,
}

export interface Image {
  exercise: number,
  is_main: boolean,
  image: string,
}

interface Muscle {
  name: string,
  penguin: number,
}

interface Equipment {
  name: string,
  penguin: number,
}
