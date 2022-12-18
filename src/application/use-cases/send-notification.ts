import { Injectable } from '@nestjs/common';
import Content from '@domain/value-objects/content';
import Notification from '@domain/entities/notification';
import NotificationsRepository from '@domain/repositories/notifications-repository';

type Input = {
  recipientId: string;
  content: string;
  category: string;
};

type Output = {
  notification: Notification;
};

@Injectable()
export default class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: Input): Promise<Output> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
