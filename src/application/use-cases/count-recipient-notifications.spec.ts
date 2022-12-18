import CountRecipientNotifications from './count-recipient-notifications';

import InMemoryNotificationsRepository from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  const notificationsRepository = new InMemoryNotificationsRepository();

  it('should be able to count recipient notifications', async () => {
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    const recipientId = 'recipient-1';

    await notificationsRepository.create(makeNotification({ recipientId }));
    await notificationsRepository.create(makeNotification({ recipientId }));
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId,
    });

    expect(count).toBe(2);
  });
});
