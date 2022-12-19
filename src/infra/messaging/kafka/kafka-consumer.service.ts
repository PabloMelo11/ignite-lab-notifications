import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export default class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['legal-airedale-12753-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bGVnYWwtYWlyZWRhbGUtMTI3NTMk-yIhL_yyhOQeHt9sCLH0JE6CErexSyyIvvw',
          password:
            'IiUK0TbUWU6RYl14FzGtaXHX2jCTEQus1MaHv5GsmBnzvq7ODbWLta7GwZA2GGUSM3nqxg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
