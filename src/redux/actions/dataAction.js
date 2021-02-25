const setDataAction = (data) => ({
  type: 'SET_DATA',
  data,
});
const resetDataAction = () => ({
  type: 'RESET_DATA',
});

export {setDataAction, resetDataAction};
