-- CreateTable
CREATE TABLE "cardinal_users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cardinal_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cardinal_user_sessions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "ip_address" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cardinal_user_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cardinal_user_accounts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "account_id" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "access_token_expires_at" TIMESTAMP(3) NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "refresh_token_expires_at" TIMESTAMP(3) NOT NULL,
    "scope" TEXT NOT NULL,
    "id_token" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cardinal_user_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cardinl_user_verifications" (
    "id" SERIAL NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cardinl_user_verifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cardinal_users_email_key" ON "cardinal_users"("email");

-- AddForeignKey
ALTER TABLE "cardinal_user_sessions" ADD CONSTRAINT "cardinal_user_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "cardinal_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cardinal_user_accounts" ADD CONSTRAINT "cardinal_user_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "cardinal_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
