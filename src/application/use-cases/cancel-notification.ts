import { Injectable } from '@nestjs/common';
import NotificationsRepository from '@domain/repositories/notifications-repository';
import NotificationNotFound from './errors/notification-not-found';

type Input = {
  notificationId: string;
};

@Injectable()
export default class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: Input): Promise<void> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
