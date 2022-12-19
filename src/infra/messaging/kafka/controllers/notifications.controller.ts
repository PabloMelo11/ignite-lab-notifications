import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import SendNotification from '@application/use-cases/send-notification';

type MessagePayload = {
  content: string;
  category: string;
  recipientId: string;
};

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() message: MessagePayload) {
    await this.sendNotification.execute({
      category: message.category,
      content: message.content,
      recipientId: message.recipientId,
    });
  }
}
