import { prisma } from '../src/lib/prisma';

async function main() {
  const norman = await prisma.user.upsert({
    where: {
      email: 'norman@mail.com',
    },
    update: {},
    create: {
      name: 'Norman',
      username: 'norm444n',
      email: 'norman@mail.com',
      mainAvatar:
        'https://lh3.google.com/u/0/d/1AX57dFoG55JviUWnMLojKn55ahzCbIuz=w1366-h660-iv1',
    },
  });

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

  const freeDog = await prisma.avatarCategory.upsert({
    where: {
      name: 'free_dog',
    },
    update: {},
    create: {
      name: 'free_dog',
      url: 'https://lh3.google.com/u/0/d/1AX57dFoG55JviUWnMLojKn55ahzCbIuz=w1366-h660-iv1',
      type: 'free',
      price: 0,
    },
  });

  const freeHen = await prisma.avatarCategory.upsert({
    where: {
      name: 'free_hen',
    },
    update: {},
    create: {
      name: 'free_hen',
      url: 'https://lh3.google.com/u/0/d/12WvWQD4UpkaT5IedDHz-Z-Oesqiz61Oo=w811-h660-iv1',
      type: 'free',
      price: 0,
    },
  });

  const freeHorse = await prisma.avatarCategory.upsert({
    where: {
      name: 'free_horse',
    },
    update: {},
    create: {
      name: 'free_horse',
      url: 'https://lh3.google.com/u/0/d/1L_tUmFyQ1LbClFnzsoFSNYUeeLtwazio=w811-h660-iv1',
      type: 'free',
      price: 0,
    },
  });

  const freeOwl = await prisma.avatarCategory.upsert({
    where: {
      name: 'free_owl',
    },
    update: {},
    create: {
      name: 'free_owl',
      url: 'https://lh3.google.com/u/0/d/13GEXrO8z8PPkWslmiktZmxg0BSCLlTXH=w811-h660-iv1',
      type: 'free',
      price: 0,
    },
  });

  const freeZebra = await prisma.avatarCategory.upsert({
    where: {
      name: 'free_zebra',
    },
    update: {},
    create: {
      name: 'free_zebra',
      url: 'https://lh3.google.com/u/0/d/11lsRPwyFtfYWcYyOTZUEitXYm01Z7GW-=w811-h660-iv1',
      type: 'free',
      price: 0,
    },
  });

  const premiumPenguin = await prisma.avatarCategory.upsert({
    where: {
      name: 'premium_penguin',
    },
    update: {},
    create: {
      name: 'premium_penguin',
      url: 'https://lh3.google.com/u/0/d/1BjpHg0roXuA6iQSHk6J90nfUk-UUvBrm=w811-h660-iv1',
      type: 'free',
      price: 2000,
    },
  });

  const premiumRabbit = await prisma.avatarCategory.upsert({
    where: {
      name: 'premium_rabbit',
    },
    update: {},
    create: {
      name: 'premium_rabbit',
      url: 'https://lh3.google.com/u/0/d/1j5eDK5lAu7Ofk_mtg0oFIY05Oy_4OkXl=w811-h660-iv1',
      type: 'premium',
      price: 3500,
    },
  });

  const premiumCat = await prisma.avatarCategory.upsert({
    where: {
      name: 'premium_cat',
    },
    update: {},
    create: {
      name: 'premium_cat',
      url: 'https://lh3.google.com/u/0/d/1sTTJssvDADNWs8BEESQSs8WkOV_jQt_h=w811-h660-iv1',
      type: 'premium',
      price: 4000,
    },
  });

  const premiumDog = await prisma.avatarCategory.upsert({
    where: {
      name: 'premium_dog',
    },
    update: {},
    create: {
      name: 'premium_dog',
      url: 'https://lh3.google.com/u/0/d/1jCwrUvVBl6WkvrxYr7JpjJqACvakzFG7=w811-h660-iv1',
      type: 'premium',
      price: 5500,
    },
  });

  const premiumLion = await prisma.avatarCategory.upsert({
    where: {
      name: 'premium_lion',
    },
    update: {},
    create: {
      name: 'premium_lion',
      url: 'https://lh3.google.com/u/0/d/1apn-ntOl7AyuGP9w5lRUJk-eEwYHT9Rr=w1366-h660-iv1',
      type: 'premium',
      price: 6000,
    },
  });

  console.log({
    norman,
    starterPack,
    elitePack,
    royalPack,
    mysticPack,
    rarePack,
    ultraRarePack,
    freeDog,
    freeHen,
    freeHorse,
    freeOwl,
    freeZebra,
    premiumPenguin,
    premiumRabbit,
    premiumCat,
    premiumDog,
    premiumLion,
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
