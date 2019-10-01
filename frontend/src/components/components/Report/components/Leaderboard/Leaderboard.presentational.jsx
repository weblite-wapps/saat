// modules
import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Badge from '@material-ui/core/Badge'
import LeaderboardListItem from '../../../../../helper/components/LeaderboardListItem/LeaderboardListItem'
// components
import {
  Pickers,
  Buttons,
  BarChart,
} from '../../../../../helper/functions/common.helper.component'
// helpers
import Avatar from './Leaderboard.helper'
import { formattedMinutes } from '../../../../../helper/functions/time.helper'
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
    />
    <Pickers {...props} />
    <Button
      text="نمایش نتایج"
      onClick={() => handleUpdate(props.startDate, props.endDate)}
      variant="labeled"
      classesProp={{ button: 'showChart-button' }}
    />
    {/*<Buttons {...props} />*/}

    <BarChart {...props} XDataKey="username" YDataKey="score" />

    <List>
      {props.data
        .sort((personA, personB) => personA.score < personB.score)
        .map(
          (
            { userId, username, profileImage, score, workInProgress },
            index,
          ) => (
            <LeaderboardListItem
              rank={index + 1}
              profileImage={profileImage}
              score={score * 60}
              fullName={username}
            />
          ),
        )}
    </List>
  </div>
)
/*<ListItem className="leaderboard-listItem">*/
/*  {workInProgress ? (*/
/*    <Badge badgeContent={'On'}>*/
/*      <Avatar username={username} profileImage={profileImage} />*/
/*    </Badge>*/
/*  ) : (*/
/*    <Avatar username={username} profileImage={profileImage} />*/
/*  )}*/

/*  <ListItemText primary={username} />*/

/*  <ListItemSecondaryAction>*/
/*    <Typography> {formattedMinutes(score)} </Typography>*/
/*  </ListItemSecondaryAction>*/
/*</ListItem>*/
Leaderbord.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Leaderbord
