import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const tweetRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ ctx, input: { content } }) => {
      return await ctx.prisma.tweet.create({
        data: {
          content,
          userId: ctx.session.user.id,
        },
      });
    }),
});
