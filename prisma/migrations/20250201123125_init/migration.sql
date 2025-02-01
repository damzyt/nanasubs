/*
  Warnings:

  - You are about to drop the `cardinl_user_verifications` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "cardinl_user_verifications";

-- CreateTable
CREATE TABLE "cardinal_user_verifications" (
    "id" SERIAL NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cardinal_user_verifications_pkey" PRIMARY KEY ("id")
);
