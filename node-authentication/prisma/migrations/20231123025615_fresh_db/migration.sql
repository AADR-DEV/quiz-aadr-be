-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "main_avatar" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diamond_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "diamond_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avatar_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "avatar_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diamonds" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "diamondCategoryId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "diamonds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avatars" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "avatarCategoryId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "avatars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "diamond_categories_name_key" ON "diamond_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "avatar_categories_name_key" ON "avatar_categories"("name");

-- AddForeignKey
ALTER TABLE "diamonds" ADD CONSTRAINT "diamonds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diamonds" ADD CONSTRAINT "diamonds_diamondCategoryId_fkey" FOREIGN KEY ("diamondCategoryId") REFERENCES "diamond_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatars" ADD CONSTRAINT "avatars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatars" ADD CONSTRAINT "avatars_avatarCategoryId_fkey" FOREIGN KEY ("avatarCategoryId") REFERENCES "avatar_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
