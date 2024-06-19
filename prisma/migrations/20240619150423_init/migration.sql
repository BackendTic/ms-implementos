/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Order";

-- CreateTable
CREATE TABLE "Implemento" (
    "id" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Implemento_pkey" PRIMARY KEY ("id")
);
