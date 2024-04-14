import { Module } from '@nestjs/common';

import { DbModule } from '@db/db.module';

@Module({
  imports: [DbModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
