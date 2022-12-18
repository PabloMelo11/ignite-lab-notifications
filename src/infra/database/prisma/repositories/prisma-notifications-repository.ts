import { Injectable } from '@nestjs/common';
import Notification from 'src/domain/entities/notification';
import NotificationsRepository from '@domain/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notifications-mapper';

@Injectable()
export default class PrismaNotificationsRepository
  implements NotificationsRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
