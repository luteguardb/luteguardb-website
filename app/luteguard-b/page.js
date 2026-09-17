export const metadata = { title: "LUTEGUARD-B™ | Product & Science" };

export default function LuteguardPage() {
  return (
    <section className="product-page">
      <div className="page-heading">
        <div className="eyebrow">LUTEGUARD-B™</div>
        <h1>Light-conscious skincare.</h1>
        <p>
          메리골드에서 시작해 루테인과 전달 기술로 이어지는
          LUTEGUARD-B™의 스킨케어 접근을 소개합니다.
        </p>
      </div>

      <div className="science-grid">
        <article>
          <div className="science-mark">✿</div>
          <h2>MARIGOLD</h2>
          <p>브랜드의 출발점이 되는 식물 원료와 지역의 이야기.</p>
        </article>
        <article>
          <div className="science-mark">L</div>
          <h2>LUTEIN</h2>
          <p>메리골드 유래 성분을 중심으로 한 원료 연구의 핵심.</p>
        </article>
        <article>
          <div className="science-mark">◎</div>
          <h2>DELIVERY</h2>
          <p>리포좀·나노에멀전 등 제형과 전달 방식에 대한 탐구.</p>
        </article>
      </div>

      <div className="product-lines">
        <div>
          <span className="eyebrow">01</span>
          <h2>PHOTO REPAIR</h2>
          <p>일상적인 빛 환경에 노출된 피부를 위한 케어 컨셉.</p>
        </div>
        <div>
          <span className="eyebrow">02</span>
          <h2>PHOTO PROTECT</h2>
          <p>생활광과 자외선 환경을 고려한 프로텍션 컨셉.</p>
        </div>
      </div>
    </section>
  );
}
