interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  createdAt: number;
  description: string;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      createdAt: Date.now(),
      description: 'Pending: Nostrud proident dolore eu reprehenderit exercitation est.',
      status: 'pending',
    },
    {
      createdAt: Date.now() - 1000000,
      description: 'In-progress: Consequat irure do consectetur nulla consequat laboris esse.',
      status: 'in-progress',
    },
    {
      createdAt: Date.now() - 100000,
      description:
        'Finished: Cillum fugiat sunt Lorem non commodo ad enim proident laboris amet dolore.',
      status: 'finished',
    },
  ],
};
