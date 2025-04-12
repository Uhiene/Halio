# Slides Data

```
export const heroSlides = [
  {
    id: 1,
    bgImage: new URL('@/assets/images/slide01.jpg', import.meta.url).href,
    title: 'Arctic Nights',
    subtitle: 'Where snow-capped peaks  meets'
  },
  {
    id: 2,
    bgImage: new URL('@/assets/images/slide02.jpg', import.meta.url).href,
    title: 'Northern Lights', 
    subtitle: 'Nature paints the night with emerald '
  },
  {
    id: 3,
    bgImage: new URL('@/assets/images/slide03.jpg', import.meta.url).href,
    title: 'Silent Winter',
    subtitle: 'Silent mountains standing guard '
  },
  {
    id: 4,
    bgImage: new URL('@/assets/images/slide04.jpg', import.meta.url).href,
    title: 'Aurora Kingdom',
    subtitle: 'Snowy mountains crowned by lights'
  },
  {
    id: 5,
    bgImage: new URL('@/assets/images/slide05.jpg', import.meta.url).href,
    title: 'Ice & Stars',
    subtitle: 'Snowflakes twinkling like stars on mountain'
  }
]
```

# Cards Data

```
import pic01 from '@/assets/images/pic01.jpg'
import pic02 from '@/assets/images/pic02.jpg'
import pic03 from '@/assets/images/pic03.jpg'
import pic04 from '@/assets/images/pic04.jpg'

export const adventureCards = [
  {
    id: 1,
    image: pic02,
    title: "Abyssal Exploration",
    subtitle: "Maecenas sapien feugiat ex purus",
    description:
      "Lorem ipsum dolor. Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.",
  },
  {
    id: 2,
    image: pic03,
    title: "Arctic Survivor",
    subtitle: "Cras aliquet urna ut sapien",
    description:
      "Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: pic01,
  },
  {
    id: 4,
    image: pic04,
  },
];

```