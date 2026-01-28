import MainPage from "./home/MainPage";
import CasinoOfferPage from "./home/CasinoOfferPage";
import CasinoQA from "./home/CasinoQA";
import CasinoReviews from "./home/CasinoReviews";
import CasinoTips from "./home/CasinoTips";
import DownloadApp from "./home/DownloadApp";
import GameIntroductionPage from "./home/GameIntroductionPage";
import MajorAdvantages from "./home/MajorAdvantages";
import PromoDetailsPage from "./home/PromoDetailsPage";
import TopGames from "./home/TopGames ";
import Tournaments from "./home/Tournaments";

export default function Page() {
  return (
    <>
    {/* / (Home) Route */}
      <MainPage />
      <GameIntroductionPage />
      <PromoDetailsPage />
      <Tournaments />
      <TopGames />
      <CasinoOfferPage />
      <MajorAdvantages />
      <CasinoTips />
      <CasinoQA />
      <CasinoReviews />
      <DownloadApp />
    </>
  );
}
