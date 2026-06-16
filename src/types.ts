export interface Project {
  title: string;
  image: string;
  information: string;
  preview: string | null;
  code: string;
}

export interface Logo {
  title: string;
  src: string;
}

export interface Track {
  id: string;
  title: string;
}

export interface TracksData {
  tracks: Track[];
  playlistId: string;
}
