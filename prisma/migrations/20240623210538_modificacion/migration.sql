/*
  Warnings:

  - You are about to drop the column `descripcion` on the `Implemento` table. All the data in the column will be lost.
  - Added the required column `diciplina` to the `Implemento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Implemento` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoImplemento" AS ENUM ('FUTBOL', 'BASKET', 'VOLEY', 'TENNIS', 'PING_PONG');

-- AlterTable
ALTER TABLE "Implemento" DROP COLUMN "descripcion",
ADD COLUMN     "diciplina" "TipoImplemento" NOT NULL,
ADD COLUMN     "imagen" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "nombre" TEXT NOT NULL;
