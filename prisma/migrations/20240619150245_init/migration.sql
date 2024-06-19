-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
