import { useEffect, useState } from 'react'
import style from './Clock.module.css'

function Clock(props) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    setSeconds(Math.floor((time/1000) % 60));
    setMinutes(Math.floor((time/1000/60) % 60));
    setHours(Math.floor((time/(1000*60*60)% 24)));
    setDays(Math.floor((time/(1000*60*60*24))));
  }

  useEffect(() => {
    getTimeUntil(props.deadline);
  })

  useEffect(() => {
    setInterval(() => getTimeUntil(props.deadline), 1000)
  }, [props.deadline])

  const leading0 = (num) => {
    return num < 10 ? '0' + num : num
  }

return (
    <div className='inline-block absolute left-[0] bottom-[0] text-[white] bg-[#555]'>
            <span >{leading0(days)}:</span>
            <span >{leading0(hours)}:</span>
            <span >{leading0(minutes)}:</span>
            <span >{leading0(seconds)}</span>
        </div>
  )
}

export default Clock;