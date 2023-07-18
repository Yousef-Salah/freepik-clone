/* eslint-disable */
import React, { useState, useEffect } from 'react'
import SearchResultHeader from '../components/Search/SearchResults/SearchResultHeader'
import SideBar from '../components/Search/FilterSideBar/SideBar'
import TagBar from '../components/Search/FilterSideBar/TagBar'
import { FontsTagBarData, FontsSideBarData } from '../utils/Fonts'
import FontsList from '../components/Fonts/FontsList'
import MainLayout from '../components/Layouts/MainLayout'
const Fonts = (props) => {
  const [open, setOpen] = useState(false)
  const updateOpen = (value) => {
    setOpen(value)
  }
  useEffect(() => {
    // props.page('Fonts')
  }, [])
  const [lastWord, setLastWord] = useState('')
  const [link, setLink] = useState(window.location.href)
  useEffect(() => {
    setLink(location.pathname)

    if (link !== 'http://localhost:3000/fonts') {
      const words = link.split('/')
      const fontsIndex = words.indexOf('fonts')
      const newLastWord = words[fontsIndex + 1] || ''
      setLastWord(newLastWord.replace('All%20fonts', ' '))
    }
  }, [location])

  return (
    <>
      {/* <MainLayout page={props.page} pageTitle="Fonts"> */}
      {/* <SearchContainer mainPage={false} /> */}
      <SideBar updateOpen={updateOpen} data={FontsSideBarData} />

      <div className={`fonts-page ${!open ? 'base' : 'pushed'}`}>
        <TagBar data={FontsTagBarData} className={`${!open ? 'base' : 'pushed-tagbar'}`} />
        <SearchResultHeader
          title={`Free ${lastWord} Fonts`}
          description="Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!"
        />
        <FontsList />
      </div>
      {/* </MainLayout> */}
    </>
  )
}

export default Fonts
