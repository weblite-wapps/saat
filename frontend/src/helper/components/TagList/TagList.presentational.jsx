// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Badge from '../Badge/Badge.presentational'
// styles
import './TagList.scss'

const TagList = ({ tags, onTagClick }) => (
  <div className="tagList-container">
    {tags.map(tag => (
      <Badge onTagClick={() => onTagClick(tag)} key={tag._id} label={tag.label} />
    ))}
  </div>
)

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTagClick: PropTypes.func.isRequired,
}

export default TagList
