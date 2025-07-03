import {memo, useReducer} from "react";

const Item = memo(({job}) => {
  console.log('render')

  return (
    <div className={'item'}>
      <span>{job.name}</span>
      <div>
        <button>done</button>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  )
})


const reducer = (state, action) => {
  if (action.type === 'inputtingJob/change') {
    return {...state, inputtingJob: action.value}
  }
  if (action.type === 'jobs/add') {
    const jobs = [...state.jobs]
    jobs.push({name: state.inputtingJob, status: 'doing'})
    state.jobs = jobs
    return {...state}
  }
  return state
}

export default function () {
  const [state, dispatch] = useReducer(reducer, {
    jobs: [
      { name: 'Pyhon', status: 'done' },
      { name: 'JS', status: 'doing' }
    ],
    inputtingJob: null
  })

  const onSave = () => {
    dispatch({type: 'jobs/add'})
  }

  return (
    <>
      <div className={'item'}>
        <input
          type={'text'}
          value={state.inputtingJob || ''}
          onChange={(e) => dispatch({type: 'inputtingJob/change', value: e.target.value})}
        />
        <button onClick={onSave}>Save</button>
      </div>
      <div>
        {
          state.jobs.map((job, index) => {
            return <Item key={index} job={job}/>
          })
        }
      </div>
    </>
  )
}