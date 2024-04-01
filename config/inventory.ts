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
]
