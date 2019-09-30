// modules
import { connect } from 'react-redux'
// components
import Home from './Home.presentational'
// views
import { logsView, isLoadingView } from '../../../Main/App.reducer'
import { isOpenView } from './Home.reducer'
// actions
import { dispatchSetIsOpenDialog } from './Home.action'


const mapStateToProps = () => ({
  logs: logsView(),
  isOpen: isOpenView(),
  isLoading: isLoadingView(),
})

const mapDispatchToProps = () => ({
  onAdd: () => dispatchSetIsOpenDialog(true),
  onClose: () => dispatchSetIsOpenDialog(false),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
