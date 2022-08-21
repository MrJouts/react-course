const Notification = ({notification}) => {
  if (!notification) {
    return null
  } 

  const notificationClass = notification.status === 'success' ? 'success' : 'error'

  return (
    <div className={'notification notification-' + notificationClass}>{notification.message}</div>
  )
}

export default Notification