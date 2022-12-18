import SendNotification from './send-notification';

import InMemoryNotificationsRepository from '@test/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  const notificationsRepository = new InMemoryNotificationsRepository();

  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
