import { Injectable } from '@nestjs/common';
import NotificationsRepository from '@domain/repositories/notifications-repository';
import NotificationNotFound from './errors/notification-not-found';

type Input = {
  notificationId: string;
};

@Injectable()
export default class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: Input): Promise<void> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
