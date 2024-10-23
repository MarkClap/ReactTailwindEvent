
const callouts = [
  {
    name: 'Danza folklorica',
    description: '',
    imageSrc: 'https://i.pinimg.com/564x/be/54/b5/be54b5b8f905c7aec4845762e073672b.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'KaraDuo',
    description: '',
    imageSrc: 'https://img.freepik.com/vector-premium/vector-diseno-plantilla-logotipo-karaoke_316488-1627.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Futbol',
    description: '',
    imageSrc: 'https://img.freepik.com/vector-gratis/diseno-ilustracion-jugadores-futbol-plano_52683-66091.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Voley',
    description: '',
    imageSrc: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-voleibol_114360-25761.jpg',
    imageAlt: 'Wooden fence with a bowl of sunflower seeds, a small pot of soil, and a small pot of water.',
    href: '#',
  }
]

export default function App() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
          <h2 className="text-2xl font-bold text-gray-900">Eventos</h2>

          <div className="mt-4 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 m-1">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
