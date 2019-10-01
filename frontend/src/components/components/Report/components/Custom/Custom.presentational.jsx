// modules
import React from 'react'
// helpers
import {
  TagPanel,
  Pickers,
} from '../../../../../helper/functions/common.helper.component'
import { Buttons, CSVDownloader } from './Custom.helper.component'

export default props => (
  <>
    <Pickers {...props} />

    {/*<TextField*/}
    {/*  label="تگ‌ها"*/}
    {/*  placeholder="تگ مورد نظر را وارد کنید"*/}
    {/*  value={queryTag}*/}
    {/*  onChange={e => onQueryTagChange(e.target.value)}*/}
    {/*  isError={isError.queryTag}*/}
    {/*  inputProps={{*/}
    {/*    onKeyDown: e => {*/}
    {/*      if (e.key === 'Enter' && !e.shiftKey && !isPhoneOrTablet) {*/}
    {/*        e.preventDefault()*/}
    {/*        handleAddTag()*/}
    {/*      }*/}
    {/*    },*/}
    {/*    style: {*/}
    {/*      minHeight: 30,*/}
    {/*      fontSize: '12px',*/}
    {/*      lineHeight: '21px',*/}
    {/*      letterSpacing: '-0.08px',*/}
    {/*      fontFamily: 'iranyekan',*/}
    {/*    },*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<TagList tags={tags} onTagClick={onTagClick} />*/}

    <TagPanel {...props} />
    <Buttons {...props} />
    <CSVDownloader {...props} />
  </>
)
