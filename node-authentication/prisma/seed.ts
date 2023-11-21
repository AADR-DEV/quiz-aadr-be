import { prisma } from '../src/lib/prisma';

async function main() {
  const starterPack = await prisma.diamondCategory.upsert({
    where: {
      name: 'starter_pack',
    },
    update: {},
    create: {
      name: 'starter_pack',
      amount: 100,
      price: 10000,
    },
  });

  const elitePack = await prisma.diamondCategory.upsert({
    where: {
      name: 'elite_pack',
    },
    update: {},
    create: {
      name: 'elite_pack',
      amount: 200,
      price: 20000,
    },
  });

  const royalPack = await prisma.diamondCategory.upsert({
    where: {
      name: 'royal_pack',
    },
    update: {},
    create: {
      name: 'royal_pack',
      amount: 300,
      price: 30000,
    },
  });

  const mysticPack = await prisma.diamondCategory.upsert({
    where: {
      name: 'mystic_pack',
    },
    update: {},
    create: {
      name: 'mystic_pack',
      amount: 500,
      price: 50000,
    },
  });

  const rarePack = await prisma.diamondCategory.upsert({
    where: {
      name: 'rare_pack',
    },
    update: {},
    create: {
      name: 'rare_pack',
      amount: 1000,
      price: 100000,
    },
  });

  const ultraRarePack = await prisma.diamondCategory.upsert({
    where: {
      name: 'ultra_rare_pack',
    },
    update: {},
    create: {
      name: 'ultra_rare_pack',
      amount: 1500,
      price: 150000,
    },
  });

  console.log({
    starterPack,
    elitePack,
    royalPack,
    mysticPack,
    rarePack,
    ultraRarePack,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
