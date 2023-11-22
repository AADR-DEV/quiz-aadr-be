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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDwZIRQ_xXjKTB69UJwiVjwZ_I2AeL4k6m7vsjPcxw6BHL_GzFdFvHcnukp3SaG5drMVguYX8h4srT-ATpUNIaDGRjnewa2Zft7vxKBUROYXQCYMFmA1Q8DMcW1FBPgwfwxOBoUP60WuUbR64jmgL_-CjfkAiDJ92ybuN10Nu5JkYl4PRB5-NL_YOx223ydEzEcHgzquvHIbRkXQ_J37y9qjAl-XAqQvke7K3absQ7_H8uW3AvbpSaVX5gdCSblpA-cf1N_JmThXXlNdYF6APBi7lUO4mcBN-S8_8unIQVXc2BGRyofIdYjRAsGAiL0gk2iWOU4T2D0oTEAaXA6Hnx6QoDD5ScyeJmLEJbrKqrVfha3PZ2CRlSn_q4xSnxGVaz5oozVTnXBXvaM2Fbd8Pj0chKuLe4xUrt9zX1pvflzZBoVOd2zuPrOd7R0xsa6hnNq4O9JwQCrao0QtAiaAqK5Xr0ddwSFlHvSuQEhaUV-Mb35iCEKrfW5Xxls0YsUUoTg5yN5LD8PiBviiYcCx-ZaN88anMMXd8sz7z5uYpSJwCt90acIyfFsMyfIMlKjZmm_rQDY9lEHGfcsMWKSJnZmJmBdvVPfzcvTVHCM2kmh8Kn3E-tjbqvO7a55KRYP_UHcdm0x3RI4I92NIKBbJlU_sOOvcFHWqqDF7WKN0E1f2xN0jKsSTlozSD--8pzD0IdSoSK9xvnp0EqFAK8MqtglD7AJPmLQXcpEF0r35eptvg-s_2YVJL-h_JLqHovt0RTG4OsJwa9ZRY9-LntvsqLMju8tIeEdvnUFJ6AjykXbL0LpxvMF1IRXs--DwwvcteuOlbJnwi2UqT0PrltYusOVhb-tfzCw3xx7eBLn9wZxJywJEpJ3shYxEtfxddiT9Jgqalpsk7sNnQH1RpVmLu-UvaTTriNNCZ4E3mfNP8JunB7ul0syB2psb_ezxQcZsZ4wJIXHKvusMLNUEFBWTs1dEGrhEKYg_33f0M_rLJHSSKQ3fMM8-d2KOlPj5GHEA02VBskOzgsvx4ISI6L_ysGRBq4-lv7-tbdHSoc4m3KUczox0evO671CIsKmB2wsNfIf06mr0jBS_F3vIrr00BnGfZiDqTGvkTgLWIEGcXPNZlYSWDNhCbX8x4klqH3rVYr0xarbXo2bU5z6t7wE6MqLXY3lM_CRyIrFdlUoIZyMElY5NvvRNKcnrV4jDFzW1DtYRjdKfAhsFshTFB0nCxh_Vb7_m-0PXG3t189fik9L4720FCpAN1GtlZ8yxdvsFzUtpYvFz1ha4CWPsClVsiNCPJCfPnCYVBOGhvqcGxDxSpIq2VrGz-zcFbsWc463pGvATUHetjSlRrwi3wTrCECBinXpqFE_s1UXE2W5SHD937xUqdcPxjMPwPSPpt0f11Z3O5lhUaSeAl2ctS3e9zHfRdID8AZpHi6Eyb54bB4X5k1v6Fc57FnWj38Xc-nmyJWlKq-UO5aSG9IklQ369CQM2Wzzd8no9yCwxSt91dSLOwFCHCdG34LTbnGdEjILhj-U8KVWZDKnbmA=w1366-h660',
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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDydIzK8RWwW1fLrmUFZ63gjxVdbBj4WlqjcPx4_OxS7l8duE4vbzYlKyUX-f4_ZrS-NjlCIpIVHojVECDIYQaYLjLB-e0377yXyVze9CFAKrh27WqxjQK-fZGZx-xJS0BYjsHicEF5lohPp6Xxn1y_1Z5ko_S6vzL4bqHKetswXY23G1FWoNrCCYsQkhOxY4vNAGNkbbRv__6VdF4zhz7Yed5gNJ46M8Ff4suiZV2df6_WTyNjSNuWdSvAs8c3q5TLv8ysydQ1CXX_QuipK0_mKFGIHhCToXyoIsy_ScWxPOrlvsM-yg_-qezR4L64Das-nnvTEwcDHanvnsJFHhBUL7XpNodGgUGcdL5NH9Pzo4y3a4BIlEGU27OshVCUjLNaWSOpg3_16fqjkD3mqjYORV8nrrfEBvhloyd5BEPgtAGcCXD9hq55JlJKNjSCoyn2sSGqmNJU5Q5a9RqdsQwxjKkyUZsIQ8Xob8DgCtNw1P881lTsFc5uBfkZvm83IRQzjLdn-yF2S4KbDykgD1BfQ7ER-FM6g7ChlEZkgXmp7-yiPeKcxKOhKcoPWQM8b61-ByJnbt23KLmIH4rwcIurM_3zGAIKJVaqN-ARDeGzNUtsMmcB5Hw9Rm5jds808GqVe5ARw6be0OAp0jNHnYvCZGN4oyqzIyt0Mqnc7oRMOkE1syXDbVDRzUJ6vAy_GZFEuH5Y9kdy8QOmVl-Fr3q3bKoqD-8HrV8knK1n1qM4Z16HG-F-YpdTFT8_5C2Kbsz4-ppFPAHEgIRFwwAbwx40N1gvAKV7dT17xE9-A0sr7wyr5nZH0IOgjP9wkAY7wW-raobRWt8mCdtEG7iiumSvijdfOw68hs89X3obVWmMtEDDMFxVV2SjZOgvvvf_8R4rWk_p95oDq7aoijmlgTZdA7YWJ1cEByejHrArRLoyNq9pjKGUrGgcmIb4EXf0fRDQtObsoBupOrWNBSR9fBmdXRiH37larmYGmt_24883KImjGrXG3uNuKECbLkrvhEv8HCffuiPSROCgLTTJF_Cr38oRmi6BoPjagNZtxlzKfimsjl0slj5QNVVvvwRaG2zkHmSe9sigmIabQlbP5AvSDQJJPBUeiVx8TOUAw061NsLFAYJzRxbKVQEYVx84mNtUq4EVKHhHpcsoApunhzLG3lm0QUZwKz1y7nbFgv_vueVS45dC_N-DS1MI7vrXBNI6RSs7CjGwb_QWZrz6N-17BdfBoUM6ORpOHNthqWgfc5xr6kJdm3dYwNAP5hZ1u0c2KA4yK0EeaqV0pJwt_dUHxfD_vWNLj6r-InceWgG-cXS58PtNPA2O_FXDtCqQJ5xIoEIhy_rGy5d0wuzDHZ02jTFPHZADg0tm7rG88ibkftHJauk-yWj6f_PlsAdME8qRK9bUgyVJ6B3dKAoWA2JVUPLb6pnAry_48aCZJcfahCB40ZkaHAIVfus6AbeA65wkoWKKp3ity7Q4TNWwknlB-HST4PnYGj1SgOODmQcBLy8G7s_m0U0kPUbWYe-apzBE3o-5z8_A8Dg=w811-h660',
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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDx2IWaQMYWAc1V1PQI4DXAJInOFngu1kL_gcoPCheCurA78yEexBgMA40usiCMAuJ2wd-RMcjc3T8XbpLq8235x1qekixkL6mRpzWRrPbLKxBD8fkgqd1T_4Pq4NQjlWD_eHT02vzi1rY0VUY-XG7tIlh3z5XJoy0VvqlU2UcBEicm7RFcdneMXBtwkKASkfskh4m_WOyCouc8uPk75r9EIaGV1lcItnowfB9WePhgIGn5k0h6cQIQAE71Pu9Kk1jRzWBxHaZd32fghVGBVNZdVGMTJVqmB_9U0bLezLNEKd1vrUltDTzi-_KfwxUuvTR8W7vaw3R-Sdp1Ex5U4yu65VWcvC9pMMBuNe1_ov6P0QDb_xanax660vMWP5mKnOI4RgFwbbF9CkjbGfU2rvAWTLqByJgIZbk_f_zVYF0pJBGj1pufmtnDUJZSFxH79VduBgY44tjtygPAm3b-E2VyROd6Dgm1evDY1_LIez95YIy-UZz8mtrA3eJdvTdHwHCKR7NzqDO8e2sIh0WAyrDI8OkAOoA35yK2U88XX6vu-9vVkj9nd8kDahGT07YTC_nNMu4cPTeQqzrsVbEOMeLpAbD38F79CbL4W-5wZ1n7XzOHwAAgmgwmkzV0ACaFWRbCWRs0E7TEimTCRlNXv8mgHzW5Ix123JI-6VT5DN0jjCwfMkyjActQZbkxVueloW60DcgJL15iMtczrJZTNYYEMTin3v2xiPo0oxhzwwD633gWAJhX2kQtp9z0ORxr-qKPGBxoI9Uifj1rqerQHm0NdbiLAhIqObCKHOGn2fh7PSqHud40wD9HkVJB0rLbWwZSiScjFEvZDt-HL-3lg6N3jONP4uRg9O5SQv39IS0qnZWrz9CXL3zdNnvvhTbLo8Zo43BHAttuo_2nu_jkr1TGhrONtyDEXqeVJqMqKp9QmuCMvdh4RldR44ySaLW_rp7MoW0dZKT5ZX-IfkJODpy4JNtA5x4wJbZaN20b7YCst8oskWaeAJR2jm6W3lk7NpjhSv4roicaDYHOIGtFJ-IVwC9ASJ6zOPNMEBgS6Qas_4aMFGi6nqYs8XjO_0B93lPd0z3RL1wBc139CxV0pC-D4eNWTQlCzHsUDwoQOmS5pUXajTnsII4PEi2gs2kU3lnDA6W25d2dMWpZEibsFmJ9PTvacMBPGpW9MsMf_JoK8RFNGn7UObWrDMvOvaGmVKNi4hRO8rrenFVZaVaN3RvSPbwaCYJm5VWqUSQEQ_ZjxYkavHcqwvOKnvk9Xy6eJCwbEyfu8JBt4fwK614RJKBdGyc5CjZSySrO0_O4-4lExU5N0MRdhxpQdzcQKrxSbTQtrhXaNV1tNWnjNl4C9iGP-Kbt0mSbYreXWxyZ9EIfaUsfs52Mr4zkNQ8bqvEsTor49T8eNTYYmpsN0xQlLmu6KPpmHSl3JSCG3-Td5mKueYOHDA75zzFLCP3vjNYcswJx0KIDwICOKyJBNULhbr3U_3oHe8RO_grDfgws4kLhbG-ILrO2_MxhgX_mZsbTzIXhJCEsVYTdXaA=w811-h660',
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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDymcW9UsGlupjmTnMvN03cIULwaIrgYluJ8VxOislAIffY_VsxpmtbpX2OVEbiUkvZXSEMWcJat4ZpZMbL2uYOjgpKAGRrFZvCdiLqCEciIwkszxP_VI9LPjmO09uqTw7pkI0SbSWyvBrBc2arwRoYBhG-Om5WlEDOOXOvlGdiC_SCCbSaFG0R7OcvVPAJ_IDdVziqkKx6tlB9NJX4BQ1y1tg_emKIOlRDwua6gPKir6I4ctYM17BUUIQz67JtOAqLeIUKatqHCljjX-I0qPFwzkfqVpdUrU59bu-i2MykFyd1igTNxZRxeNajwamqtjrVk_SL3QEYvU1S10cXJ70pAehI-PMOHNYZA6OwdoMPi6nUeuF0u6tnalNXQvzH_Iq3Eylg7LQaDrAM_7gNg5Y9W0IJOJ5cJdrtzs1MGM2Mig1iYKdTEkI48nhg9jMgAlNPjuB9wsmdHGg3BVlj6JCMsM-AXkvX53nSLcPw2I3iCNVlqU6q_S94WWi3D73fpb286-y574HJlCcg5-4Qz6CR0aYWd-k8Gb_VYMa45odCwA1ZKvaBDVEO15JTqo60nPqIBkcua1LVIDh2H0uY-PAnxT0NgDvchM3f_qUHFAxhyyISeMtSoFvnkToJbRe_MyQ2WJUrjI_IQp-t4jk5vAs-JdL1_IsA_qFh50x0o3JZDmwhcQw62nK4C9m_SxnvnHsNu9-59LfnHPE21lCD2Slvx2HiHloLpZtHoNtY4CJ129h8NF01sGYXtZCU07h8-pIrTYeCgU3AZapZNuEV9tTEeYNwqE1W_T6TdBGZvpZCStyQOrY79LcJ3uusOXuV3hCPHyuyWvrxt-dapeKvjATgm2jO_inKy5-11L2KlIuB-jbnb4W7vuVvx8CYb3aMeHijQPvU1yI_UlyR5mOL-pGsLmNq9DheVqZ-j7rG4s4P4MaGvD70ZURXPOzxidSKz5SAu5Q1Piy2JG4vflEvkI28EWURhCE7xrgqA-f7swioXkZc7FI4evoXX0MYCFPyZUt7AUCCmioJh2kO0rTkZbLsSPWDt-OBY9wR5v3THXmj0SSiF3dj-Bn2b9ZNSElbA_FufaMeNEVv1JljNDHLNHbooLC6H_WlSsvYOEvPzX1iPkFDmYSA_DM2aLUCjE9MOfPTUTXk8Gupwuk7vobrMtcAlibfLJkO9YWgZnWgWtBBoT9XUh_odQ4Ue7QGIeu8HDmUmJA_uyYZY2wH6TbeMKbUrVrQXfslegnHkj9ceLGxCdI9bnW6bDPcRwtfqZrGMN56EYzSkFUanoNgVZ5JPto-7kTKbIEb5WD_qLcomW9uKgHf9ibTv_049yVgmHUp69WWQ0FmIppSTx2hwHNz7Ut-mZjLr3dwkY3WLCLzxEFvNC6h5SBf8QNwJ7EV0QWiNPylslKsCkOzShb_T3tvDItnNiy1hKFt0z4DpL_rd0hcHAPOdLiYiJ-WmYGWKpRYu-4TBjpufI-5ZQ3sjk500sO91WEIP2x0dg1AtTJnUhf_lO0Oam2X69ax6_4Q_oHh-KG_W2oKpXHLFpA=w811-h660',
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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDwwp4yMT4GXVvbSRQLzucBUVh8TdJc4hi3nPEnZaarp1UISiRjBU9WQ92Gs0H58jasxuWh41x35SuDrOd40E3PhVw3JqgTLrCFxH3UQa88FIbfdfo6sTdODvoJSMRGAlhFojuoYZEDx6pBF2Z4B4nP8qcB7nS2SrHJk9STy7bL6eL8t6XvipDGWwS-KLfJBVEF7rNKeW9FwZkH3Du4ltpBnWSnQzssd2bm8vD5hOhtComzhDbX_Y9CFhXzVwiXgXbFrWzrfF5cXqDzlZYrG_5uuKKsbv-FGRr5oBXEKGpdptM9W3NpHJySPX2hiPMM7aXjXI3WomKqs2E9nRfDvkJzlCXwNseQkzYQi8KAsA4t1TTvQfJRmf_wFr34I9Z4Djaus0eO179IZHFkn_ZctTIlcl8dzoF5fNub9_eLNJ4nSeCT3cBrCPBFjwxdCv9VtUfP13QgsSraBZ5JOHcTP_F6ZXfnHM_2GugHCXiiqgY6RsyYe5C1e5MVua-smhMRZjcn6ngwHhB_LXUuPaYmkK4NrgxsObt1qQ35_EzOLl5gcwpXqhVfdtVnOhJpQm9rAKxaBu5mjNXf4lh084pbLTXy4xVoK62YspX3thGnv0pD1u8vFfBhysc3K06SpqQMjXCbtwNReitUXGmFzR_kxTL6kYZgSpsBgbZR-SEejdu-GODlb2rtrgkULfv4Bp-cLT19nIgtKaPUnkgKgUYlhknCH9E0B86FlikqYn4Rn6eEJMAmJ-BFONUYw8KMfyEmVCndRf9uVrssY3dMysUGaxtroej67oHgSvPjNmNG3GLqDBZb6-g4qms26xoHtSsJ_VVwGBEFHpYY-EtsshphGx67fEfzrzfwGydpT0SQCf463po4h1_5fUq6lERQFnTfuvN6SaCsECEN1N_RxoUsOB2MO-zLAFPggKovZn_PfAjeBHG7jCPiUyLNNpYTE3Q80C6GnMKECnwrvZL6Qun1D8A2qDqKQonNV2m6_L5Qgj9c0X2FhP0ZCeFg-wjBfbIj86NMj2RYef1QbE-TLA-9lGChIXzFwuKdDEFgVvQSnRGJIMghh3xC_Gl3YPj2BoF9pJTsWVIk1cFTrnuOrhZs0dbL5L9Of8gv0NH2GLmEp0hpH0-oZletMFRNTqWd0lwcV1DaSJ7KSOL74_f_ND_YqJbB_EaFWijDTLL7OU0uB2Q1Bjp7kNwROhMq4L0ITmK4eyrBedRXLZXHER52ze29klWDnmSU_kNHTnZtzyARph8_r3Wvakp7o20ZdFM1zb_CoqabULcWjQZp0_oOi3KQD6Q1uVAsYiRRwdM-mt9_7J1zDw8xkuy5zIJMLLWgUsZUoikF5jFeBq5fQN7C0T9YcWxtQL4SDbbHeo9tCPGIOy57963IbYJbFK4_E6pjN8Z_11gToIYshebERMzhX7waIwoXpphDwBNMzqeij_nxrTwuWSIhQmJuM_xqpJUqDhAfoKSXq4YexJvBqg2OmDK9fgieoDvl_SINQ7qS5HEBonvEXFYPbenmU9Sku8qHpd7ATT6RxKiqrys-3CQ=w811-h660',
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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDzVW9386lyQLFDQv-oDfJivTjk68iAQ-jpDIj9ywBE1WwtY956kaVax1MpEmiFo-7-PsJg_WFxpJYP7NC17_xDEewrq9rmQ-gT6XM1JfQaNw-t9hVdK2u1uB8Tk7xUt9MiyN2YjRMSat4Z6rX4UA6ecgg4cBEMD08uLXWl1Fzy9R_TR8iwdbClScyoTSyA4V8OJVoy4QrkEyO5YFMEIWeXh7hoOmTTej9bU2TCT-tEzyZJsA-TbVmfWvems7otQl54auhAIgklHV1k6C_0444dBpcBp35pSYp7uAHXHxmZ_LJpHnx5QkyEmG6spvWNdLm7sgTyi4vrgTfTDCBJ6-s4qRFQDPquavGBpn7SpkfZPZLYQEAFeqRq4jrHjn_KPBViJgpJFD-mVJg3WbkBfXzWC37hoPUUpk10FDLMgzto2q8WmKvb6VrcM-DXxDnmPG0YBWbQ-cVcLxRwX1-ludXytisVcI7PIpz91f3KYUKk5gXj6Z683w35fCbzJv_hVi0Sbd2x3PpdmXA_YqQLBDKphzDmurur8REsO89gYEiqlTvUoKd5dkFMLfYkvyNbEqvafujeKPnNFXT8vQ8_MuiExNidfBwwZDXHzn0gBsXqagfJiCMLiJPYs6-c4JG7DwT57PdO1NiwurRHtrFqhmrwaHiyWe0LndcdDslyZU5JLHqY4MDJcmZ0_eHf_7uRKS6o3EjkpL9EYJPESrylOjQosDEbjx9g9iMZ03PP4n-C4xPmru6QO4LdHGmXFhlbcBM-sfG_DrPncnUDPgx6s17xLL9vpEeUk-lg12zyVbuo6btAFnXUvKfIY3vRqVzhxkoWf1U9Sly6yTXtErIO8cnqBzdlX1OPk9jKB2j2JMeCyoCgL0Qw0YA5JIJcOintnQl7ec-P0Rea0qF8prUFXUNfpjLLcTSEGHHiRQJMaXR73MmwJ2dJCzP6bg4K0gyogKs7JUMfkQvXxazg3slB6I1MNp1Xeo2uayWcA2nA3uc7qTz1d5nZPlY-PvFPbeZu1wz4X8Zr3myKcO8ZH-8NL3IxWQJ2-dXX4ISty_31UerK0rRAs1K7YO3uVj91t9g2u5G3ZVcapWRIse-CCX8l2wj-rsyp5EUO1t0Ybavr7ZjZ1xIUzlEFBPIb71lJITCFm8apeT868sb35LzsA4c38-2TLX2VRTVmSmFeAb18XdBKlj9UOrCQDeZlzGBRK4lFcoUec3UX39qTqf9wQN6suov_Jaw2jKeFmvh2PQyAv2FpCk8Xt-qdMYzCcEI0qnjHDkPHlQTRRS3fgEMLk4Abe_CkoWEzDqm4ydT62iiqz59ZDnt-s6yzGFQaohXcP-mtFwIo4pISBwOqW8H2W-b4v8ZAPs94_2AcCFiI3J4tU2gvn5cE1RBvc-8KZvu17eVpIdC07BRO6zI-R8ZXcFBtfAEgn4M6jEj5R_Svl-eWILWgjrx2O8d-roTi47WEJUqBay_gJ8pFKLzExxRWyKkqOJsotjtew4Su-N_HKhODun0XEENioxuyIUpC9fM8HxMVQmhilmNqIbH-Ngg=w811-h660',
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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDyHpvF0Xwrgq7-cBNIyVdmFKZ191RfyWS7WRE5XCBBS1oEg_u0iTV7UN97jcK0gkgvT6YIueGvJkYjWU15GK-0PXq9zLx6CuSQQbyz3mH1ghPs7k_TzFKVklbzZQw-eYpcGFLk0LL9D3CX6VRDNOEYdwOaLC6X-0ERKDD4g_5gql43JYY6vOHtmR0lB1eJFHBFy0MPHhmnuJxk4KyaKFbDWXfthNUp12IQy8dDughyf48qUDlMzbyCkTmPMw9vyfS5XU7Tyu_ZI6_wkhjSL0RzzD61z_v9d81Lb989P6y2m6WGb6Gi3YyZX-ORFC-Gy_4nLaZakfcNZ8XYRa9_aihmdl5VrCQcBcleeqmapGqiVRT9O3Ym0U91NyUPq1VFUM2T_M3TbbJ2E7aI4YlxwSf-3PkjpIhOJUejVn9rn7NXre9tpXB-NoRzFE4c5ZjhVsaYumFJn25a7RmsgGNRGEZ9bbsDtF3HTrKwKeTu2yvtVKCgFIR4S5KjKYzCO9LpIgrCSSOP0dKaApjeXP3a9fLEEO2IgGj1_ecTQzmaz7JW1Vn5seIKejBh-JgCM28U1Ny-R6wlYAVGf17-_6IDHTPpTFKRkjErwtKEEmlGZ_oAxl-pE8ZJm22xft2WaiE0xxVx6nMiJDbR7JmrcgUqslYNo_0x9IFodH11qvE-SnCQb-Jq-1YsIlCQfaZ6R-3FbTuz6xQRHbOKxHn6ncH7A7xi34Ilgrwb_o1UXo36pllPO1Q9nToXXLSH1FOxm_Q9xaeC0Aja5lVGtb5cZo9D-qDxZB1UkUA7Vm8LuZ3JYTNOR1djTZeYUjwIEuN0gM-HGFF8evGitfe3xAz_Jx3oGryGfnFt0NfWSW4yO6tKrHvEbI7U7rBnFpIS7YvjhRgEcFr4ha7vdpKuDjWxsL-Iw1ttRX8s9XVsek6JigTLSwwQoVmfs-y_j6-gl9m5Fp1jK2wSFHj0sJ6xdcdxiJmJlpGc5e339vSmXjl2Fyn-lV8rJ_4Zbo3ks6HXQk1wNr2CduImQSnvu1TMUmrheeEvdCPup3vP5rhnczobLgvg-JQ6mS84wOav_d_lvDGkPgIaicfmo2DmNw5IPrzv4COQ5Lvrwce6zO4peGoerS52mjZrwn4DnopKVRUmJYAZCk63WUD6I_aa0JBbfRrR8w5zMLSzHkdQPicNmLKst2qjxOIGF4jlXjgZbnscurjjA1d7shKFgnNafnXxUjiN8LZHqUCERn0AIqF72bNDJKLhOVUvhmosVm1KQnmVrTXFMoOZYGQANReegY7FyZ0g8KGT-4Zde5p8XhEE21oyqtqt1LXaFbQLgwngHQBtOi3qMcVzEMydT8uaXvLQPTbT5Oker_SulrZXmbNgXXCBwe2sAYb3TLUVhnp-1eJFoNd6VlJ5NQaZthquNHHNNZEFo6fK9n-RsJOQHkCvgzT87tJ3MW-R95aVOyfTiKHXq1iPBDst44TAGXSSdCwQoiDb0SDOTcmpfMIptIBOn6bsY1_7Y_dycWubXJWWLSS6_jU1ASTG_Qt0eEDAeNp_A8Q=w811-h660',
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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDyll21x8A6-Hk_sykydkvEqi88m-zsLPxadhSsXb1kPDw6s5QZYdAXSuf2IcBKHaoUCDpq5KVqmcK1cC5Wlt_kgj0-loVkU3MFC4yQ8HRlo3UtyG9UjJTOUwe81FmZ1l8qGUH1YnWPXha5eccAHCgv_c3Qxb4bVfX3H9WKhRbCKfwml8t_ZGG5A2x61204DLcpHyKpQj_7rD8ptPKceStLKinPmJBUl0Wzc-cRfVOi6BXT5tpXCPRgzU7B3piH4F3ptmBglTX8w7j8PvvbsbagJLzIujMRhzMQ9k_a5irZy6K5uLdEHrYO9kcVddzFgZGnzlzG63KGNA8KrFvkmGCwHbvvSoutOLGEK0MMzna1u0ZwhlCc7GA202LC82kPtOqzuabhiDW5PYmSu8vNac9BZmX0EF8T-tS0ssTTYCy_YqKNMnyp0zJhhQYl4XyxzJhw8qpecgva_CGDoE9KZFc9afoDdrm8ZrDdz_DhhzbBDpKzBOdQ1G1rw9fXDtdB08pin3nPuzuvz1BHOaTfm_RwsSmWRfrooZe73kaigqjqSO1Eej-MsNEp_W4BI03whdRiGq0GiSkEVrlmmvZeabcwM1rWHZkURZ6qqDl9K191nw8Sf4b6JH_UykzZ4Vdy1aIKTCjqnUIz7o-05gAxlzzkFJAZJfArx5_EmeXNoc9FpWZ_FeiNlKQnRjX-68K012akdeUWoxa5jRrq8JoIybx0M1Yl-bMClObq5WOIs2ubMqrwDnEhvJ24ZD0wpzTJTkM9YgirK7Tc_bK3QdX1L5k0kYIAh5j7z-SwjncFiUDHeRpsPxjC5oi0TVFARkV45HjmCNibV9QbthnhYvVeBSA7KkgXw6XVmbSEmNLw_b26Nv3JXmnDAye7UYz0iy7ZcrCFBklf6HCZQkPTsOgZDT0WSdmsxN8lLjSr4zya33gTCgtRYY-uFaLItLi3Fedgm00G6uvjMa78EUvKOm_CiBSmc3xHZxseJnDvDYcPEVA6I3sDT1o81TMZTCFe8gevnyOxeZQ2qfHZQJjboAbBht79o0YmU6k-OLhS5Qy4F0axhvptLMx8VavsnIRZ0bsKXH0s5If4eekozcRR0DAuPbPVAP-OgZ34dDPbEXz3ctClSzYsGcZkKorpKtLIsydzAAh9BJ16gJloOnoTCwJBuUkwk2diYbsiaPROtXVORg_f7OGp3s9YDe75z2ZIZPQYP6voKEXOvnwZd136-oTXEcH5oVsKLnGtyMN1QJ5zxCl3_1wW8BFGNiW1TOcMX5icyh7Js42szT7_XNVxRQxxlxkLD9-R_2zRkbdELCyth0FOHdeNA8PNQ1PZlRO2TW6kNBCP0sAIYjX7YvkSIeZx_zikv37jaYWdkZIGDxE2ROWkoXr7YVXwTl__lq53enCyggcP9SDZjAgnXLk271CujRZ0vy2xAHdDW2u2vkqn1wmn7wuxWYN6Dx81MrVrQ6ctBNW41ip-lXpb7tCthZOpQxLKax20c-FTCXuPhqtHo9YzGUqxva2hQn7kvmThSESmlZTIYaHHnHKM7NA=w811-h660',
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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDzH2sjt_DH8wUTeZiEHxYuDNfZcxVTXn7QWa6SluQZdG-r6XE6hVQz5yESQBkXMh6OXTdfkJIh-tk1KRq5J5hF1t57XdIxA6uu6qZe-GiZ5SDnc7SJfNLp-arg5-XHdMN4S16Lg-1QBtLiklNPI-y-GQW4FZMs65YQFVTSMhEB7SUm8VkhjZH3QNI-KTjnnAkf6LiP8HVW3OLpxX0bxn4wQ5XnNyMHcm_-W-g9Ii8lBibHS3HzANR-iZWIy46xnOAcc-di6YBsR4EkZwsWvwsJxtuq2C0IUK03H8zeGPZTan8WBSkP2lNasOOp_nF3p1YpXKGAe6iBcjL_d62OgSI2WzZ9uv-Wlxz5IGSLxiYWvx8NrIg31bW5eRhEQMqhRiELEggyruTujnGC6F7ShGD-M_q7AVvtUP4Hq1XhPFHIR7NH-YhOex_pbA2GO__ozkC5X9suwBDLBhKqodqTPA-ACriq02760JyRTnb-6Mny1ufvr9DIptM4Bu4g8Y9h_hcOCFH2pkBfoTfMnvvpiAydKQSYZlV3mM9iLAMOjc8igpvaM-xT3P_i_WT198A5LKz84YBT3C4UQgwIFAiRxyAO6PPd-VUNFpeNPiNlKJYKWORpHBdGeb-8HyBAYjvpbN14pBrGmeL9qYgdFZqyCEBA5VswIWhGhIo-sERcRrOb5ylyNIo9_WXV_y9vTJgweyUOZzt7Z6sBe9h0cVpOHlPnNTv6K8KdzW6Gvi1rPv7EWSD_jI1WnjZWZOx_JCDUBCoShf7FEeIGSU-2kwpfFxAjqhvstn1GFWTlvje8IzR_5K0Uvw9WZOhfKSS1wDdGnm3FFwGlr3KbyF01oy-oSxwX05Qb2pya7qScn4wOEc_1yuWqYLC45FTc3mok45HSMVdTsBMUSGSSKIGLYxkVMh6unpcOoueRiA21iNFZx43vLOxhhWrXf2kroggsj6gmLGOb3c-38bK_pMv9ZoNpXYj3_iODas18Zi1sbljUjAmC0mf9M_7IOsoVhMqxHMRUy7QoqqGhfAsdOZdA3pvDnbyKvTJXUuLJ0kDm7X3ES29qsCY9FNr1-V5zDsgMx75ngYj6wFRFA4XifAsWEvLaph5_xMJ0gwGXBc-IR6HOv8ehZcGf0_Fd3dmc5nuZunQ4MEY950vMFzjdl0oHatIkIBEWcKxIyLrNHIFqbUIks9EGGq7f368jtuJ6nXjb9yUxCRP0rTZAl8sPcnBoHYfaxQS_P_wt3u_rb0PQ51rZtTiE1JswP9LJXxffgRU3MZridgGpnqEY5tjqGfTRjl00FKxjNuXuncycvui8Qjr5w_IMMmFwTCr7oaBGrXqZOxveZzsF7LFALDkUNqBbQysQBtPjbKhILhn9xdENoSD7s6pIrltx3-Z1sgapvYkp3gVVPWndGtCbTOadJMONpFqoo8SWj1AKfPxJc_lQawDfaolIe00AWy7ozePK554vblndefMhrNM7aTiKxlPU6ry3p_9EKy1i-7Q48Ej7ozhPN3RYlE7IVTjn9lETKuyROVi_urVMoKUqWclgzDQ=w811-h660',
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
      url: 'https://lh3.googleusercontent.com/fife/AK0iWDzolL0pLx5tN6k-XdM34mzaWMY0liczQDFY66i56QnF9eHpKt3Vv1gpHI3DmgtEoKtasJXcMf4yArejIkcu7O447qbYYDshX_MffLbbPyh467LPL8AfzkB3R-i0d2hWW4CeuC_brJc1FqAuYvl7CKm1e_DupJVVfofvAH715UbdcfnRquV3cuS1ksPf417Xs0PJoNGIaaDMq-S13FVpTp_lWaXXcQnehDHRh5QoD_09p-UGywrgtGlfAew1YJbeECD0TFPge02zA77mv2Yg63vCWUmPPGRPds2dG1SmkjXNoM-rJYM8qQpXZNADGX9KD4IUoHWhEDRnm4ZSg07thIZTBb7uoDJeNiBt_V5xbI1TPPxpS6mxlLPdC49FErW-E8o2deSHIox47fCr8zNhA_hTjw0wcgJCv4lTWyEGo3TzGIUryRRwWHbh6xR4LrYzsYokvz9_kQaoyL1IPdzWBRhNDIa6Aj0_YAbX7c6FjjFuGTXVhAHjxkFKezALoHgJ-7tNmBU2gatx9b8X95yVONdt4foUHNCuIYJ68cBESK3uHoV5GG-LRTG4yoJKSjAaGdpJC6KyZmUBO6r1dsQuC1b7KllWfRaD_WSRX5q0KuDRxPXrr_9mBRpCj1guMk8axMl0_lD25ycoa88M5LwhE1gbP_B44Gcuzv5cSNQqYVuCG4DsBREih7SyExD4KBGH_44et0TUfUqJO5TbJTnf-xRYiIEzj9ZZpKiYNPp0DCXO7--veO9Wpxi6EjmetDKpAZ1uNMwqAa3pWanSHEiwGSq_1YMIVjh0lfYcKmA8O_dPjamzXcEHKjcIPXD9gVYi0hLMz4jQAJOKq2QmEUF7qIxdc5wmCjpjwtFR8BJ05S0rwfCoLWQ6Zwl68pjkr8-W6YFSKf32IS3jPInuDvsNNmTN9LasC7LGh5EYS8jGHvxnVRmpx1YXI6GVScwl8Zs-0J7fNE9ov4SZmafF6xQan-wPAop3NEezic6Xbn7eq8lRAdIkfLrd3Ip0IlIIJf8YumrlLvlQHiaNuNa9_N81o5IxMV0zPakK62IKTkn9WxK96rEC_cBgPf0LXitYrkq9KtrsgUpYrqWEJy_xdIUKK7FCWTAnH1zsqb0GNil0Z0F5b05u9LgFhfO97a-u5MfmgsHxJ_pSCUB8RyX8eOgz58Bp8pT3cY2ta4G2c_3lwz9xBrsbAFJqHemHK2EQb5Py0CXq8LGWvFI93IZJaYgp4Z_xNlxEZBgJR-eFJKI8DwHMxhZapLJG90hLiNynDsXAVhuAFBvQ3GijpWJGsKjMPlfkyRpAiaiciOnOgsXBsQKqrrnREykCrCaGoFc8jWwOk0k_nefHN34rFN2pFJdqX4W_W0OyJf_BsMxYSthIVGY6D5LBaL_jPkAOPZi06umlfACUfQgLY488YtyqqodxvQTAm_w63_RkR-5TOBtFlFsG2kf0FKoHfrYeOYm6uyLYbcRkjG8jIBYeNulyYKo_ceVx0fOmzdFbyOXWeBLYE68McNYR_6rnEOPQQjwxyTSdsZeSbHpRgNIcDA=w1366-h660',
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
