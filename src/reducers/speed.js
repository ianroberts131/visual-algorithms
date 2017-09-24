const speedState = {
  speedString: "regular",
  regularActive: true,
  slowActive: false,
  fastActive: false,
  intervalSpeed: 1000
}

function speed(state = speedState, action) {
  switch(action.speed) {
    case 'slow' :
      return {
        ...state,
        speedString: "slow",
        regularActive: false,
        slowActive: true,
        fastActive: false,
        intervalSpeed: 2000
      }
    case 'regular' :
      return {
        ...state,
        speedString: "regular",
        regularActive: true,
        slowActive: false,
        fastActive: false,
        intervalSpeed: 1000
      }
    case 'fast' :
      return {
        ...state,
        speedString: "fast",
        regularActive: false,
        slowActive: false,
        fastActive: true,
        intervalSpeed: 500
      }
    default :
      return state;
  }
}

export default speed;
