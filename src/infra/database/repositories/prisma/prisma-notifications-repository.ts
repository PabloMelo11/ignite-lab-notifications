import { Injectable } from '@nestjs/common';
import Notification from 'src/domain/entities/notification';
import NotificationsRepository from '../../../../domain/repositories/notifications-repository';
import { PrismaService } from './prisma.service';

@Injectable()
export default class PrismaNotificationsRepository
  implements NotificationsRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
