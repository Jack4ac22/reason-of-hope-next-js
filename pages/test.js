import SpotifyPlayer from "react-spotify-player";
import { Spotify } from 'react-spotify-embed';

export default function TestPage() {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: "100%",
    height: 300,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  return (
    <>
      <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={size}
        view={view}
        theme={theme}
      />

      <div className="flex flex-row gap-8">
        <Spotify link="https://open.spotify.com/track/1CPSRRXGTQVgc1DIRWmLcg?si=b63f02bac318404d" />
        <Spotify link="https://open.spotify.com/album/527y5zpqdZc446EbgWPd6c?si=J9Ubk3bvT-arFUpp2pMxxw" />
      </div>

      <Spotify
        wide
        link="https://open.spotify.com/track/0mpTtYiDqkcOjNZqJLmjsO?si=e116707491c24ffc"
      />
    </>
  );
}
