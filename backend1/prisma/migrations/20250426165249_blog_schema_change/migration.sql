-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "likes" DROP NOT NULL,
ALTER COLUMN "tags" DROP NOT NULL,
ALTER COLUMN "tags" SET DATA TYPE TEXT,
ALTER COLUMN "views" DROP NOT NULL;
