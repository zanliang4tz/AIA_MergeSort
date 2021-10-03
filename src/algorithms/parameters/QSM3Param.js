/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles'
import { genRandNumList } from './helpers/ParamHelper'
import { GlobalContext } from '../../context/GlobalState'
import { GlobalActions } from '../../context/actions'
import ListParam from './helpers/ListParam'
import '../../styles/Param.scss'

const DEFAULT_ARR = genRandNumList(8, 1, 99)
const QUICK_SORT = 'Quick Sort Median of Three'
const QUICK_SORT_EXAMPLE = 'Please follow the example provided: 0,1,2,3,4'
const UNCHECKED = {
  rightmost: false,
  medianofthree: false,
}

const BlueRadio = withStyles({
  root: {
    color: '#2289ff',
    '&$checked': {
      color: '#027aff',
    },
  },
  checked: {},
  // eslint-disable-next-line react/jsx-props-no-spreading
})((props) => <Radio {...props} />)

function QuicksortM3Param() {
  const [message, setMessage] = useState(null)
  const [array, setArray] = useState(DEFAULT_ARR)
  const [QSM3Case, setQSM3Case] = useState({
    rightmost: false,
    medianofthree: true,
  })

  // function for choosing the type of pivot (rightmost)
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'rightmost':
        // setNodes(shuffleArray(nodes));
        break
      case 'medianofthree':
        // setNodes([...nodes].sort((a, b) => a - b));
        break
      default:
    }

    setQSM3Case({ ...UNCHECKED, [e.target.name]: true })
  }

  return (
    <>
      <div className="form">
        <ListParam
          name="quickSortM3"
          buttonName="Sort"
          mode="sort"
          formClassName="formLeft"
          DEFAULT_VAL={array}
          SET_VAL={setArray}
          ALGORITHM_NAME={QUICK_SORT}
          EXAMPLE={QUICK_SORT_EXAMPLE}
          setMessage={setMessage}
        />
      </div>
      <span className="generalText">Choose pivot using : &nbsp;&nbsp;</span>
      {/* create a checkbox for Rightmost */}
      <FormControlLabel
        control={
          <BlueRadio
            checked={QSM3Case.rightmost}
            onChange={handleChange}
            name="rightmost"
          />
        }
        label="Rightmost"
        className="checkbox"
      />
      {/* create a checkbox for Median of Three */}
      <FormControlLabel
        control={
          <BlueRadio
            checked={QSM3Case.medianofthree}
            onChange={handleChange}
            name="medianofthree"
          />
        }
        label="Median of Three"
        className="checkbox"
      />
      {/* render success/error message */}
      {message}
    </>
  )
}

export default QuicksortM3Param
