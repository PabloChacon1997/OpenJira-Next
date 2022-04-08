

interface SeedData {
  entries: SeedEntry[],
}


interface SeedEntry {
  description: string,
  status: string,
  createAt: number,
}



export const seedData: SeedData = {
  entries: [
    {
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
      status: 'pending',
      createAt: Date.now(),
    },
    {
      description: 'In-progres Lorem ipsum, dolor sit amet consectetur adipisicing elit',
      status: 'in-progress',
      createAt: Date.now() - 100000,
    },
    {
      description: 'finished - Lorem ipsum, dolor sit amet consectetur adipisicing elit',
      status: 'finished',
      createAt: Date.now() - 1000,
    },
  ]
}