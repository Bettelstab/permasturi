import { ownerProcedure } from "./../trpc";
import { createTRPCRouter, adminProcedure } from "../trpc";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  getAll: adminProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  setRole: ownerProcedure
    .input(
      z.object({ id: z.string(), role: z.enum(["User", "Admin", "Owner"]) })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.update({
        where: { id: input.id },
        data: { role: input.role },
      });
      return user;
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
