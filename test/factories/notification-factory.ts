import Notification, { NotificationProps } from '@domain/entities/notification';
import Content from '@domain/value-objects/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('This is a notification'),
    recipientId: 'example-recipient-id',
    ...override,
  });
}
