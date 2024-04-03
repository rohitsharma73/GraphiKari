 import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "down_mittens_1",
    name: "Down Mittens",
    description: `Founded in Japan and now based in the U.S., Snow Peak has been making premium outdoor gear inspired by the mountainous region of Niigata, Japan, since 1958. Crafted in durable materials, these mittens are insulated with duckdown to keep your hands warm no matter through which polar vortex your day takes you.`,
    price: 13999,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["black"],
    currency: "USD",
  },
  {
    id: "c266792a-5f0c-4c1f-8f4c-c4229a3bec93",
    sku: "anime-skins-galore-customize-your-mobile-experience",
    name: "Anime Skins Galore: Customize Your Mobile Experience!",
    description: `"Immerse in vibrant anime artistry with Anime Skins Galore! Explore a diverse collection, personalize your device with favorite characters. Secure transactions, . Join our community, elevate your mobile experience."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/4d5f74212ab8739c4a46a8adb7ed881d7737ebe4-1200x799.jpg?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/4d5f74212ab8739c4a46a8adb7ed881d7737ebe4-1200x799.jpg?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Anime Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "4cddcf87-e0bb-4f2b-a74c-17d9e3c4cf89",
    sku: "anime-skins-galore-2-customize-your-mobile-experience",
    name: "Anime Skins Galore 2: Customize Your Mobile Experience!",
    description: `"Immerse in vibrant anime artistry with Anime Skins Galore! Explore a diverse collection, personalize your device with favorite characters. Secure transactions, . Join our community, elevate your mobile experience."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/1bb1e95f10220b8bbbc7499edfa95013a8a54e66-2400x1800.png?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/1bb1e95f10220b8bbbc7499edfa95013a8a54e66-2400x1800.png?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Anime Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "98fbdd93-7e22-44e4-9dfb-9b33863fd367",
    sku: "anime-skins-galore-3-customize-your-mobile-experience",
    name: "Anime Skins Galore3: Customize Your Mobile Experience!",
    description: `"Immerse in vibrant anime artistry with Anime Skins Galore! Explore a diverse collection, personalize your device with favorite characters. Secure transactions, . Join our community, elevate your mobile experience."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/e856859f45869f6d6dcb9921520a377bf84b6c02-1080x720.jpg?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/e856859f45869f6d6dcb9921520a377bf84b6c02-1080x720.jpg?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Anime Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "819878a4-c580-4070-9773-a1811d861938",
    sku: "anime-skins-galore-4-customize-your-mobile-experience",
    name: "Anime Skins Galore 4: Customize Your Mobile Experience!",
    description: `"Immerse in vibrant anime artistry with Anime Skins Galore! Explore a diverse collection, personalize your device with favorite characters. Secure transactions, . Join our community, elevate your mobile experience."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/a8f0f2a61e2817955e5b1e81984fa90d286cd929-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/a8f0f2a61e2817955e5b1e81984fa90d286cd929-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Anime Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "67f15871-f931-434a-81cb-6b189fc6ecdf",
    sku: "anime-skins-galore-5-customize-your-mobile-experience",
    name: "Anime Skins Galore 5: Customize Your Mobile Experience!",
    description: `"Immerse in vibrant anime artistry with Anime Skins Galore! Explore a diverse collection, personalize your device with favorite characters. Secure transactions, . Join our community, elevate your mobile experience."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/bff9c477c29d366ef9a1c7f469d7251a13fbace8-1080x720.jpg?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/bff9c477c29d366ef9a1c7f469d7251a13fbace8-1080x720.jpg?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Anime Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "drafts.40d4bc6e-4f57-40b2-8a32-9e06afd1ee0b",
    sku: "anime-skins-galore-6-customize-your-mobile-experience",
    name: "Anime Skins Galore 6: Customize Your Mobile Experience!",
    description: `"Immerse in vibrant anime artistry with Anime Skins Galore! Explore a diverse collection, personalize your device with favorite characters. Secure transactions, . Join our community, elevate your mobile experience."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/e0b5067cfb1fe09bb7a6b3947d51f4f07eaeb4ec-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/e0b5067cfb1fe09bb7a6b3947d51f4f07eaeb4ec-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Anime Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "90934a82-61a6-43f7-8c87-1ae602ff17f7",
    sku: "anime-skins-galore-7-customize-your-mobile-experience",
    name: "Anime Skins Galore 7: Customize Your Mobile Experience!",
    description: `"Immerse in vibrant anime artistry with Anime Skins Galore! Explore a diverse collection, personalize your device with favorite characters. Secure transactions, . Join our community, elevate your mobile experience."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/251a3d1add8915e21a2350a1afb6430a8b82cf9a-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/251a3d1add8915e21a2350a1afb6430a8b82cf9a-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Anime Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "736ae5b2-b35e-4d39-a474-69d6cda1dd91",
    sku: "anime-skins-galore-8-customize-your-mobile-experience",
    name: "Anime Skins Galore 8: Customize Your Mobile Experience!",
    description: `"Immerse in vibrant anime artistry with Anime Skins Galore! Explore a diverse collection, personalize your device with favorite characters. Secure transactions, . Join our community, elevate your mobile experience."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/a30e1b02340550115f86537d23f0bfe0f0dd7eed-1080x720.jpg?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/a30e1b02340550115f86537d23f0bfe0f0dd7eed-1080x720.jpg?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Anime Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "25d3202e-0159-4f6f-9298-5825840d9aaf",
    sku: "anime-skins-galore-9-customize-your-mobile-experience",
    name: "Anime Skins Galore 9: Customize Your Mobile Experience!",
    description: `"Immerse in vibrant anime artistry with Anime Skins Galore! Explore a diverse collection, personalize your device with favorite characters. Secure transactions. Join our community, elevate your mobile experience."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/8c027d278c18494a667dcbc3073b176f8f8ada3f-1080x720.jpg?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/8c027d278c18494a667dcbc3073b176f8f8ada3f-1080x720.jpg?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Anime Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "75bcc336-a1f0-499b-8ef3-8598e0354589",
    sku: "graffiti-glam-expressive-mobile-skins",
    name: "Graffiti Glam: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/199be65f46faeaa45007c3c2404b76d9d2e755c3-1080x720.jpg?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/199be65f46faeaa45007c3c2404b76d9d2e755c3-1080x720.jpg?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "8dd50357-9d69-4e21-a6f5-94c260dd3f1f",
    sku: "graffiti-glam-3-expressive-mobile-skins",
    name: "Graffiti Glam 3: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/363a6f9644b4a3d254de33457bcb07402752e6b8-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/363a6f9644b4a3d254de33457bcb07402752e6b8-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "35386ee3-86fb-4420-b8bb-150c62e95c03",
    sku: "graffiti-glam-4-expressive-mobile-skins",
    name: "Graffiti Glam 4: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/7d61716c9fa50f055ef4fe29c64745851b0efac2-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/7d61716c9fa50f055ef4fe29c64745851b0efac2-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "fb2e34d2-ac94-42ea-94a5-bcb8d7d98720",
    sku: "graffiti-glam-5-expressive-mobile-skins",
    name: "Graffiti Glam 5: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/b6eab74526ba14268e534937101cc0c0161b3659-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/b6eab74526ba14268e534937101cc0c0161b3659-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "c3d8339c-3506-4210-ac2a-bc39031e1d17",
    sku: "graffiti-glam-6-expressive-mobile-skins",
    name: "Graffiti Glam 6: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/610251810de25ce7bd531d52f1c1b333805a4d24-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/610251810de25ce7bd531d52f1c1b333805a4d24-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "a6dd3f29-8269-4b84-acbe-5d5d82d971f8",
    sku: "graffiti-glam-7-expressive-mobile-skins",
    name: "Graffiti Glam 7: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/e994eb42f6fd0b8d38e94321d4c5ab726489ee93-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/e994eb42f6fd0b8d38e94321d4c5ab726489ee93-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "f9beefd9-3e73-4ff6-a16a-9869197ed8f4",
    sku: "graffiti-glam-8-expressive-mobile-skins",
    name: "Graffiti Glam 8: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/0f891d94ed129196e509c5096290d51643ca2d67-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/0f891d94ed129196e509c5096290d51643ca2d67-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "b6ebcd89-3ade-44ae-a1da-1085f1651722",
    sku: "graffiti-glam-9-expressive-mobile-skins",
    name: "Graffiti Glam 9: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/96fe0eb4bddfbe11468a85b8847cb7a22f0e0e6c-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/96fe0eb4bddfbe11468a85b8847cb7a22f0e0e6c-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "bbdd7476-4c9a-46e0-9332-99448c398a3e",
    sku: "graffiti-glam-10-expressive-mobile-skins",
    name: "Graffiti Glam 10: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/df0ebe0cdf56310c40ded189476e76512759e5f6-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/df0ebe0cdf56310c40ded189476e76512759e5f6-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "4a8a63f7-75f5-481d-8cb5-88b4cc434c94",
    sku: "graffiti-glam-11-expressive-mobile-skins",
    name: "Graffiti Glam 11: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/33cd5bc2c75f64d91b4c5abd1e41a52354a0ae50-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/33cd5bc2c75f64d91b4c5abd1e41a52354a0ae50-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "42c52341-a787-4786-9900-43e2a82d638e",
    sku: "graffiti-glam-12-expressive-mobile-skins",
    name: "Graffiti Glam 12: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/e3f6fa3bb6a416a6af33e25d48d043680c20aab6-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/e3f6fa3bb6a416a6af33e25d48d043680c20aab6-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "bc4ce447-a7c1-4bc6-93c6-78b2d3773e3f",
    sku: "graffiti-glam-13-expressive-mobile-skins",
    name: "Graffiti Glam 13: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/72ca8aea19188ad77b45d88aed09f405fc72b205-2048x1536.jpg?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/72ca8aea19188ad77b45d88aed09f405fc72b205-2048x1536.jpg?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "bbce0ae3-49c4-4e1d-a147-9584f8309e5a",
    sku: "krishnaji-mobile-skins",
    name: "Krishnaji Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/41d311727b9808924cc4089ccef88391bdb0005f-2400x1800.jpg?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/41d311727b9808924cc4089ccef88391bdb0005f-2400x1800.jpg?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Random Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "272b7398-9006-414c-9f73-aeb003e949cb",
    sku: "graffiti-glam-14-expressive-mobile-skins",
    name: "Graffiti Glam 14: Expressive Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/51a5f45b39a48bfae672cb30d8ab4a53c5e1b80a-960x720.png?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/51a5f45b39a48bfae672cb30d8ab4a53c5e1b80a-960x720.png?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Graffiti Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "1efd5cc7-5ab1-4fa1-9cdb-29715282f8b5",
    sku: "hindu-mobile-skins",
    name: "Hindu Mobile Skins",
    description: `"Transform your device with edgy graffiti designs. Make a bold statement on-the-go with vibrant, expressive mobile skins that redefine urban style."`,
    price: 18900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/888220203a7ea32a14a143835d36142e224a6769-2400x1800.webp?w=2000&fit=max&auto=format",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/888220203a7ea32a14a143835d36142e224a6769-2400x1800.webp?w=2000&fit=max&auto=format",
    ],
    sizes: ["one-size"],
    categories: ["Random Mobile Skins"],
    colors: ["black"],
    currency: "INR",
  },
  
  
  //added by Mohit


  //DCU collection

  {
    id: "a0933a8e-50fa-4b0f-a2e8-4184a23b78f6",
    sku: "deadpool",
    name: "DeadPool",
    description: `""Add a touch of humor with the Deadpool poster. Iconic design, vibrant colors, perfect for any fan!""`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/eb7266c3d7d5aba6c2ce48aa650ac0bc18bc07e8-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/eb7266c3d7d5aba6c2ce48aa650ac0bc18bc07e8-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["POster"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "15944747-9452-4896-b72f-f40a0c067100",
    sku: "batman",
    name: "Batman",
    description: `"Transform your space with the iconic Batman Wall Poster. Embrace Gotham's guardian with this dynamic piece. Perfect for any fan's collection."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/ad676800e5c5554367fa341d09785a84d397c8f8-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/ad676800e5c5554367fa341d09785a84d397c8f8-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["black"],
    currency: "INR",
  },



  //football

  {
    id: "2a09162f-3da9-49ab-9a9d-a62ddc2bf2d4",
    sku: "cristiano-ronaldo",
    name: "Cristiano Ronaldo",
    description: `"Elevate your walls with the Cristiano Ronaldo Wall Poster, capturing his legendary pose. Showcase the spirit of football excellence in your space."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/a4f831eb2700bea74ff2d00c6b535be7c7a413e6-493x740.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/a4f831eb2700bea74ff2d00c6b535be7c7a413e6-493x740.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "3b268404-af40-44e1-8e57-9b76dd53d8f5",
    sku: "lionel-messi",
    name: "Lionel Messi",
    description: `"Revitalize your room with the Lionel Messi Cute Laughing Poster, crowned with the title of the Greatest of All Time (GOAT). Celebrate football brilliance with a touch of charm."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/8587e084c6cedb0a21a69aba5ddbc3e13c062e21-493x740.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/8587e084c6cedb0a21a69aba5ddbc3e13c062e21-493x740.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["black"],
    currency: "INR",
  },


  //games

  {
    id: "ed0d361a-65e4-4ec5-a132-2a506d828036",
    sku: "gta-5",
    name: "GTA 5",
    description: `"Revitalize your gaming setup with the iconic GTA 5 Poster. Immerse yourself in the thrilling world of Los Santos with this must-have addition."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/eb3a9cafc48db7658e27506a140d20144c7cb926-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/eb3a9cafc48db7658e27506a140d20144c7cb926-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "64b2a1fa-6ccd-488a-afdc-8cd86abd070d",
    sku: "assassian-s-creed",
    name: "Assassian's Creed",
    description: `"Embark on an epic journey with the Assassin's Creed Poster. Dive into historical landscapes, master stealth, and unravel ancient mysteries with this captivating addition to your collection."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/5d612b4a79448513267c103bbe336e4809ca9621-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/5d612b4a79448513267c103bbe336e4809ca9621-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["black"],
    currency: "INR",
  },


  //marvel

  {
    id: "e04ea4f2-da14-4958-bdda-51296b21a0fe",
    sku: "thor",
    name: "Thor",
    description: `"Channel the power of thunder with the Thor Poster. Embrace the mighty Norse god's heroic stance and wield the strength of Mjolnir in your space."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/598286bfdcf1a256dbd599899f588fc67c7b2a0b-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/598286bfdcf1a256dbd599899f588fc67c7b2a0b-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "8c102c3c-1260-47e2-8f79-1e79512452ad",
    sku: "spiderman-across-the-verse",
    name: "Spiderman - Across The Verse",
    description: `"Swing into action with the Spider-Man: Across the Verser Poster featuring the fierce Female Spider-Man. Explore multiverse adventures with this dynamic addition to your wall."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/ee2a6ff1070a30b79cc083102a047b5bbf2f7828-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/ee2a6ff1070a30b79cc083102a047b5bbf2f7828-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["black"],
    currency: "INR",
  },

  //Motivation
  {
    id: "ffedce2d-0f66-45cf-9e2f-897b8757481b",
    sku: "build-yourself",
    name: "Build Yourself",
    description: `"Ignite motivation with the "Build Yourself, Success Will Come" Poster. Embrace growth, perseverance, and the journey to achievement with this inspirational reminder on your wall."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/f833681db4772eee822bc98f084eb003e43e9264-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/f833681db4772eee822bc98f084eb003e43e9264-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "d91a3092-7f23-41d7-b3f3-0136eff04752",
    sku: "again",
    name: "Again",
    description: `"Persist with the "Again and Again Till Gain" Poster. Embrace resilience, determination, and the path to success with this motivational mantra displayed proudly on your wall."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/108ba63b58a3577585e7dc945dd65fa85ea7ae4e-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/108ba63b58a3577585e7dc945dd65fa85ea7ae4e-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["black"],
    currency: "INR",
  },

  //TShirt printing

  //black tshirts
  {
    id: "c18157dd-7135-4ba2-994f-e73f2cee65a3",
    sku: "graphikari-special-t-shirt",
    name: "Graphikari Special T-Shirt",
    description: `"Elevate your style with the Graphikari Brand Special Printed T-Shirt. Embrace unique designs, premium quality, and unmatched comfort with this exclusive addition to your wardrobe."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/7801d20e7c67fccbeaa6df8f2d250b822dd9ba4c-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/7801d20e7c67fccbeaa6df8f2d250b822dd9ba4c-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "9b833e98-f2af-4592-a7b9-d61ce1022eb9",
    sku: "naruto-sage-mode-on",
    name: "Naruto: Sage Mode On",
    description: `"Level up your style with the Naruto Sage Mode Printed T-Shirt. Channel the power of the sage and showcase your love for Naruto with this dynamic and eye-catching design."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/980a94501ac5871bf64ebb41f400be4cd2af2f3d-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/980a94501ac5871bf64ebb41f400be4cd2af2f3d-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
      "https://cdn.sanity.io/images/hscq4du4/production/92ff3254d2f4b2f429f87abacb88fea9adc312fe-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["black", "blue"],
    currency: "INR",
  },
  {
    id: "ee0a8638-3cf2-4ac7-a98d-4d093f736dd9",
    sku: "monkey-d-luffy-gear-5",
    name: "Monkey D. Luffy - Gear 5",
    description: `"Embrace the power of the pirate king with the Monkey D. Luffy Gear 5 Printed T-Shirt. Display Luffy's ultimate form and unleash your inner warrior with this bold and striking design."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/9d3fa4ee827781d21d151a1d9a7615a90cd2683c-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/9d3fa4ee827781d21d151a1d9a7615a90cd2683c-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
      "https://cdn.sanity.io/images/hscq4du4/production/283de6aa29053262289c10b475c16a7d250ac6ab-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["black", "mahroon"],
    currency: "INR",
  },
  {
    id: "25172a81-9401-47f8-b113-862ccbcdd5ac",
    sku: "venom",
    name: "Venom",
    description: `"Unleash the darkness with the Venom Printed T-Shirt. Embrace the symbiotic power and embody the anti-hero within with this captivating and edgy design."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/208031102de2dbe7a203c875e9a7b39f53d77b63-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/208031102de2dbe7a203c875e9a7b39f53d77b63-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
      "https://cdn.sanity.io/images/hscq4du4/production/9e54b52c889f9d2b4c7572bdcbc92b60329a1454-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["black", "red"],
    currency: "INR",
  },

  //blue tshirts one included in black 
  {
    id: "1b6d751f-5200-4192-9699-103c67931f71",
    sku: "ignorant-turtle",
    name: "Ignorant Turtle",
    description: `"Empower your voice with the "No Means No" Turtle Printed T-Shirt. Advocate for consent and stand against injustice with this impactful design, featuring a symbol of resilience and strength."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/7dd41c7ad82e1f5a6002f2e4268cc8c57ee7a9b5-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/7dd41c7ad82e1f5a6002f2e4268cc8c57ee7a9b5-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["blue"],
    currency: "INR",
  },
  {
    id: "bc4c3dcb-1eff-44ea-a6ee-8aeeae58424c",
    sku: "baby-dragon",
    name: "Baby Dragon",
    description: `"Ignite your style with the "I Am Diano*Mite" Baby Dragon Printed T-Shirt. Embrace your inner fire and unleash your potential with this playful and charismatic design."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/5c3a56eb9736de2bd55433d385eca39ddd5fe475-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/5c3a56eb9736de2bd55433d385eca39ddd5fe475-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["blue"],
    currency: "INR",
  },

  //mahroon
  {
    id: "4a7c39e7-96f2-46b2-b6d8-3442b3d99ba9",
    sku: "ducking",
    name: "Ducking",
    description: `"Express your carefree attitude with the "Not My Problem" Duck Posing Printed T-Shirt. Embrace a laid-back approach to life with this humorous and relatable design, perfect for casual days."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/ab302f39e88d2c3cb11dd8bc62cf029c8e10afa1-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/ab302f39e88d2c3cb11dd8bc62cf029c8e10afa1-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["mahroon"],
    currency: "INR",
  },
  {
    id: "ceabccb8-6714-4194-be78-7ea1c15ac66e",
    sku: "hot-wings",
    name: "Hot Wings",
    description: `"Embrace whimsy with the Cartoon Riding Chicken Printed T-Shirt. Featuring digital illustrations, this playful design captures the joy of adventure and camaraderie, perfect for adding a touch of fun to your wardrobe."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/a91f1bf5850f0a0ab205d460680c08620b450edb-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/a91f1bf5850f0a0ab205d460680c08620b450edb-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
      "https://cdn.sanity.io/images/hscq4du4/production/3200031b00ff5c3ae975c1f5520cfe2457c011c3-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["mahroon", "red"],
    currency: "INR",
  },

  //
  {
    id: "319b9aba-37d2-4937-977b-8b60c85c3caa",
    sku: "armour-titan-aot",
    name: "Armour Titan - AOT",
    description: `"Unleash the might of the Armored Titan with this Attack on Titan-themed printed t-shirt. Featuring striking digital illustrations, this design captures the essence of power and strength from the iconic anime series."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/dc68b90c83c7907447de98e4d5cbb93247f7cb41-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/dc68b90c83c7907447de98e4d5cbb93247f7cb41-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
      "https://cdn.sanity.io/images/hscq4du4/production/bf573ab61352d0f86bd4a2e62fe2164a813e64cb-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["red", "yellow"],
    currency: "INR",
  },

  //yellowwwwwww
  {
    id: "e5161f23-e52b-4be0-80fb-c05878eacd18",
    sku: "minions",
    name: "Minions",
    description: `"Add a touch of mischief to your wardrobe with the Minions Printed T-Shirt. Featuring everyone's favorite yellow mischief-makers, this playful design brings the fun and laughter of the Despicable Me series to your everyday style."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/0af4242bef4aadb67771aa1f9e233fea51bf09a1-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/0af4242bef4aadb67771aa1f9e233fea51bf09a1-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["yellow"],
    currency: "INR",
  },
  {
    id: "612022b2-7c33-416f-8289-c60b2ff45080",
    sku: "courageous-dog",
    name: "Courageous Dog",
    description: `"Showcase contrasting personalities with the Courageous Dog, Timid Reaction Printed T-Shirt. Featuring a bold and brave dog juxtaposed with a timid reaction, this design adds a playful twist to your outfit, capturing the complexity of emotions in one eye-catching print."`,
    price: 40900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/445604648907fe21b1d94de171f85d761181be40-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/445604648907fe21b1d94de171f85d761181be40-1600x2000.png?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["Printed T-Shirts"],
    colors: ["yellow"],
    currency: "INR",
  },


  //wall stickers

  // anime
  {
    id: "51bc3ffd-7a59-442e-a798-646ef8bc9cfd",
    sku: "eren-yeager",
    name: "Eren Yeager",
    description: `"Channel the rage of Eren Yeager with the Angry Eren Yeager Wall Sticker. Capture the intensity of Attack on Titan with this striking design, perfect for fans seeking to showcase their passion for the series."`,
    price: 5000,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/1707a6a58a2f17e3b0661df54a8937053752f95d-236x236.jpg?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/1707a6a58a2f17e3b0661df54a8937053752f95d-236x236.jpg?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-feet"],
    categories: ["Wall Stickers"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "76308b2e-4f08-4790-b3b2-c5101845dc4e",
    sku: "one-piece",
    name: "One Piece",
    description: `"Capture the spirit of adventure with the "One Piece: Never End" Wall Sticker. Embrace the journey of the Straw Hat Pirates and the endless quest for the legendary One Piece treasure with this dynamic and inspiring design, perfect for fans of the beloved anime series."`,
    price: 5000,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/de58ccefceeb568f5d657fd59ed9b38c88bb495c-236x236.jpg?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/de58ccefceeb568f5d657fd59ed9b38c88bb495c-236x236.jpg?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-feet"],
    categories: ["Wall Stickers"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "260bc2d9-34cf-4a2b-a097-c490bc7f7f98",
    sku: "team-deamon-slayer",
    name: "Team Deamon Slayer",
    description: `"Celebrate the bond of the Demon Slayer Corps with the Team Demon Slayer Wall Sticker. Showcase the unity and strength of Tanjiro, Nezuko, and their companions as they embark on their journey to eradicate demons and restore peace. Perfect for fans of the hit anime series."`,
    price: 5000,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/51898ba3d7f15672751f4ea0d7aa00bf9b21bd82-236x463.jpg?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/51898ba3d7f15672751f4ea0d7aa00bf9b21bd82-236x463.jpg?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-feet"],
    categories: ["Wall Stickers"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "7f308b7f-22db-4360-aabb-cc60f19baa33",
    sku: "itachi-uchiha",
    name: "Itachi Uchiha",
    description: `"Embrace the enigmatic allure of Itachi Uchiha with the Itachi Uchiha Wall Sticker. Capturing the essence of this iconic character from Naruto, this design adds a touch of mystery and power to any space, making it an ideal choice for fans of the series seeking to showcase their admiration for Itachi."`,
    price: 5000,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/ba1702cdcf02002dc1710527939a497bf912a452-564x769.jpg?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/ba1702cdcf02002dc1710527939a497bf912a452-564x769.jpg?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-feet"],
    categories: ["Wall Stickers"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "c5d7c6fc-2849-4730-a8df-a716b7ad8f6b",
    sku: "dragon-ball",
    name: "Dragon Ball",
    description: `"Elevate your space with the Dragon Ball Wall Sticker. Featuring iconic characters from the legendary Dragon Ball series, this dynamic design brings the energy and excitement of the anime to your walls."`,
    price: 5000,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/116d5d76d6a6c79d48e26c824fdaf829adb2907e-235x241.jpg?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/116d5d76d6a6c79d48e26c824fdaf829adb2907e-235x241.jpg?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-feet"],
    categories: ["Wall Stickers"],
    colors: ["black"],
    currency: "INR",
  },
  {
    id: "bd6fe0d4-260c-4bdb-a3ee-ba4fe3421402",
    sku: "basketball-poster",
    name: "Basketball Poster",
    description: `"
    Immerse yourself in the electrifying energy of basketball with our captivating poster. Perfect for fans of all ages, it's a daily reminder to embrace teamwork and chase your dreams with relentless passion."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/d5221a41367e265d5aa9017f075029478ab6dc74-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/d5221a41367e265d5aa9017f075029478ab6dc74-360x540.webp?w=2000&fit=max&auto=format&dpr=2",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "76c78879-2944-4b3d-9148-3d8c1557d180",
    sku: "basketball-poster-lebron-james",
    name: "Basketball Poster Lebron James",
    description: `"
    Immerse yourself in the electrifying energy of basketball with our captivating poster. Perfect for fans of all ages, it's a daily reminder to embrace teamwork and chase your dreams with relentless passion."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/e1eb08ad4a8e22b4e5d56081bc335cc411e858ff-360x540.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/e1eb08ad4a8e22b4e5d56081bc335cc411e858ff-360x540.webp"
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "c949cc45-8300-4830-8ddb-5ca48d993d92",
    sku: "Porse",
    name: "Porse",
    description: `"Unleash the thrill of the open road with our dynamic sports car poster. Perfect for enthusiasts, it's a sleek addition to any space."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/0d3a5dd9a532a5906dbd1bded3b70633c16be720-493x740.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/0d3a5dd9a532a5906dbd1bded3b70633c16be720-493x740.webp",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "cb37e6c9-cd62-415f-b38f-4c31b5968568",
    sku: "mazda",
    name: "mazda",
    description: `" Ignite your passion for performance with our Mazda car poster. Sleek design meets exhilarating performance in this perfect addition to any automotive enthusiast's collection."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/e4c9bf5b054eeac35a234fc9d5d082a2a10fa284-493x740.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/e4c9bf5b054eeac35a234fc9d5d082a2a10fa284-493x740.webp",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "d19d03d2-8e59-4c7c-91f3-2574e6da567c",
    sku: "porshe-multiple",
    name: "porshe multiple",
    description: `"
    Capture the essence of luxury and speed with our Porsche car poster. A symbol of timeless elegance and precision engineering, perfect for automotive enthusiasts."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/d52d0fb34b9a7f681a3dfa28bc6ecad87d577cb3-493x740.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/d52d0fb34b9a7f681a3dfa28bc6ecad87d577cb3-493x740.webp",
    ],
    sizes: ["one-size"],
    categories: ["Poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "787acb30-68cd-4131-92a1-e91d1908fd87",
    sku: "mercedes",
    name: "mercedes",
    description: `"Experience the epitome of luxury and sophistication with our Mercedes car poster. Immerse yourself in the iconic elegance and cutting-edge technology of Mercedes-Benz."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/b0b8dd10e91b6ffc89966ae2558bca6f87260e6d-493x740.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/b0b8dd10e91b6ffc89966ae2558bca6f87260e6d-493x740.webp",
    ],
    sizes: ["one-size"],
    categories: ["poster"],
    colors: [""],
    currency: "INR",
  },
  {
    id: "caf386d6-8a5c-4138-8fef-f0cdbbaa2742",
    sku: "porshe-911",
    name: "porshe 911",
    description: `"Indulge in the thrill of the Porsche 911 with our captivating poster. Embrace the iconic design and exhilarating performance of this legendary sports car."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/e47f82a10163b27208ecb4ffc6cabecf70950745-493x740.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/e47f82a10163b27208ecb4ffc6cabecf70950745-493x740.webp",
    ],
    sizes: ["one-size"],
    categories: ["poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "cb1bc6ab-03ce-4901-89c3-dd0398a9c828",
    sku: "gtr-3",
    name: "GTR 3",
    description: `"Feel the adrenaline rush with our GTR 3 poster. Experience the sleek design and powerful performance of this legendary sports car in every glance."`,
    price: 7900,
    image:
      "",
    images: [
      "",
    ],
    sizes: ["one-size"],
    categories: ["poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "a5c10d57-f847-4222-91b6-eaeb975a0a2c",
    sku: "f1",
    name: "F1",
    description: `"Embark on a journey of speed and precision with our F1 poster. Capturing the excitement and innovation of Formula 1 racing, it's a must-have for motorsport enthusiasts."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/9bb0247f674899e1e2cfc5e9d6bca0fdd79d2394-493x740.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/9bb0247f674899e1e2cfc5e9d6bca0fdd79d2394-493x740.webp",
    ],
    sizes: ["one-size"],
    categories: ["poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "271ba182-29c8-4db3-80d1-875eabd8b9ba",
    sku: "chevrolet",
    name: "chevrolet",
    description: `"Rev up your passion with our Chevrolet car poster. Featuring iconic models and American muscle, it's a tribute to the legacy of performance and innovation."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/b590f1e342046b1a355c1b06a3df35354c58a67c-493x740.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/b590f1e342046b1a355c1b06a3df35354c58a67c-493x740.webp",
    ],
    sizes: ["one-size"],
    categories: ["poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "38cee44-8af0-4852-8e1e-09bdff2b5d25",
    sku: "gt",
    name: "GT",
    description: `"Experience the thrill of the GT with our captivating poster. Featuring sleek design and exhilarating performance, it's a must-have for automotive enthusiasts."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/6220d2b80d71086af3e235262fdbb6e090807a22-493x740.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/6220d2b80d71086af3e235262fdbb6e090807a22-493x740.webp",
    ],
    sizes: ["one-size"],
    categories: ["poster"],
    colors: ["Black"],
    currency: "INR",
  },
  {
    id: "5df2fc7a-1534-4052-a508-998daec0e2d3",
    sku: "ferrari",
    name: "ferrari",
    description: `"Ignite your passion for speed and luxury with our Ferrari car poster. Capturing the essence of Italian excellence and performance, it's a symbol of automotive perfection."`,
    price: 7900,
    image:
      "https://cdn.sanity.io/images/hscq4du4/production/958d97194efef6e3ba3a73b6cb33717e95276f96-493x740.webp",
    images: [
      "https://cdn.sanity.io/images/hscq4du4/production/958d97194efef6e3ba3a73b6cb33717e95276f96-493x740.webp",
    ],
    sizes: ["one-size"],
    categories: ["poster"],
    colors: ["Black"],
    currency: "INR",
  },
]
