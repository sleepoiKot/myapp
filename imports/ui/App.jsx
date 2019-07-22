import React, {useState, useEffect} from 'react';
import { Meteor } from 'meteor/meteor';

const App = () => {
  const [commits, setCommits] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    Meteor.call('get.commits', (err, res) => {
      if (err) console.error(err)
      else setCommits(res)

      setLoading(false)
    })
  }, [])
  
  const lastChar = s => !isNaN(Number(s[s.length - 1]))

  const renderCommitList = () => commits.map(({hash, author, commit}) => {
    const isNumber = 
  } (
    <li key={hash} style={{
      listStyleType: 'none', 
      backgroundColor: lastChar(hash) && '#ffff00'}}>
        <h2>{author}</h2>
        <p style={{marginLeft: 50}}>{commit}</p>
    </li>
  ))

  return loading ? <span>Content is loading...</span> : (
    <div>
      <ul>
        {renderCommitList()}
      </ul>
    </div>
  )
}

export default App;
