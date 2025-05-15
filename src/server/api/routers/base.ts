import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const baseRouter = createTRPCRouter({
  // GET all bases for the logged-in user
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.base.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { lastAccessed: "desc" },
    });
  }),

  // CREATE a new base
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.base.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),

  // UPDATE last accessed
  touch: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.base.update({
        where: { id: input.id },
        data: { lastAccessed: new Date() },
      });
    }),
});
