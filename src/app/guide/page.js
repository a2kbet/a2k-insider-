// src/app/guide/page.js
import BRBGuide from "./BRBGuide";
import DepositGuidePage from "./DepositGuidePage";
import HowToDepositOnePay from "./HowToDepositOnePay";
import HowToRegister from "./HowToRegister";
import SlotsGuide from "./SlotsGuide";
import SportsBettingGuide from "./SportsBettingGuide ";
import TexasHoldemGuide from "./TexasHoldemGuide";
import USDTAndPromotions from "./USDTAndPromotions";
import WithdrawGuidePage from "./WithdrawGuidePage";

export default function GuidePage() {
  return (
    <>
      <HowToRegister />
      <DepositGuidePage />
      <HowToDepositOnePay />
      <WithdrawGuidePage />
      <USDTAndPromotions />
      <BRBGuide />
      <TexasHoldemGuide />
      <SlotsGuide />
      <SportsBettingGuide />
    </>
  );
}
