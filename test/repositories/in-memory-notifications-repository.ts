import Notification from 'src/domain/entities/notification';
import NotificationsRepository from 'src/domain/repositories/notifications-repository';

export default class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
