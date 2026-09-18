import Link from "next/link";

export const metadata = {
  title: "SHOP | LUTEGUARD-B™",
  description: "Shop LUTEGUARD-B™ skincare.",
};

export default function ShopPage() {
  return (
    <section className="shop-page">

      <div className="page-heading">
        <div className="eyebrow">
          LUTEGUARD-B™
        </div>

        <h1>SHOP</h1>

        <p>
          일상의 빛을 생각하는 메리골드 루테인 스킨케어.
          LUTEGUARD-B™의 제품을 만나보세요.
        </p>
      </div>


      <section className="shop-grid">

        <article className="shop-product">

          <div className="shop-product-image">
            <div className="shop-tube">

              <div className="shop-tube-label">
                <strong>LUTEGUARD-B™</strong>

                <span className="shop-flower">
                  ✿
                </span>

                <small>
                  MARIGOLD · LUTEIN
                </small>

                <small>
                  PHOTO REPAIR
                </small>
              </div>

            </div>
          </div>

          <div className="shop-product-info">

            <div className="eyebrow">
              PHOTO REPAIR
            </div>

            <h2>
              Blue Light Recovery Cream
            </h2>

            <p>
              일상적인 실내 빛 환경에 노출되는 피부를
              생각한 LUTEGUARD-B™ 스킨케어.
            </p>

            <div className="product-price">
              ₩49,000
            </div>

            <div className="product-benefits">
              <span>MARIGOLD</span>
              <span>LUTEIN</span>
              <span>LIPOSOME</span>
            </div>

            <button className="shop-button">
              COMING SOON
            </button>

          </div>

        </article>


        <article className="shop-product">

          <div className="shop-product-image second-product">
            <div className="shop-tube">

              <div className="shop-tube-label">
                <strong>LUTEGUARD-B™</strong>

                <span className="shop-flower">
                  ✿
                </span>

                <small>
                  MARIGOLD · LUTEIN
                </small>

                <small>
                  PHOTO PROTECT
                </small>
              </div>

            </div>
          </div>

          <div className="shop-product-info">

            <div className="eyebrow">
              PHOTO PROTECT
            </div>

            <h2>
              UV & Everyday Light Protection
            </h2>

            <p>
              자외선과 생활광 환경을 고려한
              LUTEGUARD-B™ 프로텍션 라인.
            </p>

            <div className="product-price">
              COMING SOON
            </div>

            <div className="product-benefits">
              <span>SPF50+</span>
              <span>PA++++</span>
              <span>MARIGOLD</span>
            </div>

            <button className="shop-button">
              COMING SOON
            </button>

          </div>

        </article>

      </section>


      <section className="shop-story">

        <div className="eyebrow">
          WARMTH × SCIENCE
        </div>

        <h2>
          Before you buy,<br />
          see why we made it.
        </h2>

        <p>
          LUTEGUARD-B™가 일상의 빛을 어떻게 바라보고,
          왜 메리골드와 루테인에 주목했는지 확인해보세요.
        </p>

        <div className="button-row">
          <Link
            href="/luteguard-b"
            className="btn btn-primary"
          >
            Discover LUTEGUARD-B™ →
          </Link>

          <Link
            href="/archive"
            className="btn btn-secondary"
          >
            Explore Archive
          </Link>
        </div>

      </section>

    </section>
  );
}
