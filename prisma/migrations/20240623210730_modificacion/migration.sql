/*
  Warnings:

  - You are about to drop the column `diciplina` on the `Implemento` table. All the data in the column will be lost.
  - Added the required column `disciplina` to the `Implemento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Implemento" DROP COLUMN "diciplina",
ADD COLUMN     "disciplina" "TipoImplemento" NOT NULL;
