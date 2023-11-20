import { prisma } from '../src/lib/prisma';

async function main() {
  const starterPack = await prisma.diamondCategory.upsert({
    where: {
      name: 'Starter Pack',
    },
    update: {},
    create: {
      name: 'Starter Pack',
      amount: 100,
      price: 10000,
    },
  });

  const elitePack = await prisma.diamondCategory.upsert({
    where: {
      name: 'Elite Pack',
    },
    update: {},
    create: {
      name: 'Elite Pack',
      amount: 200,
      price: 20000,
    },
  });

  const royalPack = await prisma.diamondCategory.upsert({
    where: {
      name: 'Royal Pack',
    },
    update: {},
    create: {
      name: 'Royal Pack',
      amount: 300,
      price: 30000,
    },
  });

  const mysticPack = await prisma.diamondCategory.upsert({
    where: {
      name: 'Mystic Pack',
    },
    update: {},
    create: {
      name: 'Mystic Pack',
      amount: 500,
      price: 50000,
    },
  });

  const rarePack = await prisma.diamondCategory.upsert({
    where: {
      name: 'Rare Pack',
    },
    update: {},
    create: {
      name: 'Rare Pack',
      amount: 1000,
      price: 100000,
    },
  });

  const ultraRarePack = await prisma.diamondCategory.upsert({
    where: {
      name: 'Ultra Rare Pack',
    },
    update: {},
    create: {
      name: 'Ultra Rare Pack',
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
