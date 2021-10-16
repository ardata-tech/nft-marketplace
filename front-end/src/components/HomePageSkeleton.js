import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const HomePageSkeleton = ({ hideBanner }) => {
  return (
    <main className="main-content mt-4 border-radius-lg">
      <SkeletonTheme>
        {!hideBanner && (
          <div className="rounder-corner-skeleton">
            <Skeleton height="30vh" width="98%" />
          </div>
        )}
        <div className="mt-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex w-50">
              <Skeleton height={70} width={70} circle={true} />
              <div className="d-flex flex-column h-100 w-90 m-2 justify-content-center">
                <Skeleton width="10%" height={20} />
                <Skeleton width="40%" height={25} />
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-between mx-5 my-auto w-50 h-100">
              <div />
              <Skeleton width="30vh" height={20} />
            </div>
          </div>
        </div>
        <div className="col-12 py-4" style={{ width: "98%" }}>
          <div className="card">
            <div className="card-body d-flex flex-wrap">
              <div
                className="mx-2 flex-grow-1 rounder-corner-skeleton"
                style={{ minWidth: "250px", maxWidth: "350px" }}
              >
                <Skeleton width="100%" height={350} />
              </div>
              <div
                className="mx-2 flex-grow-1 rounder-corner-skeleton"
                style={{ minWidth: "250px", maxWidth: "350px" }}
              >
                <Skeleton width="100%" height={350} />
              </div>
              <div
                className="mx-2 flex-grow-1 rounder-corner-skeleton"
                style={{ minWidth: "250px", maxWidth: "350px" }}
              >
                <Skeleton width="100%" height={350} />
              </div>
              <div
                className="mx-2 flex-grow-1 rounder-corner-skeleton"
                style={{ minWidth: "250px", maxWidth: "350px" }}
              >
                <Skeleton width="100%" height={350} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex w-50">
              <Skeleton height={70} width={70} circle={true} />
              <div className="d-flex flex-column h-100 w-90 m-2 justify-content-center">
                <Skeleton width="10%" height={20} />
                <Skeleton width="40%" height={25} />
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-between mx-5 my-auto w-50 h-100">
              <div />
              <Skeleton width="30vh" height={20} />
            </div>
          </div>
        </div>
        <div className="col-12 py-4" style={{ width: "98%" }}>
          <div className="card">
            <div className="card-body d-flex flex-wrap">
              <div
                className="mx-2 flex-grow-1 rounder-corner-skeleton"
                style={{ minWidth: "250px", maxWidth: "350px" }}
              >
                <Skeleton width="100%" height={350} />
              </div>
              <div
                className="mx-2 flex-grow-1 rounder-corner-skeleton"
                style={{ minWidth: "250px", maxWidth: "350px" }}
              >
                <Skeleton width="100%" height={350} />
              </div>
              <div
                className="mx-2 flex-grow-1 rounder-corner-skeleton"
                style={{ minWidth: "250px", maxWidth: "350px" }}
              >
                <Skeleton width="100%" height={350} />
              </div>
              <div
                className="mx-2 flex-grow-1 rounder-corner-skeleton"
                style={{ minWidth: "250px", maxWidth: "350px" }}
              >
                <Skeleton width="100%" height={350} />
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </main>
  );
};

export default HomePageSkeleton;
