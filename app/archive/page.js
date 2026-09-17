export const metadata = {
  title: "ARCHIVE | LUTEGUARD-B™",
  description: "Blue Light Archive",
};

function buildEmbedUrl() {
  const base =
    process.env.NEXT_PUBLIC_STREAMLIT_URL ||
    "https://blue-light-archive.streamlit.app";

  return `${base.replace(/\/$/, "")}/?embed=true&embed_options=light_theme&embed_options=hide_loading_screen`;
}

export default function ArchivePage() {
  const src = buildEmbedUrl();

  return (
    <section className="archive-page">
      <div className="page-heading">
        <div className="eyebrow">BLUE LIGHT ARCHIVE</div>
        <h1>ARCHIVE</h1>
        <p>
          일상 속 빛 환경을 기록하고 비교하는 공개 데이터 아카이브입니다.
        </p>
      </div>

      <div className="archive-frame-wrap">
        <iframe
          className="archive-frame"
          src={src}
          title="Blue Light Archive"
          loading="lazy"
          allow="clipboard-read; clipboard-write"
        />
      </div>
    </section>
  );
}
