import CancelNotification from './cancel-notification';

import InMemoryNotificationsRepository from '@test/repositories/in-memory-notifications-repository';
import NotificationNotFound from './errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel notification', () => {
  const notificationsRepository = new InMemoryNotificationsRepository();

  it('should be able to cancel a notification', async () => {
    const sendNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await sendNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const sendNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return sendNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
