import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { BankAccountsResolver } from './modules/bank-accounts/bank-accounts.resolver';
import { BankAccountsModule } from './modules/bank-accounts/bank-accounts.module';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule, CategoriesModule, BankAccountsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    BankAccountsResolver,
  ],
})
export class AppModule {}
