/*
  Warnings:

  - The values [PING_PONG] on the enum `TipoImplemento` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TipoImplemento_new" AS ENUM ('FUTBOL', 'BASKET', 'VOLEY', 'TENNIS', 'FUTBOL_SALA', 'OTROS', 'ATLETISMO');
ALTER TABLE "Implemento" ALTER COLUMN "disciplina" TYPE "TipoImplemento_new" USING ("disciplina"::text::"TipoImplemento_new");
ALTER TYPE "TipoImplemento" RENAME TO "TipoImplemento_old";
ALTER TYPE "TipoImplemento_new" RENAME TO "TipoImplemento";
DROP TYPE "TipoImplemento_old";
COMMIT;
