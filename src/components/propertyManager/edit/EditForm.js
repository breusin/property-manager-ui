import React, { useState } from 'react'
import './editform.css'
export const EditForm = ({onSave, onCancel, item}) => {

  const [key, setKey] = useState(item.key)
  const [value, setValue] = useState(item.value)
  const [target, setTarget] = useState(item.target)
  const [env, setEnv] = useState(item.env)
  const [server, setServer] = useState(item.server)
  const [description, setDescription] = useState(item.description)

  function handleSubmit(event) {
      event.preventDefault()

      item.key = key
      item.value = value
      item.target = target
      item.env = env
      item.server = server
      item.description = description

      onSave(item)

  }

  function handleChangeKey(event) {
      setKey(event.target.value)
  }

  function handleChangeValue(event) {
      setValue(event.target.value)
  }

  function handleChangeTarget(event) {
      setTarget(event.target.value)
  }
  function handleChangeEnv(event) {
      setEnv(event.target.value)
  }
  function handleChangeServer(event) {
      setServer(event.target.value)
  }

  function handleChangeDescription(event) {
      setDescription(event.target.value)
  }

  return (
      <div>
          <div className="edit">
            <form onSubmit={handleSubmit}>
              <p><label>Key: </label><input className="edit" type="text" value={key} onChange={handleChangeKey} /><span> </span></p>
              <p><label>Value: </label><input className="edit" type="text" value={value} onChange={handleChangeValue} /><span> </span></p>
              <p><label>Target: </label><input className="edit" type="text" value={target} onChange={handleChangeTarget} /><span> </span></p>
              <p><label>Env: </label><input className="edit" type="text" value={env} onChange={handleChangeEnv} /><span> </span></p>
              <p><label>Server: </label><input className="edit" type="text" value={server} onChange={handleChangeServer} /><span> </span></p>
              <p>
                  <label>Description: </label>
                  <textarea className="edit" value={description} onChange={handleChangeDescription} >
                  </textarea>
              </p>
              <div>
              <p>
              <button type="submit">Save</button><span>  </span>
              <button onClick={onCancel}>Cancel</button>
              </p>
              </div>
            </form>
          </div>
          <br />
          <div>
          </div>
      </div>
  )
}

export default EditForm