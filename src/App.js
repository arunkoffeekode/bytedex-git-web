import Footer from "./component/Footer";
import Emaillogin from "./pages/Emaillogin";
import Forgot from "./pages/Forgot";
import Verification from "./pages/Verification";
import NewPassword from "./pages/NewPassword";
import ExchangeAccount from "./pages/ExchangeAccount";
import Kycverification1 from "./pages/Kycverification1";
import Kycverification2 from "./pages/Kycverification2";
import Kycverification3 from "./pages/Kycverification3";
import Kycverification4 from "./pages/Kycverification4";
import Kycverification5 from "./pages/Kycverification5";
import Trade from "./pages/Trade";
import PhoneVerification from "./pages/PhoneVerification";
import EmailVerification from "./pages/EmailVerification";
import Security from "./pages/Security";
import OpenOrder from "./pages/OpenOrder";
import OrderHistory from "./pages/OrderHistory";
import TradeHistory from "./pages/TradeHistory";
import InstaTrades from "./pages/InstaTrades";
import Banks from "./pages/Banks";
import AddressBook from "./pages/AddressBook";
import Withdrawals from "./pages/Withdrawals";
import Deposits from "./pages/Deposits";
import WalletOverview from "./pages/WalletOverview";
import AccountVerification from "./pages/AccountVerification";
import Whitelisting from "./pages/Whitelisting";
import Apikeys from "./pages/Apikeys";
import ExchangeToken from "./pages/ExchangeToken";
import Volume from "./pages/Volume";
import Settings from "./pages/Settings";
import AccountVerification3 from "./pages/AccountVerification3";
import AccountVerification2 from "./pages/AccountVerification2";
import Referrals from "./pages/Referrals";
import Account from "./pages/Account";
import TokenLauncher from "./pages/TokenLauncher";
import MarketTrend from "./pages/MarketTrend";
import Header from "./component/Header";
import TopHeader from "./component/TopHeader";
import ByteTraders from "./pages/ByteTraders";
import Usdt from "./component/Usdt";



import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <TopHeader></TopHeader>
       <Header></Header>
        <Routes>
      
          <Route path="/emaillogin" element={<Emaillogin />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/exchangeAccount" element={<ExchangeAccount />} />
          <Route path="/kycverification1" element={<Kycverification1 />} />
          <Route path="/kycverification2" element={<Kycverification2/>} />
          <Route path="/kycverification3" element={<Kycverification3/>} />
          <Route path="/kycverification4" element={<Kycverification4/>} />
          <Route path="/kycverification5" element={<Kycverification5/>} />
          <Route path="/trade" element={<Trade/>} />
          <Route path="/phoneVerification" element={<PhoneVerification/>} />
          <Route path="/emailVerification" element={<EmailVerification/>} />
          <Route path="/security" element={<Security/>} />
          <Route path="/openOrder" element={<OpenOrder/>} />
          <Route path="/orderHistory" element={<OrderHistory/>} />
          <Route path="/tradeHistory" element={<TradeHistory/>} />
          <Route path="/instaTrades" element={<InstaTrades/>} />
          <Route path="/banks" element={<Banks/>} />
          <Route path="/addressBook" element={<AddressBook/>} />
          <Route path="/withdrawals" element={<Withdrawals/>} />
          <Route path="/deposits" element={<Deposits/>} />
          <Route path="/walletOverview" element={<WalletOverview/>} />
          <Route path="/accountVerification" element={<AccountVerification/>} />
          <Route path="/whitelisting" element={<Whitelisting/>} />
          <Route path="/apikeys" element={<Apikeys/>} />
          <Route path="/exchangeToken" element={<ExchangeToken/>} />
          <Route path="/volume" element={<Volume/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/accountVerification3" element={<AccountVerification3/>} />
          <Route path="/accountVerification2" element={<AccountVerification2/>} />
          <Route path="/referrals" element={<Referrals/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/tokenLauncher" element={<TokenLauncher/>} />
          <Route path="/MarketTrend" element={<MarketTrend/>} />
          <Route path="/byteTraders" element={<ByteTraders/>} />
          <Route path="/" element={<Usdt/>} />





        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
