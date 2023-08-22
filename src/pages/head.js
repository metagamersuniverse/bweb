import NewsTicker from "../components/NewsTicker";

const Head = () => {
  const headlines = [
    "Don't Miss Out: Airdrop is Open for Limited Time!",
    "Explore More Opportunities: Complete Additional Tasks!",
    "Discover Exciting Updates: Stay Connected on Telegram!",
  ];

  return (
    <div>
      <h1>Welcome to Our News Website</h1>
      <NewsTicker headlines={headlines} />
    </div>
  );
};

export default Head;
