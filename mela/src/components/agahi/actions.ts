// Bismillahirrahmanirahim
// Elhamdu lillahi rabbil alamin
// Esselatu vesselamu ala rasulillah 
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber


"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getAgahiInclude } from "@/lib/types";

export async function deletePost(id: string) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const post = await prisma.agahi.findUnique({
    where: { id },
  });

  if (!post) throw new Error("Post not found");

  if (post.userId !== user.id) throw new Error("Unauthorized");

  const deletedPost = await prisma.agahi.delete({
    where: { id },
    include: getAgahiInclude(user.id),
  });

  return deletedPost;
}
