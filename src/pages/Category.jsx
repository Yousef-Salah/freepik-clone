import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CategoryHeader from '../components/Category/CategoryHeader/CategoryHeader'
import CategorySection from '../components/Category/CategorySection/CategorySection'

import SearchContainer from '../components/Search/SearchBox/SearchContainer'
import CategoryFullList from '../components/Category/CategoryFullList/CategoryFullList'
import CategorySepList from '../components/Category/CategorySepList/CategorySepList'
import RelatedArticles from '../components/Category/RelatedArticles/RelatedArticles'
import JoinSection from '../components/Common/JoinSection/JoinSection'

const Category = () => {
  const [cat, setCat] = useState('')
  const catParam = useParams().term

  const headerData = [
    {
      title: 'The best backgrounds for your projects',
      desc: "All your drawings, illustrations and compositions are not standing on thin air, right? There's scenery, something that tells everyone where your creation takes place. That's the background, probably one of the most important elements that make everything feel complete. A background is also a nice decorative touch, especially in slideshows, flyers, and other projects.",
    },
    {
      title: 'Cartoons are a way to give life to your creations',
      desc: 'People have been drawing cartoons for quite some time now. This style has evolved over time and it&aposs now more than a humorous depiction ofsomeone. It&aposs very popular among children, and an interesting way of showing an image of yourself to others. It has a colorful nature and a different way of interpreting things from reality',
    },
  ]

  function isAlpaUpper(char) {
    const charCode = char.charCodeAt(0)
    return charCode >= 'a'.charCodeAt(0) && charCode <= 'c'.charCodeAt(0)
  }

  useEffect(() => {
    if (isAlpaUpper(catParam[0])) {
      setCat('style_sep')
    } else {
      setCat('style_full')
    }
    document.title = 'Seepik | '.concat(
      catParam.charAt(0).toUpperCase() + catParam.slice(1)
    )
  }, [catParam])

  return (
    <>
      <SearchContainer mainPage={false} page="category" />
      <CategoryHeader title={headerData[0].title} desc={headerData[0].desc} />
      {cat === 'style_full' ? (
        <CategoryFullList category={catParam} />
      ) : (
        <CategorySepList category={catParam} />
      )}
      <CategorySection />
      <RelatedArticles />
      <JoinSection />
    </>
  )
}

export default Category
