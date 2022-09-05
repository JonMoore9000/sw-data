import { SkyweaverAPIClient, GameMode } from 'skyweaver';

const apiAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJMTjQ5Q2F0S1V1IiwiZXhwIjoxNjkzNTI4MzI4LCJpYXQiOjE2NjE5Nzc5Mjh9.imNppthf_yWw9gDPwCvHWHdcyeMTsh4u7lweG-NsY9E';
const apiClient = new SkyweaverAPIClient(apiAccessToken);
const leaderboard = await apiClient.listLeaderboard({
  req: {
    gameMode: GameMode.RANKED_CONSTRUCTED
  }
});

console.log(leaderboard);
