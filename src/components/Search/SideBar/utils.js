export const filters = [
  {
    title: 'Asset Type',
    icon: 'shapes',
    info: false,
    type: 'labels',
    tags: [
      { name: 'Vectors', isNew: false, icon: false },
      { name: 'Photos', isNew: false, icon: false },
      { name: 'AI images', isNew: true, icon: false },
      { name: 'Icons', isNew: false, icon: false },
      { name: 'Videos', isNew: true, icon: false },
      { name: 'PSD', isNew: false, icon: false },
    ],
  },
  {
    title: 'License',
    icon: 'crown',
    info: false,
    type: 'labels',
    tags: [
      { name: 'Free', isNew: false, icon: false },
      { name: 'Premium', isNew: false, icon: 'crown' },
    ],
  },
  {
    title: 'AI-generated',
    icon: 'robot',
    info: false,
    type: 'labels',
    tags: [{ name: 'Exclude AI generated', isNew: false, icon: false }],
  },
  {
    title: 'Color',
    icon: 'droplet',
    info: false,
    type: 'circles',
    tags: [
      { color: '#000000' },
      { color: '#FFFFFF' },
      { color: '#FF0000' },
      { color: '#FFA500' },
    ],
  },
  {
    title: 'People',
    icon: 'person',
    info: true,
    type: 'labels',
    tags: [
      { name: 'With people', isNew: false, icon: 'person' },
      { name: 'Without people', isNew: false, icon: 'square' },
    ],
  },
  {
    title: 'Orientation',
    icon: 'arrow-up-short-wide',
    info: false,
    type: 'labels',
    tags: [
      { name: 'Horizontal', isNew: false, icon: 'arrow-up-short-wide' },
      { name: 'Vertical', isNew: false, icon: 'arrow-up-short-wide' },
    ],
  },
  {
    title: 'Style',
    icon: 'brush',
    info: true,
    type: 'labels',
    tags: [
      { name: 'Water color', isNew: false, icon: false },
      { name: 'Flat', isNew: false, icon: false },
      { name: 'Realistic', isNew: false, icon: false },
      { name: 'Minimalistic', isNew: false, icon: false },
      { name: 'Hand drawn', isNew: false, icon: false },
      { name: 'Cartoon', isNew: false, icon: false },
      { name: 'Line art', isNew: false, icon: false },
    ],
  },
  {
    title: 'Quick edit',
    icon: 'pencil',
    info: false,
    type: 'navigate',
    tags: [{ name: 'Open the online editor', isNew: true, icon: false }],
  },
  {
    title: 'Freepiks choice',
    icon: 'star',
    info: true,
    type: 'navigate',
    tags: [{ name: 'Open the online editor', isNew: true, icon: false }],
  },
]

export const headItem = {
  title: 'Filters',
  icon: 'arrow-up-short-wide',
  info: false,
}

export default filters
