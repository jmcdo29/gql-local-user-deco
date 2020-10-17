import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Message } from './app.model';
import { CurrentUser } from './current-user.decorator';
import { GqlAuthGuard } from './gql.guard';
import { SignUp } from './signup.model';

@Resolver()
export class AppResolver {

  @Query(() => Message)
  sayHi() {
    return { message: 'Hello World' };
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Message)
  login(@Args('login') login: SignUp, @CurrentUser() user: Record<string, any>) {
    console.log(user);
    return { message: 'Success' };
  }
}
