const speedState = {
  speed: "regular",
  regularActive: true,
  slowActive: false,
  fastActive: false,
  intervalSpeed: 1000
}


function speed(state = speedState, action) {
  switch(action.speed) {
    case 'slow' :
      console.log("It is slow!");
      console.log(action.speed);
      return {
        ...state,
        speed: "slow",
        regularActive: false,
        slowActive: true,
        fastActive: false,
        intervalSpeed: 2000
      }
    case 'regular' :
      return {
        ...state,
        speed: "regular",
        regularActive: true,
        slowActive: false,
        fastActive: false,
        intervalSpeed: 1000
      }
    case 'fast' :
      return {
        ...state,
        speed: "fast",
        regularActive: false,
        slowActive: false,
        fastActive: true,
        intervalSpeed: 200
      }
    default :
      return state;
  }
}

export default speed;