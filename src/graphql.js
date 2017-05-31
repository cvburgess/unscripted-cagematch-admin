import gql from 'graphql-tag';

export const MATCHES_AND_TEAMS_QUERY = gql`
  query allMatchesAndTeams {
    matches {
      matchId
      isVotingOpen
      date
      teams {
        votes {
          voteId
        }
        teamId
        name
        logoData
      }
    }
    teams {
      name
      teamId
      logoData
    }
  }`;

export const ALL_MATCHES_QUERY = gql`
  query allMatches {
    matches {
      matchId
      isVotingOpen
      date
      teams {
        votes {
          voteId
        }
        teamId
        name
        logoData
      }
    }
  }`;

export const ALL_TEAMS_QUERY = gql`
  query allTeams {
    teams {
      name
      teamId
      logoData
    }
  }`;
