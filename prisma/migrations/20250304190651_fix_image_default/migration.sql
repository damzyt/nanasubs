/*
  Warnings:

  - The primary key for the `cardinal_user_accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cardinal_user_sessions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cardinal_user_verifications` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cardinal_users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "cardinal_user_accounts" DROP CONSTRAINT "cardinal_user_accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "cardinal_user_sessions" DROP CONSTRAINT "cardinal_user_sessions_user_id_fkey";

-- AlterTable
ALTER TABLE "cardinal_user_accounts" DROP CONSTRAINT "cardinal_user_accounts_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "access_token" DROP NOT NULL,
ALTER COLUMN "access_token_expires_at" DROP NOT NULL,
ALTER COLUMN "refresh_token" DROP NOT NULL,
ALTER COLUMN "refresh_token_expires_at" DROP NOT NULL,
ALTER COLUMN "scope" DROP NOT NULL,
ALTER COLUMN "id_token" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "cardinal_user_accounts_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cardinal_user_accounts_id_seq";

-- AlterTable
ALTER TABLE "cardinal_user_sessions" DROP CONSTRAINT "cardinal_user_sessions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "ip_address" DROP NOT NULL,
ALTER COLUMN "user_agent" DROP NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "cardinal_user_sessions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cardinal_user_sessions_id_seq";

-- AlterTable
ALTER TABLE "cardinal_user_verifications" DROP CONSTRAINT "cardinal_user_verifications_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "cardinal_user_verifications_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cardinal_user_verifications_id_seq";

-- AlterTable
ALTER TABLE "cardinal_users" DROP CONSTRAINT "cardinal_users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" SET DEFAULT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "cardinal_users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cardinal_users_id_seq";

-- AddForeignKey
ALTER TABLE "cardinal_user_sessions" ADD CONSTRAINT "cardinal_user_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "cardinal_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cardinal_user_accounts" ADD CONSTRAINT "cardinal_user_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "cardinal_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
