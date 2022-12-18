import CountRecipientNotifications from './count-recipient-notifications';

import InMemoryNotificationsRepository from '@test/repositories/in-memory-notifications-repository';
import Content from '@domain/value-objects/content';
import Notification from '@domain/entities/notification';

describe('Count recipient notifications', () => {
  const notificationsRepository = new InMemoryNotificationsRepository();

  it('should be able to count recipient notifications', async () => {
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    const recipientId = 'recipient-1';

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('This is a notification'),
        recipientId,
      }),
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('This is a notification'),
        recipientId,
      }),
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('This is a notification'),
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId,
    });

    expect(count).toBe(2);
  });
});
