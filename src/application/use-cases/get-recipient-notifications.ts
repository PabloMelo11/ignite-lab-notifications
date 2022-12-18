import { Injectable } from '@nestjs/common';
import NotificationsRepository from '@domain/repositories/notifications-repository';
import Notification from '@domain/entities/notification';

type Input = {
  recipientId: string;
};

type Output = {
  notifications: Notification[];
};

@Injectable()
export default class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: Input): Promise<Output> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
