import "./App.css";
import Carousel from "./Card";

function App() {
  const cards = [
    {
      title: "ACTING HEADSHOTS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/actor-headshot-chicago-acting-headshot-for-actors-1.webp",
    },
    {
      title: "PERSONAL BRANDING",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/personal-branding-images-of-chicago-hospitality-industry-ceo-in-his-beautiful-home-1.webp",
    },
    {
      title: "MODELING HEADSHOTS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/model-headshots-young-attractive-brunette-female-model-headshot-for-comp-card.webp",
    },
    {
      title: "OFFICE HEADSHOTS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/office-headshots-chicago-headshot-photographer-on-location-headshots-and-portraits-1.webp",
    },
    {
      title: "CORPORATE HEADSHOTS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/corporate-headshot-well-dressed-finance-executive-in-blue-suit-photographed-on-assorted-backgrounds-1.webp",
    },
    {
      title: "GROUP HEADSHOTS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/group-headshots-in-office-headshots-for-executives-and-teams.webp",
    },
    {
      title: "PROFESSIONAL HEADSHOTS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/professional-headshots-bts-shot-of-michael-schacht-photographing-man-in-business-suit-1.webp",
    },
    {
      title: "BUSINESS HEADSHOTS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/business-headshots-examples-of-business-headshots-appropriate-for-distinguished-woman.webp",
    },
    {
      title: "HEADSHOTS FOR WOMEN",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/headshots-for-women-gorgeous-brunette-woman-in-a-stylish-chicago-studio-radiating-confidence-in-her-personal-branding-portraits-and-headshots-for-women.webp",
    },
    {
      title: "HEADSHOTS FOR MEN",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/headshots-for-men-from-dating-profiles-to-linkedin-to-comp-cards-every-man-needs-a-headshot-1.webp",
    },
    {
      title: "INFLUENCER HEADSHOTS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/influencer-headshots-headshots-and-personal-branding-for-influencers-in-chicago.webp",
    },
    {
      title: "HEADSHOTS FOR TEENS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/headshots-for-teens-authentic-teenage-actor-headshot-in-studio-setting-1.webp",
    },
    {
      title: "ACTOR HEADSHOTS",
      image:
        "https://312elements.com/wp-content/uploads/2023/08/actor-headshot-chicago-acting-headshot-for-actors-1.webp",
    },
  ];
  return (
    <div className="main">
      <div className="" style={{ height: "100vh" }}></div>
      <Carousel cards={cards} />
      <div className="" style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
