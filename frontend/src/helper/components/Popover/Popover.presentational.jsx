// modules
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import { primary_color } from '../../style/_color'

const styles = {
  button: {
    backgroundColor: primary_color,
    fontSize: '13px',
    color: 'white',
    borderRadius: '5px',
    padding: '5px 10px',
    margin: '5px',
    with: '50%',
    minHeight: '25px',
    textTransform: 'capitalize',
  },
  paper: {
    borderRadius: '5px',
  },
}

const CustomizedPopover = ({
  classes,
  popoverIsOpen,
  anchorEl,
  anchorReference,
  onClose,
  onYep,
  onNop,
}) => (
  <Popover
    classes={{ paper: classes.paper }}
    open={popoverIsOpen}
    onClose={onClose}
    anchorEl={anchorEl}
    anchorReference={anchorReference}
    anchorOrigin={{
      vertical: 'center',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  >
    <Typography
      dir="rtl"
      variant="subtitle1"
      style={{ margin: '10px 15px 5px' }}
    >
      آیا مطمئنید؟
    </Typography>
    <Button
      variant="contained"
      onClick={onYep}
      classes={{ contained: classes.button }}
    >
      بله
    </Button>
    <Button
      variant="contained"
      onClick={onNop}
      classes={{ contained: classes.button }}
    >
      خیر
    </Button>
  </Popover>
)

CustomizedPopover.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  popoverIsOpen: PropTypes.bool.isRequired,
  anchorEl: PropTypes.shape({}),
  anchorReference: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onYep: PropTypes.func.isRequired,
  onNop: PropTypes.func.isRequired,
}

CustomizedPopover.defaultProps = {
  anchorEl: null,
}

export default withStyles(styles)(CustomizedPopover)
