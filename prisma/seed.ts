import { ChargerType, PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Create Users
  await prisma.user.create({
    data: {
      clerkId: "clerk_001",
      email: "admin@evhub.in",
      name: "Admin EVHub",
      role: UserRole.ADMIN,
    },
  });

  const owner1 = await prisma.user.create({
    data: {
      clerkId: "clerk_002",
      email: "owner1@evhub.in",
      name: "Sundar Raj",
      role: UserRole.STATIONOWNER,
    },
  });

  const owner2 = await prisma.user.create({
    data: {
      clerkId: "clerk_003",
      email: "owner2@evhub.in",
      name: "Meena Iyer",
      role: UserRole.STATIONOWNER,
    },
  });

  const user1 = await prisma.user.create({
    data: {
      clerkId: "clerk_004",
      email: "user1@example.com",
      name: "Arun Kumar",
      role: UserRole.USER,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      clerkId: "clerk_005",
      email: "user2@example.com",
      name: "Divya N",
      role: UserRole.USER,
    },
  });

  // Create Stations
  const station1 = await prisma.station.create({
    data: {
      name: "Adyar FastCharge",
      address: "LB Road, Adyar, Chennai - 600020",
      isAvailable: true,
      ownerId: owner1.id,
    },
  });

  const station2 = await prisma.station.create({
    data: {
      name: "T-Nagar EV Point",
      address: "Usman Road, T-Nagar, Chennai - 600017",
      isAvailable: true,
      ownerId: owner2.id,
    },
  });

  const station3 = await prisma.station.create({
    data: {
      name: "OMR ChargeHub",
      address: "OMR, Thoraipakkam, Chennai - 600096",
      isAvailable: false,
      ownerId: owner1.id,
    },
  });

  // Create Bookings
  await prisma.booking.createMany({
    data: [
      {
        userId: user1.id,
        stationId: station1.id,
        slot: new Date("2025-03-25T10:00:00+05:30"),
        charger: ChargerType.KW120,
      },
      {
        userId: user2.id,
        stationId: station2.id,
        slot: new Date("2025-03-25T11:30:00+05:30"),
        charger: ChargerType.KW20,
      },
      {
        userId: user1.id,
        stationId: station3.id,
        slot: new Date("2025-03-26T09:00:00+05:30"),
        charger: ChargerType.KW150,
      },
    ],
  });

  console.log("✅ Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
