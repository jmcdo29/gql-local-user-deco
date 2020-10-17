import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignUp {
  @Field()
  email: string;

  @Field()
  password: string;
}
