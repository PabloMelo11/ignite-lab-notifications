import ReadNotification from './read-notifications';

import InMemoryNotificationsRepository from '@test/repositories/in-memory-notifications-repository';
import NotificationNotFound from './errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('Read notification', () => {
  const notificationsRepository = new InMemoryNotificationsRepository();

  it('should be able to cancel a notification', async () => {
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const readNotification = new ReadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
