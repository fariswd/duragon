const changeStatus = (status) => {
  return {
    type: 'STATUS_CHANGE',
    status: status
  }
}

export default {
  changeStatus
}
