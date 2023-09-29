import React, { useState, useContext, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { withStyles } from '@mui/styles';
import { GlobalContext } from '../../context/GlobalState';
import { GlobalActions } from '../../context/actions';
import ListParam from './helpers/ListParam';
import SingleValueParam from './helpers/SingleValueParam';
import '../../styles/Param.scss';
import {
  singleNumberValidCheck,
  genRandNumList,
  successParamMsg,
  errorParamMsg,
  balanceBSTArray,
  shuffleArray,
} from './helpers/ParamHelper';

// import useParam from '../../context/useParam';

const DEFAULT_NODES = genRandNumList(10, 1, 100);
const DEFAULT_TARGET = '2';
const INSERTION = 'insertion';
const SEARCH = 'search';
const INSERTION_EXAMPLE = 'Please follow the example provided: 0,1,2,3,4';
const SEARCH_EXAMPLE = 'Please follow the example provided: 16';

function TTFTreeParam() {
  const { algorithm, dispatch } = useContext(GlobalContext);
  const [message, setMessage] = useState(null);
  const [nodes, setNodes] = useState(DEFAULT_NODES);

  /**
   * For BST, since we need to insert nodes before run the search algorithm,
   * therefore we need some extra check to make sure the tree is not empty.
   * So we need to implement a new handle function instead of using the default one.
   */
  /*const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;

    if (singleNumberValidCheck(inputValue)) {
      const target = parseInt(inputValue, 10);
      // make sure the tree is not empty
      if (
        algorithm.hasOwnProperty('visualisers')
        && !algorithm.visualisers.graph.instance.isEmpty()
      ) {
        const visualiser = algorithm.chunker.visualisers;
        // run search animation
        dispatch(GlobalActions.RUN_ALGORITHM, {
          name: 'binarySearchTree',
          mode: 'search',
          visualiser,
          target,
        });
        setMessage(successParamMsg(SEARCH));
      } else {
        // when the tree is &nbsp;&nbsp;empty
        setMessage(
          errorParamMsg(
            SEARCH,
            undefined,
            'Please fully build the tree before running a search.',
          ),
        );
      }
    } else {
      // when the input cannot be converted to a number
      setMessage(errorParamMsg(SEARCH, SEARCH_EXAMPLE));
    }
  }; */


  return (
    <>
      <div className="form">
        {/* Insert input */}
        <ListParam
          name="TTFTree"
          buttonName="Insert"
          mode="insertion"
          formClassName="formLeft"
          DEFAULT_VAL={DEFAULT_NODES}
          SET_VAL={setNodes}
          ALGORITHM_NAME={INSERTION}
          EXAMPLE={INSERTION_EXAMPLE}
          setMessage={setMessage}
        />

        {/* Search input */}
        {/*<SingleValueParam
          name="TTFTree"
          buttonName="Search"
          mode="search"
          formClassName="formRight"
          DEFAULT_VAL={DEFAULT_TARGET}
          ALGORITHM_NAME={SEARCH}
          EXAMPLE={SEARCH_EXAMPLE}
          setMessage={setMessage}
  />*/}
      </div>
      {/* render success/error message */}
      {message}
    </>
  );
}

export default TTFTreeParam;