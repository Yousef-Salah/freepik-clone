export const SideBarData1=[
    {
       tag:1,
        collapse:'Category', icon:'bx bx-category-alt',
        tags:[
            'Vectors','Photos','PSD','Icons'
        ],icon1:[],
        id:'categoryCollapse',target:"#categoryCollapse",
        aria:"categryCollapse"
},  {
    collapse:'License', icon:'bx bx-crown',
    tag:1,
    tags:[
        'Free','Premium'
    ],icon1:['','bx bx-crown'],
    id:"licenseCollapse",
        aria:"licenseCollapse"
}, {
    collapse:'Colors', icon:"bx bx-palette",
    color:1,
    icon1:['bi bi-x cancel'],colors:['tw-border','tw-bg-red-500','tw-bg-orange-500',
    'tw-bg-pink-200','tw-bg-yellow-300','tw-bg-green-300','tw-bg-cyan-500','tw-bg-purple-500',
    'tw-bg-black','tw-bg-gray-200','tw-bg-white-200 tw-border'],
    id:"colorsCollapse",
        aria:"colorsCollapse"
},{
    collapse:'People', icon:"bi bi-person-video",
    tag:1,
    tags:['With People','No people'],
    icon1:['bi bi-person-video tw-mr-1 mt--2','bx bx-rectangle tw-mt--2'],sub:1,
    subs:[{title:'Number of people',
    tags:['1','2','3','4+'],id:'numberCollapse'
},{title:'Age',tags:['Infant','Child','Teen','Young Adult','Adult','Senior','Elder'],id:'ageCollapse'},
{title:'Gender',tags:['Male','Female'],id:'genderCollapse'},
{title:'Ethnicity',tags:['South Asian','Middle Eastern','Black','East Asian','Hispanic','Indian','White'],id:'ethnicityCollapse'}],
    id:"peopleCollapse",
        info:'yes'
},{
    collapse:'Orientation', icon:'bx bx-subdirectory-left',
    color:0,tag:1,
    tags:[
        'Horizontal','Square','Rectangle','Panoramic'
    ],icon1:['bx bx-rectangle tw-mr-1 mt--1','bx bx-rectangle bx-rotate-90 tw-mr-1 ','bx bx-rectangle bx-rotate-90 tw-mr-1 mt--1','bx bx-rectangle tw-mr-1 mt--1'],
    id:"orientationCollapse",
},{
    collapse:'Quick edit',icon:'bi bi-brush',par:'Edit online with Wepik or Storyset',tag:0,color:0,sub:0
}
]
