export type TData = {
  details: {
    why: string
    when: string
  }
  pests: {
    name: string
    data: {
      name: string
      description: string
    }[]
  }[]
  weeds: {
    name: string
    data: {
      name: string
      description: string
    }[]
  }[]
}

export const datahama = {
  details: {
    why: "Strawberries are a sweet, juicy fruit with a bright red color and seeds on the outside. They're packed with vitamins and antioxidants.",
    when: 'Strawberries prefer full sun and well-drained, fertile soil with a pH between 5.5 and 6.8.',
  },
  pests: [
    {
      name: 'Tikus',
      data: [
        {
          name: 'Tikus Pesst Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
        {
          name: 'Strawberry Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
      ],
    },
    {
      name: 'Dani',
      data: [
        {
          name: 'Dani Pest Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
        {
          name: 'Strawberry Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
      ],
    },
    {
      name: 'Hama',
      data: [
        {
          name: 'Hama Pest Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
        {
          name: 'Strawberry Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
      ],
    },
  ],
  weeds: [
    {
      name: 'Weeds',
      data: [
        {
          name: 'Weeds 1 Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
        {
          name: 'Strawberry Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
      ],
    },
    {
      name: 'Weeds 2',
      data: [
        {
          name: 'Weeds 2 Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
        {
          name: 'Strawberry Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
      ],
    },
    {
      name: 'Hama',
      data: [
        {
          name: 'Strawberry Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
        {
          name: 'Strawberry Bud Weevil',
          description:
            'Small, reddish-brown beetle that cuts off flower buds, causing them to hang by a thread or fall off.',
        },
      ],
    },
  ],
}
