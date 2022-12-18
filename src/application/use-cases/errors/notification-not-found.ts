export default class NotificationNotFound extends Error {
  constructor() {
    super('Notification not found.');
  }
}
