import "./sass/main.scss";
import Navigation from "./components/layout/navigation/Navigation";
import PopUp from "./components/common/PopUp";
import Header from "./components/layout/header/Header";
import About from "./components/layout/about/About";
import Features from "./components/layout/features/Features";
import Tours from "./components/layout/tours/Tours";
import Stories from "./components/layout/stories/Stories";
import Book from "./components/layout/booking/Book";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div>
      <Navigation navigationClasses={"navigation"} />
      <Header headerClasses={"header"} />
      <About aboutClasses={"section-about"} />
      <Features featureClasses={"section-features"} />
      <Tours tourClasses={"section-tours"} />
      <Stories storiesClasses={"section-stories"} />
      <Book bookClasses={"section-book"} />
      <Footer footerClasses={"footer"} />
      <PopUp popupClasses={"popup"} />
    </div>
  );
}

export default App;
