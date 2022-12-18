import { Module } from '@nestjs/common';
import NotificationsRepository from '../../domain/repositories/notifications-repository';
import PrismaNotificationsRepository from './repositories/prisma/prisma-notifications-repository';
import { PrismaService } from './repositories/prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
