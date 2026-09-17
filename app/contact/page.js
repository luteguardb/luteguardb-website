export const metadata = { title: "CONTACT | LUTEGUARD-B™" };

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="page-heading narrow">
        <div className="eyebrow">CONTACT</div>
        <h1>Start a conversation.</h1>
        <p>
          LUTEGUARD-B™, Blue Light Archive, 연구 협업 및 비즈니스 제안에 관한
          문의를 받고 있습니다.
        </p>
      </div>

      <div className="contact-card">
        <div>
          <span className="eyebrow">GENERAL INQUIRY</span>
          <h2>Contact</h2>
          <p>아래 이메일 주소를 실제 브랜드 문의 메일로 교체하세요.</p>
        </div>
        <a className="btn btn-primary" href="mailto:hello@luteguardb.com">
          hello@luteguardb.com
        </a>
      </div>
    </section>
  );
}
