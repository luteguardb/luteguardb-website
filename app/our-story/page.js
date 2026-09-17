export const metadata = { title: "OUR STORY | LUTEGUARD-B™" };

export default function OurStoryPage() {
  return (
    <section className="story-page">
      <div className="page-heading narrow">
        <div className="eyebrow">OUR STORY</div>
        <h1>Warmth, with a scientific attitude.</h1>
        <p>
          따뜻함은 누군가를 걱정해주는 마음이고,
          과학적인 태도는 데이터를 통해 믿음을 쌓는 과정이라고 생각합니다.
        </p>
      </div>

      <div className="story-grid">
        <article>
          <span className="story-no">01</span>
          <h2>From Marigold</h2>
          <p>
            강화와 교동도의 자연에서 출발한 메리골드의 이야기를
            원료의 출처부터 차분하게 기록합니다.
          </p>
        </article>
        <article>
          <span className="story-no">02</span>
          <h2>Observed by Data</h2>
          <p>
            생활 속 빛 환경을 수치로 기록하고, 공개 가능한 데이터로 축적합니다.
            Blue Light Archive는 이러한 태도를 보여주는 공간입니다.
          </p>
        </article>
        <article>
          <span className="story-no">03</span>
          <h2>Made for Everyday Skin</h2>
          <p>
            자연 원료와 전달 기술, 그리고 피부에 대한 관심을 하나의
            일상적인 스킨케어 경험으로 연결합니다.
          </p>
        </article>
      </div>
    </section>
  );
}
