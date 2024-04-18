import { TwitchComment, YouTubeComment } from "../../src/types/Comment";
export function createYouTubeComment(): YouTubeComment {
  return {
    service: "youtube",
    id: "test",
    name: "test",
    url: "http://localhost:11180/test",
    color: {
      r: 0,
      g: 0,
      b: 0,
    },
    data: {
      isModerator: false,
      isMember: false,
      autoModerated: false,
      id: "0",
      userId: "a",
      liveId: "hoge",
      name: "test",
      isOwner: false,
      hasGift: false,
      profileImage: "",
      badges: [],
      timestamp: "1900/01/01 00:00:00",
      comment: "comment test",
    },
  };
}
export function createTwitchComment(): TwitchComment {
  return {
    service: "twitch",
    id: "test",
    name: "test",
    url: "http://localhost:11180/test",
    color: {
      r: 0,
      g: 0,
      b: 0,
    },
    data: {
      isModerator: false,
      id: "0",
      userId: "a",
      liveId: "hoge",
      name: "test",
      isOwner: false,
      hasGift: false,
      profileImage: "",
      badges: [],
      timestamp: "1900/01/01 00:00:00",
      comment: "comment test",
      origin: "comment test",
      screenName: "test",
    },
  };
}
