import faker, {random} from 'faker';

const videos = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
];
export const stories = [
  {
    user_avatar: faker.image.avatar(),
    id: faker.random.number(),
    user_name: faker.name.firstName(),
  },
  {
    user_avatar: faker.image.avatar(),
    id: faker.random.number(),
    user_name: faker.name.firstName(),
  },
  {
    user_avatar: faker.image.avatar(),
    id: faker.random.number(),
    user_name: faker.name.firstName(),
  },
  {
    user_avatar: faker.image.avatar(),
    id: faker.random.number(),
    user_name: faker.name.firstName(),
  },
  {
    user_avatar: faker.image.avatar(),
    id: faker.random.number(),
    user_name: faker.name.firstName(),
  },
  {
    user_avatar: faker.image.avatar(),
    id: faker.random.number(),
    user_name: faker.name.firstName(),
  },
  {
    user_avatar: faker.image.avatar(),
    id: faker.random.number(),
    user_name: faker.name.firstName(),
  },
];

export const posts = [
  {
    user_name: faker.name.firstName(),
    id: faker.random.number(),
    user_avatar: faker.image.avatar(),
    country: faker.address.country(),
    city: faker.address.city(),
    type: faker.random.arrayElement(['video', 'picture']),
    video_url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    image_url: faker.random.image(),
    description: faker.random.words(),
    hashtags: [faker.random.word(), faker.random.word(), faker.random.word()],
    created_at: faker.date.future(),
  },
  {
    user_name: faker.name.firstName(),
    user_avatar: faker.image.avatar(),
    id: faker.random.number(),
    country: faker.address.country(),
    city: faker.address.city(),
    type: faker.random.arrayElement(['video', 'picture']),
    video_url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    image_url: faker.random.image(),
    description: faker.random.words(),
    hashtags: [faker.random.word(), faker.random.word(), faker.random.word()],
    created_at: faker.date.future(),
  },
];

export const randomPosts = [
  {
    id: faker.random.number(),
    type: faker.random.arrayElement(['image', 'video']),
    video_url: faker.random.arrayElement(videos),
  },
];
