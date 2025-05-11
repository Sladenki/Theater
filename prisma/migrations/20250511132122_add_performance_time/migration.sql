/*
  Warnings:

  - Added the required column `performanceTime` to the `Performance` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Performance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "performanceTime" DATETIME NOT NULL
);
INSERT INTO "new_Performance" ("author", "description", "id", "image", "title") SELECT "author", "description", "id", "image", "title" FROM "Performance";
DROP TABLE "Performance";
ALTER TABLE "new_Performance" RENAME TO "Performance";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
