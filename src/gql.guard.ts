import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  getRequest(ctx: ExecutionContext) {
    const gql = GqlExecutionContext.create(ctx);
    const req = gql.getContext().req;
    req.body = { ...req.body, ...req.body.variables };
    return req;
  }
}