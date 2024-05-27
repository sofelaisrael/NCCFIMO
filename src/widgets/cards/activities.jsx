export function ActivitiesCard ({day, activity, time}) {
  return (
    <div className='flex flex-col w-[300px] border-t p-5'>
      <div className="act text-[24px]">
        {activity}
      </div>
      <span className="day text-[18px]">
        {day}
      </span>
      <span className="time text-[12px]">
        {time}
      </span>
    </div>
  )
}

export default ActivitiesCard
