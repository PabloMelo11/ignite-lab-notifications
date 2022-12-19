import { Module } from '@nestjs/common';
import KafkaConsumerService from './kafka/kafka-consumer.service';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
})
export class MessagingModule {}
