export interface IAnimal {
  user_id: string,
    category: string,
    name: string,
    breed: string,
    sex: string,
    age?: number,
    color: string,
    weight?: number,
    status_animal?: string,
    loss_date?: Date,
    found_date?: Date,
    adopt_date?: Date,
    status_report?: string,
    adopted_user?: {
      name: string,
      address: {
        street: string,
          city: string,
          zipCode: string,
          state: string,
          location: [number]
      },
      phoneNumber: string,
        email: string,
        password: string
    },
  images?: [
    {
      file_path: string,
    }
  ]
}
