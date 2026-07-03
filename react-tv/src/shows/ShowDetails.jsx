import { useState } from "react";
import "./shows.css";
import EpisodeList from "./EpisodeList.jsx";
import EpisodeDetails from "./EpisodeDetails.jsx";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <div className="show-details">
        <p>Please select a show to view its episodes.</p>
      </div>
    );
  }

  return (
    <div className="show-details">
      <EpisodeList
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}

