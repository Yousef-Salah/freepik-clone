import React from 'react'
import Categories from './Categories'

const DataBoi = () => {
    let categories = Categories();

    let imageTemplate = {
        id: 1,
        title: "img1",
        src: "photos/x.png",
        alt: "img1",
        premium: true,
        author: "Ahmed",
        authour_image: "photos/x.png",
        authour_assets: 132,
        category: "backgrounds",
        sub_category: "white backgrounds",
        likes: 29,
        color: "black",
        num_people: 2,
        age: "Elder",
        gender: "Male",

        ethinicity: "white",
        file_type: "jpg",
        undiscovered: false,
        style: "flat",
        publish_date: "12-03-2009",
        choice: false
    }
    let people = [
        "Ahmed",
        "Mohamed",
        "Ali",
        "Hassan",
        "Khaled",
        "Sayed",
        "Samer",
        "Sami",
        "Salem",
        "Salah",]

    let colors = [
        "black",
        "white",
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
        "grey",
        "gold",
        "silver",
        "cyan",
        "magenta",
        "maroon",
        "navy",
        "olive",
        "teal",
        "violet",
        "turquoise",
        "indigo",
        "lavender",
        "crimson",
        "azure",
        "beige",
        "coral",
        "khaki",
        "lavender",
        "lime",
        "mint"]

    let title = [
        "flat",
        "modern",
        "retro",
        "grunge",
        "vintage",
        "elegant",
        "minimal",
        "clean",
        "simple",
        "minimalist",
        "dark",
        "light",
        "bright",
        "colorful",
        "pastel",
        "neon",
        "glow",
        "glowing",
        "glitter",
        "sad",
        "happy",
        "funny",
        "cute",
        "adorable",
        "beautiful",
        "pretty",
        "ugly",
        "handsome",
        "wether",
        "rainy",
        "sunny",
        "cloudy",
        "stormy",
        "snowy",
        "cold",
        "hot",
        "warm",
        "cool",
        "summer",
        "winter",
        "spring",
        "fall",
        "autumn",
        "christmas",
        "halloween",
        "thanksgiving",
        "easter",
        "new year",
        'hearts',
        "stars",
        "flowers",
        "roses",
        "daisies",
        "tulips",
        "sunset",
        "sunrise",
        "mountains",
        "ocean",
        "sea",
        "beach",
        "water",
        "sky",
        "space",
        "night",
        "day",
        "night sky",
        "skyline",
        "city",
        "cityscape",
        "urban",
        "street",
        "road",
        "highway",
        "freeway",
        "highway",
        "forest",
        "woods",
        "trees",
        "leaves",
        "grass",
        "plants",
        "nature",
        "forest",
        "desert",
        "cactus",
        "sand",
        "road",
        "street",
        "city",
        "cityscape",
        "urban",
        "building",
        "architecture",
        "blueprint",
        "skyscraper",
        "house",
        "home",
        "apartment",
        "condo",
        "office",
        "school",
        "work",
        "workplace",
        "business",
        "coffee",
        "tea",
        "laptop",
        "computer",
        "phone",
        "iphone",
        "android",
        "mac",
        "windows",
        "apple"
    ]
    let file_type = [
        "jpg",
        "jpeg",
        "png",
        "psd",
        "ai",
        "eps",
        "svg",
        "gif",
        "tiff",
        "raw",]

    let ethinicity = [
        "white",
        "black",
        "asian",
        "indian",
        "arabic",
        "african",
        "american",
        "european",
        "north african",
        "south african",]

    let age = [
        "child",
        "teen",
        "young",
        "adult",
        "elder",
        "old",
        "middle age",
        "mature",
        "young adult",
        "elderly",]

    let ImagesData = []

    //create 100 objects of imageTemplate with random values
    for (let i = 0; i < 1000; i++) {
        let image = Object.assign({}, imageTemplate)
        let randomCategory = categories[Math.floor(Math.random() * categories.length)].name
        let randomTitle = title[Math.floor(Math.random() * title.length)]
        image.id = i
        image.title = randomTitle + " " + randomCategory
        image.src = `da_photo_loc/${randomCategory}-${i}.png`
        image.alt = randomTitle + "-img"
        image.premium = Math.random() < 0.5
        image.author = people[Math.floor(Math.random() * people.length)]
        image.authour_image = `authour_photos/auth-${Math.floor(Math.random() * 6)}.png`
        image.authour_assets = Math.floor(Math.random() * 1000)
        image.category = categories[Math.floor(Math.random() * categories.length)].name
        image.sub_category = categories[Math.floor(Math.random() * categories.length)].name
        image.likes = Math.floor(Math.random() * 1000)
        image.color = colors[Math.floor(Math.random() * colors.length)]
        image.num_people = Math.floor(Math.random() * 6)
        image.age = age[Math.floor(Math.random() * age.length)]
        image.gender = Math.random() < 0.5 ? "Male" : "Female";
        image.ethinicity = ethinicity[Math.floor(Math.random() * ethinicity.length)]
        image.file_type = file_type[Math.floor(Math.random() * file_type.length)]
        image.undiscovered = Math.random() < 0.5
        image.style = Math.random() < 0.5 ? "Flat" : "Portrait";
        image.publish_date = `${Math.floor(Math.random() * 20) + 10}-${Math.floor(Math.random() * 2) + 10}-${Math.floor(Math.random() * 8) + 2015}`
        image.choice = Math.random() < 0.5
        image.related_tags = [
            randomTitle,
            randomCategory,
            image.color,
            image.ethinicity,
            image.age,
        ]
        ImagesData.push(image)
    }
    return ImagesData

}

export default DataBoi
