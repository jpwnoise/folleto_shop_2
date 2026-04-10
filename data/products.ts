export interface Product {
  id: number;
  name: string;
  nameEs: string;
  pricePerKg: number;
  category: 'camaron' | 'pescado' | 'especial';
  emoji: string;
  description: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Camaron Grande con Cabeza',
    nameEs: 'Camarón Grande c/cabeza',
    pricePerKg: 285,
    category: 'camaron',
    emoji: '🦐',
    description: 'Camarón grande fresco con cabeza, ideal para cocteles y ceviches.',
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Camaron Grande sin Cabeza',
    nameEs: 'Camarón Grande s/cabeza',
    pricePerKg: 320,
    category: 'camaron',
    emoji: '🦐',
    description: 'Camarón grande limpio sin cabeza, listo para cocinar.',
  },
  {
    id: 3,
    name: 'Camaron Grande Limpio',
    nameEs: 'Camarón Grande limpio',
    pricePerKg: 380,
    category: 'camaron',
    emoji: '🦐',
    description: 'Camarón grande completamente limpio y desvenado.',
    badge: 'Premium',
  },
  {
    id: 4,
    name: 'Camaron Mediano sin Cabeza',
    nameEs: 'Camarón Mediano s/cabeza',
    pricePerKg: 260,
    category: 'camaron',
    emoji: '🦐',
    description: 'Camarón mediano sin cabeza, perfecto para guisados.',
  },
  {
    id: 5,
    name: 'Camaron Seco Mediano',
    nameEs: 'Camarón Seco Mediano',
    pricePerKg: 420,
    category: 'camaron',
    emoji: '🦐',
    description: 'Camarón mediano deshidratado, ideal para caldos y sopas.',
    badge: 'Especial',
  },
  {
    id: 6,
    name: 'Filete de Tilapia',
    nameEs: 'Filete de Tilapia',
    pricePerKg: 180,
    category: 'pescado',
    emoji: '🐟',
    description: 'Filete de tilapia fresco, suave y versátil.',
  },
  {
    id: 7,
    name: 'Filete de Cazón',
    nameEs: 'Filete de Cazón',
    pricePerKg: 165,
    category: 'pescado',
    emoji: '🦈',
    description: 'Filete de cazón fresco, carne firme y deliciosa.',
  },
  {
    id: 8,
    name: 'Medallón de Atún',
    nameEs: 'Medallón de Atún',
    pricePerKg: 350,
    category: 'especial',
    emoji: '🐟',
    description: 'Medallón de atún premium, perfecto para sellar.',
    badge: 'Premium',
  },
  {
    id: 9,
    name: 'Marlin Ahumado',
    nameEs: 'Marlín Ahumado',
    pricePerKg: 290,
    category: 'especial',
    emoji: '🐠',
    description: 'Marlín ahumado artesanalmente, sabor intenso.',
    badge: 'Artesanal',
  },
  {
    id: 10,
    name: 'Surimi',
    nameEs: 'Surimi',
    pricePerKg: 140,
    category: 'pescado',
    emoji: '🦀',
    description: 'Surimi de pescado, ideal para ensaladas y rollos.',
  },
  {
    id: 11,
    name: 'Salmón',
    nameEs: 'Salmón',
    pricePerKg: 380,
    category: 'especial',
    emoji: '🐟',
    description: 'Salmón fresco de alta calidad, rico en omega 3.',
    badge: 'Popular',
  },
  {
    id: 12,
    name: 'Pulpo Crudo',
    nameEs: 'Pulpo Crudo',
    pricePerKg: 250,
    category: 'especial',
    emoji: '🐙',
    description: 'Pulpo crudo fresco, tierno y de excelente calidad.',
  },
];

export const categories = [
  { id: 'todos' as const, name: 'Todos', icon: '🐚' },
  { id: 'camaron' as const, name: 'Camarón', icon: '🦐' },
  { id: 'pescado' as const, name: 'Pescado', icon: '🐟' },
  { id: 'especial' as const, name: 'Especiales', icon: '⭐' },
];
