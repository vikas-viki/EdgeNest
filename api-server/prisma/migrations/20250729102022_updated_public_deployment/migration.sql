/*
  Warnings:

  - Added the required column `gitURL` to the `publicDeployments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "publicDeployments" ADD COLUMN     "gitURL" TEXT NOT NULL,
ADD COLUMN     "live" BOOLEAN NOT NULL DEFAULT true;
