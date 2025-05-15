/*
  Warnings:

  - You are about to drop the column `name` on the `Base` table. All the data in the column will be lost.
  - Added the required column `title` to the `Base` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Base" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;
