import Notification from '../entities/notification';

export default abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
