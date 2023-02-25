import { createTRPCRouter, protectedProcedure, adminProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getAll: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  /*
  makeMeOwner: protectedProcedure.mutation(async ({ ctx }) => {
    const user = await ctx.prisma.user.update({
      where: { id: ctx.session.user.id },
      data: { role: "Owner" },
    });
    return user;
  }),
  */
});
