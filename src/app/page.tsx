import Header from "./components/Header";
import StockQuotes from "./components/Section1";
import News from "./components/Section2";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";

export default function Home() {
  return (
   <div>
      <Header />
      <ContentContainer>
        <StockQuotes />
        <News />
      </ContentContainer>
      <Footer />
    </div>
  );
}
