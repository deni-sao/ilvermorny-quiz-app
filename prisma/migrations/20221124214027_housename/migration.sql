/*
  Warnings:

  - Added the required column `house` to the `UserHouse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserHouse" ADD COLUMN     "house" TEXT NOT NULL;
