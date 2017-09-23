const tabControlState = {
  currentTab: 'search',
}

function changeTab(state = tabControlState, action) {
  switch(action.type) {
    case 'ON_SEARCH_TAB' :
      return {
        ...state,
        currentTab: 'search'
      }

    case 'ON_SORT_TAB' :
      return {
        ...state,
        currentTab: 'sort'
      }

    default:
      return state;
  }
}

export default changeTab;
