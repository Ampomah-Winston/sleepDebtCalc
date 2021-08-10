let getSleepHours =day=>{
  switch(day) {
    case 'monday':
        return 8;
      break;
    case 'tuesday':
        return 7;
      break;
    case 'wednesday':
        return 8
      break;
    case 'thursday':
        return 5;
      break;
    case 'friday':
        return 7;
      break;
    default:
      break;
  }
}

const getActualSleepHours=()=>{
  getSleepHours('wednesday')
}

const getIdealSleepHours =()=>{
  const idealHours = 7;
  return idealHours * 7;
}