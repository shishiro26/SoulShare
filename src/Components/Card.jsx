const Card = () => {
  return (
    <div id="Card">
      <div>
        <img
          src="img_girl.jpg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
        <div id="Heart"></div>
      </div>
      <div id="Details">
        <div>
          <div id="Profile">
            <a href="LinkToProfile"></a>
          </div>

          <div id="Distance"></div>
        </div>
        <div id="Posted how many days ago"></div>
        <div id="join chats buttons">
          <button>Join Chat</button>
          <button>Join Community</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
