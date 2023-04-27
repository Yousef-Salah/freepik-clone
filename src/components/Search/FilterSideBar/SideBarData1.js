export const SideBarData1 = [
  {
    tag: 1,
    collapse: 'Category',
    icon: 'bx bx-category-alt',
    tags: ['Vectors', 'Photos', 'PSD', 'Icons'],
    icon1: [],
    id: 'categoryCollapse',
    target: '#categoryCollapse',
    page: 'search'
  },
  {
    collapse: 'License',
    icon: 'bx bx-crown',
    tag: 1,
    tags: ['Free', 'Premium'],
    icon1: ['', 'bx bx-crown'],
    id: 'licenseCollapse',
    page: 'search'
  },
  {
    collapse: 'Colors',
    icon: 'bx bx-palette',
    color: 1,
    icon1: ['bi bi-x cancel'],
    colors: [
      'tw-border',
      'tw-bg-red-500',
      'tw-bg-orange-500',
      'tw-bg-pink-200',
      'tw-bg-yellow-300',
      'tw-bg-green-300',
      'tw-bg-cyan-500',
      'tw-bg-purple-500',
      'tw-bg-black',
      'tw-bg-gray-200',
      'tw-bg-white-200 tw-border'
    ],
    id: 'colorsCollapse',
    page: 'search'
  },
  {
    collapse: 'People',
    icon: 'bi bi-person-video',
    tag: 1,
    tags: ['With People', 'No people'],
    icon1: ['bi bi-person-video ', 'bx bx-rectangle '],
    sub: 1,
    subs: [
      {
        title: 'Number of people',
        tags: ['1', '2', '3', '4+'],
        id: 'numberCollapse'
      },
      {
        title: 'Age',
        tags: ['Infant', 'Child', 'Teen', 'Young Adult', 'Adult', 'Senior', 'Elder'],
        id: 'ageCollapse'
      },
      { title: 'Gender', tags: ['Male', 'Female'], id: 'genderCollapse' },
      {
        title: 'Ethnicity',
        tags: [
          'South Asian',
          'Middle Eastern',
          'Black',
          'East Asian',
          'Hispanic',
          'Indian',
          'White'
        ],
        id: 'ethnicityCollapse'
      }
    ],
    id: 'peopleCollapse',
    page: 'search',
    info: 'yes'
  },
  {
    collapse: 'File Type',
    icon: 'bx bx-file',
    tag: 1,
    tags: ['PSD', 'AI', 'EPS'],
    icon1: [''],
    id: 'licenseCollapsed',
    aria: 'licenseCollapse',
    page: 'search'
  },
  {
    collapse: 'Orientation',
    icon: 'bx bx-subdirectory-left',
    tag: 1,
    tags: ['Horizontal', 'Square', 'Rectangle', 'Panoramic'],
    icon1: [
      'bx bx-rectangle',
      'bx bx-rectangle bx-rotate-90 ',
      'bx bx-rectangle bx-rotate-90 ',
      'bx bx-rectangle'
    ],
    id: 'orientationCollapse',
    page: 'search'
  },
  {
    collapse: 'Quick edit',
    icon: 'bi bi-brush',
    par: 'Edit online with Wepik or Storyset',
    toggle: 1,
    id: 'editCollapse',
    switchId: 'editToggle',
    links: [
      'https://storyset.com/?_gl=1%2a1ulmfcj%2a_ga%2amtk4odaxnje2ms4xnjy2ntuymjmz%2a_ga_18b6qptjpc%2amty3mtc4nzgzmy4xoc4xlje2nze3odgymzkundcumc4w',
      ,
      'https://wepik.com/?_gl=1*huk58t*fp_ga*MTk4ODAxNjE2MS4xNjY2NTUyMjMz*fp_ga_QWX66025LC*MTY3MTc4NzgzMy4xNDUuMS4xNjcxNzg4MjM5LjQ3LjAuMA..*_ga*MTk4ODAxNjE2MS4xNjY2NTUyMjMz*_ga_18B6QPTJPC*MTY3MTc4NzgzMy4xOC4xLjE2NzE3ODgyMzkuNDcuMC4w'
    ]
  },
  {
    collapse: 'Puplish Date',
    icon: 'bx bxs-calendar',
    icon1: [],
    tags: ['Last 3 months', 'Last 6 months', 'Last year'],
    id: 'puplishDateCollapse',
    tag: 1,
    page: 'search'
  },
  {
    collapse: "Freepik's choice",
    icon: 'bx bxs-star',
    toggle: 1,
    id: 'choiceCollapse',
    par: 'See our favorites',
    switchId: 'choiceToggle',
    page: 'search'
  }
]
