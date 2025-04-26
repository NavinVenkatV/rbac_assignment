/*
  Warnings:

  - You are about to drop the column `slug` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `blogDp` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainImage` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitle` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "slug",
DROP COLUMN "updateAt",
ADD COLUMN     "blogDp" TEXT NOT NULL,
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "mainImage" TEXT NOT NULL,
ADD COLUMN     "subtitle" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
