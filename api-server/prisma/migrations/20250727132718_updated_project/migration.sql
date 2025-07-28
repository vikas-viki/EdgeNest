/*
  Warnings:

  - You are about to drop the column `status` on the `deployment` table. All the data in the column will be lost.
  - Added the required column `status` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deployment" DROP COLUMN "status",
ADD COLUMN     "latest" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "project" ADD COLUMN     "env" TEXT,
ADD COLUMN     "status" "DeploymentStatus" NOT NULL;
