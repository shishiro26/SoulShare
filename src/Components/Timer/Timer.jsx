import React, { useState } from 'react'
import style from './Timer.module.css'
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
const Timer = () => {
  const [deadline, setDeadline] = useState('December 25, 2023')
  const [newDeadline, setNewDeadline] = useState('')

  const changeDeadline = () => {
    setDeadline(newDeadline);
  };

  return (
    <div className={style.App}>

        <Clock deadline={deadline} />
        <Form inline="true" className={style.Form}>
            <input className={style.Form__input} placeholder='new date' type='date' onChange={ e => setNewDeadline(e.target.value)}/>
            <Button className={style.Form__button} onClick={changeDeadline}>Submit</Button>
        </Form>
    </div>
  )
}

export default Timer