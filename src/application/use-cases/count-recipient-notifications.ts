import { Injectable } from '@nestjs/common';
import NotificationsRepository from '@domain/repositories/notifications-repository';

type Input = {
  recipientId: string;
};

type Output = {
  count: number;
};

@Injectable()
export default class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: Input): Promise<Output> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
