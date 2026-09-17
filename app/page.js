import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">MARIGOLD × SCIENCE × HEALTHY SKIN</div>
          <h1>LIGHT, OBSERVED<br />WITH CARE.</h1>
          <p className="hero-korean">일상의 빛을 관찰하고, 피부를 더 따뜻하게 지킵니다.</p>
          <p className="hero-en">
            We observe the light in your everyday life and care for your skin
            through the warmth of nature and the discipline of science.
          </p>
          <div className="button-row">
            <Link href="/archive" className="btn btn-primary">Explore Archive →</Link>
            <Link href="/our-story" className="btn btn-secondary">Our Story</Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Marigold field concept">
          <div className="sun-orb" />
          <div className="marigold m1" />
          <div className="marigold m2" />
          <div className="marigold m3" />
          <div className="marigold m4" />
          <div className="hero-script">Small light,<br />Brighter tomorrow</div>
        </div>
      </section>

      <section className="section philosophy">
        <div className="section-intro">
          <div className="eyebrow">OUR PHILOSOPHY</div>
          <h2>Warmth × Science</h2>
          <p>
            자연의 따뜻함과 과학의 정밀함이 만날 때,
            피부를 바라보는 방식도 더 세심해질 수 있다고 믿습니다.
          </p>
        </div>

        <div className="principles">
          <article className="principle-card">
            <div className="icon-circle">✿</div>
            <h3>NATURAL WARMTH</h3>
            <strong>자연이 주는 따뜻한 해답</strong>
            <p>메리골드에서 시작하는 원료의 이야기를 차분하게 기록합니다.</p>
          </article>

          <article className="principle-card">
            <div className="icon-circle">⌁</div>
            <h3>TRUSTED BY DATA</h3>
            <strong>데이터로 확인하는 태도</strong>
            <p>일상의 빛을 기록하고 비교하며, 객관적인 근거를 쌓아갑니다.</p>
          </article>

          <article className="principle-card">
            <div className="icon-circle">◇</div>
            <h3>HEALTHY SKIN TOMORROW</h3>
            <strong>오늘보다 더 건강한 피부를 위해</strong>
            <p>자연과 과학을 연결하는 지속 가능한 스킨케어를 지향합니다.</p>
          </article>
        </div>
      </section>

      <section className="section split-section">
        <div className="product-copy">
          <div className="eyebrow">LUTEGUARD-B™</div>
          <h2>Marigold science<br />for everyday light.</h2>
          <p>
            메리골드와 루테인, 그리고 전달 기술에 대한 연구를
            일상적인 스킨케어 경험으로 연결합니다.
          </p>
          <div className="keyword-row">
            <span>MARIGOLD</span><span>LUTEIN</span><span>LIPOSOME</span>
          </div>
          <Link href="/luteguard-b" className="text-link">Discover LUTEGUARD-B™ →</Link>
        </div>

        <div className="product-visual">
          <div className="tube">
            <div className="tube-cap" />
            <div className="tube-label">
              <strong>LUTEGUARD-B™</strong>
              <span className="tiny-flower">✿</span>
              <small>MARIGOLD · LUTEIN</small>
              <small>PHOTO PROTECT / PHOTO REPAIR</small>
            </div>
          </div>
        </div>

        <div className="archive-preview">
          <div className="eyebrow">BLUE LIGHT ARCHIVE</div>
          <h2>Explore everyday light.</h2>
          <div className="fake-search">장소, 키워드로 검색해보세요.</div>
          <div className="fake-table">
            <div><span>001</span><span>생활공간</span><span>사무실</span><b>높음</b></div>
            <div><span>002</span><span>생활공간</span><span>거실</span><b>보통</b></div>
            <div><span>003</span><span>교통/이동</span><span>지하철</span><b>높음</b></div>
          </div>
          <Link href="/archive" className="text-link">Open Archive →</Link>
        </div>
      </section>
    </>
  );
}
