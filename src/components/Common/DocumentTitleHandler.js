import { useEffect } from 'react'
import propTypes from 'prop-types'

const DocumentTitleHandler = ({ pageTitle }) => {
  useEffect(() => {
    document.title = `Seepik | ${pageTitle}`
  }, [])
}

DocumentTitleHandler.propTypes = {
  pageTitle: propTypes.string
}

export default DocumentTitleHandler
