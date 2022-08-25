import Information from './Information';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
    <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <Information title="290M+" info="Players Top Up" />
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
            <Information title="12.500" info="Games Available" />
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
            <Information title="99.9%" info="Happy Players" />
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
            <Information title="4.7" info="Rating Worldwide" />
        </div>
    </div>
    </section>
  );
}
