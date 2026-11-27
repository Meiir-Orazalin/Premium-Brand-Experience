import type { ContentRepository, Story } from "./story";
export const demoStory: Story = {
  title: {
    ru: "Время для кофе",
    kk: "Кофеге арналған сәт",
    en: "Time for coffee",
  },
  body: {
    ru: "Сначала слышен помол. Потом тёплая чашка касается блюдца, и на минуту разговор стихает. У кофе свой ритм.",
    kk: "Алдымен кофе тартқыштың үні естіледі. Жылы кесе табақшаға тигенде, әңгіме бір сәтке тынады. Кофенің өз ырғағы бар.",
    en: "First comes the sound of the grinder. A warm cup meets its saucer and the conversation pauses for a moment. Coffee has a rhythm of its own.",
  },
};
export const fixtures: ContentRepository = {
  async story() {
    return demoStory;
  },
};
