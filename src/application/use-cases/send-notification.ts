import Content from '../../domain/value-objects/content';
import Notification from '../../domain/entities/notification';

type Input = {
  recipientId: string;
  content: string;
  category: string;
};

type Output = {
  notification: Notification;
};

export default class SendNotification {
  async execute(request: Input): Promise<Output> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    return { notification };
  }
}
