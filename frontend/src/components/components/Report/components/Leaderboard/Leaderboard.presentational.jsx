// modules
import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import LeaderboardListItem from '../../../../../helper/components/LeaderboardListItem/LeaderboardListItem'
// components
import {
  Pickers,
  // BarChart,
} from '../../../../../helper/functions/common.helper.component'
// styles
import './Leaderboard.scss'
import Select from '../../../../../helper/components/Select/Select.presentational'
import { options, updaters } from '../ShowChart/ShowChart.presentational'
import Button from '../../../../../helper/components/Button/Button.presentational'

const Leaderbord = ({
  handleUpdate,
  update,
  dateMode,
  onChangeDateMode,
  ...props
}) => (
  <div className="leaderboard-container">
    <Select
      onChange={value => {
        updaters[value](update)
        onChangeDateMode(value)
      }}
      currentValue={dateMode}
      options={options}
      inputStyle={{
        marginTop: 5,
      }}
    />
    <Pickers {...props} />
    <Button
      text="نمایش نتایج"
      onClick={() => handleUpdate(props.startDate, props.endDate)}
      variant="labeled"
      classesProp={{ button: 'leaderboard-button' }}
    />

    {/*<BarChart {...props} XDataKey="username" YDataKey="duration" />*/}

    {props.data.length ? (
      <List style={{ paddingBottom: 25 }}>
        {props.data
          .sort((personA, personB) => personA.score < personB.score)
          .map(
            (
              { userId, username, profileImage, duration, workInProgress },
              index,
            ) => (
              <LeaderboardListItem
                rank={index + 1}
                profileImage={profileImage}
                score={duration}
                fullName={username}
              />
            ),
          )}
      </List>
    ) : null}
  </div>
)

Leaderbord.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Leaderbord
