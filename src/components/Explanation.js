import React, { useContext, useEffect, useState } from 'react';
import ReactMarkDown from 'react-markdown/with-html';
import toc from 'remark-toc';

import { GlobalContext } from '../context/GlobalState';
import CodeBlock from '../markdown/code-block';


function Explanation() {
  const { algorithm } = useContext(GlobalContext);
  const [explanation, setExplanation] = useState('');

  useEffect(() => {
    fetch(algorithm.explanation).then((res) => res.text()).then((text) => setExplanation(text));
  }, [algorithm.explanation]);

  return (
    <div className="textArea">
      <ReactMarkDown
        source={explanation}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
        plugins={[toc]}
      />
    </div>
  );
}

export default Explanation;
