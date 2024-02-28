import React from 'react'
import CustomTable from './CustomTable';
const ContestInfo = ({userContests}) => {

  userContests= Array.from(userContests);

  const bestRank = Math.min.apply(null,userContests.map((data) =>{
      return data.rank;
  }))

  const worstRank = Math.max.apply(null,userContests.map((data) =>{
    return data.rank;
  }))

  const maxUp = Math.max.apply(null, userContests.map((data) => {
    return data.newRating - data.oldRating;
  }))

  const maxDown = Math.min.apply(null, userContests.map((data) => {
    return data.newRating - data.oldRating;
  }))

  const rows = [
    {id: 1 ,name : 'No of Contests',data: userContests.length},
    {id: 2 ,name : 'Best Rank',data: bestRank},
    {id: 3 ,name : 'Worst Rank',data: worstRank},
    {id: 4 ,name : 'Maximum Rating UP',data: maxUp},
    {id: 5 ,name : 'Maximum Rating Down',data: maxDown},
  ]
  return (
    <div>
      <CustomTable rows={rows} TableName='ContestInfo'></CustomTable>
    </div>
  )
}

export default ContestInfo;
