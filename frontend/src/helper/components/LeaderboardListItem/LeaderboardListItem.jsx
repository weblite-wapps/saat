// modules
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
// helpers
import { toPersian } from '../../functions/utils.helper'
import { formattedSeconds } from '../../functions/time.helper'
// style
import './LeaderboardListItem.scss'

const getMedal = rank => {
  if (rank === 1) return 'gold'
  else if (rank === 2) return 'silver'
  else if (rank === 3) return 'bronze'
  return null
}
const LeaderboardListItem = ({ rank, profileImage, fullName, score }) => (
  <div className="c--result-item_container" dir="rtl">
    <div className="c--result-item_right-segment">
      <Typography style={{ margin: '11px' }}>{toPersian(rank)}</Typography>
    </div>

    <div className="c--result-item_left-segment">
      <div className="c--result-item_user-info">
        {profileImage ? (
          <Avatar
            alt={fullName}
            src={`https://www.weblite.me:3000/image/${profileImage}`}
          />
        ) : (
          <span
            style={{
              width: 35,
              height: 35,
              borderRadius: '50%',
              background: '#7DD9DE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/user.svg"
              style={{
                width: 22,
                height: 22,
              }}
            />
          </span>
        )}

        <div className="c--result-item_text">
          <Typography variant="subtitle1" align="center">
            {fullName}
          </Typography>
          {/*<Typography*/}
          {/*  style={{ fontSize: '8px' }}*/}
          {/*  variant="body2"*/}
          {/*  align="center"*/}
          {/*>*/}
          {/*  {finishTime}*/}
          {/*</Typography>*/}
        </div>
      </div>

      {getMedal(rank) && (
        <div className="c--result-item_medal">
          <img alt="home" src={`/${getMedal(rank)}-medal.svg`} />
        </div>
      )}

      <Typography className="c--result-item_score">
        {toPersian(formattedSeconds(score))}
      </Typography>
    </div>
  </div>
)

LeaderboardListItem.propTypes = {
  rank: PropTypes.number.isRequired,
  profileImage: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  finishTime: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
}

export default LeaderboardListItem
