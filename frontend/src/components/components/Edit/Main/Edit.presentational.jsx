import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { ContentWithStyle as Content } from './Edit.helper'
import ToolBar from '../../../../helper/components/DialogToolbar/DialogToolbar.presentational'
import Transition from '../../../../helper/components/Transition/Transition'

const Edit = props => (
  <Dialog
    open={props.isOpen}
    fullScreen
    style={{ top: 40 }}
    hideBackdrop
    transitionDuration={300}
    TransitionComponent={Transition}
  >
    <ToolBar title="ویرایش" onClose={props.close} isLoading={props.isLoading} />
    <Content {...props} />
  </Dialog>
)

export default Edit
